import React, { FC, useState } from "react";
import { MainProductPageProps } from "./MainProductPage.props";
import styles from "./MainProduct.module.css";
import classNames from "classnames";

const menu = [
  { id: 1, title: "Product Description" },
  { id: 2, title: "Reviews" },
];

const MainProductPage: FC<MainProductPageProps> = ({ className }) => {
  const [itemMenu, setItemMenu] = useState(1);

  const handleMenu = (id: number) => {
    setItemMenu(id);
  };

  return (
    <article className={className}>
      <ul className={styles.menu}>
        <li
          onClick={() => handleMenu(1)}
          className={classNames(styles.menuItem, {
            [styles.activeItemMenu]: itemMenu === 1,
          })}
        >
          Product Description
        </li>
        <li
          onClick={() => handleMenu(2)}
          className={classNames(styles.menuItem, {
            [styles.activeItemMenu]: itemMenu === 2,
          })}
        >
          Reviews (19)
        </li>
      </ul>

      <div
        className={classNames(styles.description, {
          [styles.visible]: itemMenu === 1,
          [styles.invisible]: itemMenu !== 1,
        })}
      >
        <p>
          The ceramic cylinder planters come with a wooden stand to help elevate
          your plants off the ground. The ceramic cylinder planters come with a
          wooden stand to help elevate your plants off the ground. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec
          est tristique auctor. Donec non est at libero vulputate rutrum. Morbi
          ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate
          adipiscing cursus eu, suscipit id nulla. Pellentesque aliquet, sem
          eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis
          eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa.
          Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit
          est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum,
          metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque
          metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula
          tellus, in imperdiet ligula euismod eget. The ceramic cylinder
          planters come with a wooden stand to help elevate your plants off the
          ground.{" "}
        </p>
        <strong>Living Room: </strong>

        <p>
          The ceramic cylinder planters come with a wooden stand to help elevate
          your plants off the ground. The ceramic cylinder planters come with a
          wooden stand to help elevate your plants off the ground. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </p>

        <strong>Dining Room:</strong>

        <p>
          The benefits of houseplants are endless. In addition to cleaning the
          air of harmful toxins, they can help to improve your mood, reduce
          stress and provide you with better sleep. Fill every room of your home
          with houseplants and their restorative qualities will improve your
          life.
        </p>

        <strong>Office:</strong>

        <p>
          The ceramic cylinder planters come with a wooden stand to help elevate
          your plants off the ground. The ceramic cylinder planters come with a
          wooden stand to help elevate your plants off the ground. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div
        className={classNames(styles.description, {
          [styles.visible]: itemMenu === 2,
          [styles.invisible]: itemMenu !== 2,
        })}
      >
        <p>review 1</p>
        <p>review 2</p>
        <p>review 3</p>
      </div>
    </article>
  );
};

export default MainProductPage;
