import React from "react";
import styles from "./SubscribeForm.module.css";

import { SubscribeFormProps } from "./SubscribeForm.props";

const SubscribeForm = ({ ...props }: SubscribeFormProps) => {
  return (
    <div className={styles.subscribe}>
      <form {...props}>
        <h3 className={styles.title}>Would you like to join newsletters?</h3>
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            placeholder="enter your email address..."
          />
          <button className={styles.button}>Join</button>
        </div>

        <p className={styles.description}>
          We usually post offers and challenges in newsletter. We’re your online
          houseplant destination. We offer a wide range of houseplants and
          accessories shipped directly from our (green)house to yours!{" "}
        </p>
      </form>
    </div>
  );
};

export default SubscribeForm;
