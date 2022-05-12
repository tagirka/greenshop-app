import { FC } from "react";
import { TopProductPageProps } from "./TopProductPage.props";
import styles from "./TopProductPage.module.css";

import ViewTopProductPage from "./View/viewTopProductPage";
import InfoTopProductPage from "./Info/infoTopProductPage";

const TopProductPage: FC<TopProductPageProps> = ({ className }) => {
  return (
    <article className={className}>
      <ViewTopProductPage className={styles.view} />

      <InfoTopProductPage className={styles.info} />
    </article>
  );
};

export default TopProductPage;
