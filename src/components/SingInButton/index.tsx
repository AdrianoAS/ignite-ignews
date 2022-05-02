import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import style from "./singInButton.module.scss";

export function SingInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button type="button" className={style.singInButton}>
      <FaGithub color="#04d361" />
      Adriano Santos
      <FiX color="#737380" className={style.closeIcon} />
    </button>
  ) : (
    <button type="button" className={style.singInButton}>
      <FaGithub color="#eba417" />
      sing in with github
    </button>
  );
}
