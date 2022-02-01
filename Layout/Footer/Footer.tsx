import React from "react";
import Link from "next/link";
import { FooterProps } from "./Footer.props";
import classNames from "classnames";

import styles from "./Footer.module.css";
import CardTop from "./CardTop/card-top";
import SubscribeForm from "./SubscribeForm/SubscribeForm";

import Contacts from "./Contacts/contacts";
import CardBottom from "./CardBottom/card-bottom";
import { linkBottomCard } from "./CardBottom/card-bottom.data";
import Social from "./Social/social";

const Footer = ({ ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={classNames(props.className, [styles.footer])}>
      <div className={styles.top}>
        <CardTop title={"GardenCare"} image={"/card1.png"}>
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </CardTop>

        <CardTop title={"Plant Renovation"} image={"/card2.png"}>
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </CardTop>

        <CardTop title={"Watering Garden"} image={"/card3.png"}>
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </CardTop>
      </div>
      <div className={styles.subscribe}>
        <SubscribeForm />
      </div>

      <Contacts className={styles.contacts} />

      <div className={styles.bottom}>
        {linkBottomCard.map((item) => {
          return <CardBottom link={item} key={item.title} />;
        })}
      </div>
      <Social className={styles.social} socialMedia={[]} payment={[]} />
    </footer>
  );
};

export default Footer;
