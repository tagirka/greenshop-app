import { FC } from "react";
import { HomePageProps } from "./HomePage.props";
import styles from "./HomePage.module.css";
import Carousel from "../../components/Carousel/carousel";
import Sidebar from "../../components/Sidebar/sidebar";
import ListProducts from "../../components/ListProducts/ListProducts";
import Pagination from "../../components/Pagination/paginations";
import Detailed from "../../components/Detailed/Detailed";
import BlogPosts from "../../components/BlogHomePage/BlogPosts";

export const HomePageComponent: FC<HomePageProps> = ({
  products,
  categories,
  sizes,
  ...props
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
