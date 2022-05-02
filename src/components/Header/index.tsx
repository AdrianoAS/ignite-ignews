import { SingInButton } from "../SingInButton";
import style from "./header.module.scss";

export function Header() {
  return (
    <header className={style.containerHeader}>
      <div className={style.contentHeader}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <a href="#" className={style.active}>
            Home
          </a>
          <a href="#">Posts</a>
        </nav>
        <SingInButton />
      </div>
    </header>
  );
}
