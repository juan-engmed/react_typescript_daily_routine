import { ReactElement } from "react";
import Styles from "./Footer.module.css";

function Footer(): ReactElement {
  return (
    <footer className={Styles.footer}>
      <p>
        <span>Juan Oliveira Dev</span>
      </p>
    </footer>
  );
}

export default Footer;
