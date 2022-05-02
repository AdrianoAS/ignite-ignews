import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";

import style from "../pages/home.module.scss";

export default function Home() {
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
            <span>for $9.90 month.</span>
          </p>
          <SubscribeButton />
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}
