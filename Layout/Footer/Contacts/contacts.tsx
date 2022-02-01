import React from "react";
import { ContactsProps } from "./contacts.props";
import Image from "next/image";
import styles from "./contacts.module.css";
import { GoLocation, GoMail } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import Brand from "../../../components/Brand/Brand";

const Contacts = ({ ...props }: ContactsProps): JSX.Element => {
  return (
    <div className={props.className}>
      {/*<Image src="/logo.png" alt="brand" width={150} height={35} />*/}
      <Brand />
      <div className={styles.contactsItem}>
        <GoLocation className={styles.ico} />
        <span>70 West Buckingham Ave. Farmingdale, NY 11735</span>
      </div>

      <div className={styles.contactsItem}>
        <GoMail className={styles.ico} />
        <span>contact@greenshop.com</span>
      </div>
      <div className={styles.contactsItem}>
        <FiPhoneCall className={styles.ico} />
        <span>+88 01911 717 490</span>
      </div>
    </div>
  );
};

export default Contacts;
