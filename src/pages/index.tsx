import Head from "next/head";
import { GetServerSideProps } from "next";
import { SubscribeButton } from "../components/SubscribeButton";

import { stripe } from "../services/stripe";

import style from "../pages/home.module.scss";

interface HomeProps {
  product: {
    price_id: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>id.new</title>
      </Head>
      <main className={style.contentContainer}>
        <section className={style.hero}>
          <span>👏 Hey, wellcome!</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access all the publication <br />
            <span>for {product.amount} month.</span>
          </p>
          <SubscribeButton price_id={product.price_id} />
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve("price_1KvtNJECuDiNww0jXFwpJaC0");

  const product = {
    price_id: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
  };
};
