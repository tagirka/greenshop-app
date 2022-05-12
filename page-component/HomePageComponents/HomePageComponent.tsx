import { FC, useContext } from "react";
import { HomePageProps } from "./HomePage.props";
import styles from "./HomePage.module.css";
import Carousel from "./Carousel/carousel";
import Sidebar from "./Sidebar/sidebar";
import ListProducts from "./ListProducts/ListProducts";
import Pagination from "./Pagination/paginations";
import Detailed from "./Detailed/Detailed";
import BlogPosts from "./BlogHomePage/BlogPosts";

export const HomePageComponent: FC<HomePageProps> = ({
  products,
  categories,
  sizes,
}) => {
  return (
    <article className={styles.wrapper}>
      <Carousel className={styles.carousel} />
      <Sidebar
        className={styles.sideBar}
        sizes={sizes}
        categories={categories}
      />
      <ListProducts className={styles.main} products={products} />
      <Pagination
        className={styles.pagination}
        limit={4}
        // suppressHydrationWarning
      />
      <Detailed className={styles.detailed} />
      <BlogPosts className={styles.blog} />
    </article>
  );
};

export default HomePageComponent;
