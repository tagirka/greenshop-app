import React from "react";

import { DetailedProps } from "./Detailed.props";
import styles from "./Detailed.module.css";

import CardDetailed from "./Card/CardDetailed";

const data = [
  {
    title: "Summer cactus & succulents",
    description:
      " We are an online plant shop offering a wide range of cheap and trendy plants",
    image: "product4.png",
  },
  {
    title: "Styling Trends much more",
    description:
      " We are an online plant shop offering a wide range of cheap and trendy plants",
    image: "product3.png",
  },
];

const Detailed = ({ ...props }: DetailedProps): JSX.Element => {
  return (
    <section className={[props.className, styles.wrapper].join(" ")}>
      {data.map((p) => {
        return (
          <CardDetailed
            key={p.title + p.image}
            title={p.title}
            image={p.image}
            description={p.description}
            href={""}
          />
        );
      })}
    </section>
  );
};

export default Detailed;
