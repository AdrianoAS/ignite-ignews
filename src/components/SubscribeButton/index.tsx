import style from "./subscribeButton.module.scss";

interface SignInButtonProps {
  price_id: string;
}

export function SubscribeButton({ price_id }: SignInButtonProps) {
  return (
    <button type="button" className={style.subscribeButton}>
      Subscribe now
    </button>
  );
}
