import { ReactElement } from "react";
import Styles from "./Header.module.css";

function Header(): ReactElement {
  return (
    <header className={Styles.header}>
      <h1>Daily Routine</h1>
    </header>
  );
}

export default Header;
