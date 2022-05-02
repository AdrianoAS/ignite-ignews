import style from "./subscribeButton.module.scss";

export function SubscribeButton() {
  return (
    <button type="button" className={style.subscribeButton}>
      Subscribe now
    </button>
  );
}
