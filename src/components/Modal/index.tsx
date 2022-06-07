import * as React from "react";

import Styles from "./Modal.module.css";

interface IModalProps {
  children: React.ReactNode;
}

export default function App(props: IModalProps) {
  const closeModal = (e: React.MouseEvent) => {
    const modal = document.querySelector("#modal");
    modal?.classList.add("hide");
  };
  return (
    <div id="modal" className="hide">
      <div className={Styles.fade} onClick={closeModal}></div>
      <div className={Styles.modal}>
        <h2>Texto Modal</h2>
        {props.children}
      </div>
    </div>
  );
}
