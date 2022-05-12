import React from "react";
import { BlogPostsProps } from "./BlogPostsProps";
import styles from "./BlogPosts.module.css";
import CardBlogPost from "./CardBlogPost/CardBlogPost";

const data = [
  {
    title: "Cactus & Succulent Care Tips",
    description:
      "Cacti are succulents are easy care plants for any home or patio.",
    date: "September 12",
    timeToRead: "Read in 6 minutes",
    image: "/blogs/01.png",
  },
  {
    title: "Top 10 Succulents for Your Home",
    description:
      "Cacti are succulents are easy care plants for any home or patio.",
    date: "September 13",
    timeToRead: "Read in 2 minutes",
    image: "/blogs/02.png",
  },

  {
    title: "Cacti & Succulent Care Tips",
    description:
      "Cacti and succulents thrive in containers and because most are..",
    date: "September 15",
    timeToRead: "Read in 3 minutes",
    image: "/blogs/03.png",
  },
  {
    title: "Best Houseplants Room by Room",
    description: "The benefits of houseplants are endless. In addition to..",
    date: "September 15",
    timeToRead: "Read in 2 minutes",
    image: "/blogs/04.png",
  },
];

const BlogPosts = ({ className, ...props }: BlogPostsProps): JSX.Element => {
  return (
    <>
      <section className={className} {...props}>
        <h2 className={styles.title}>Our Blog Post</h2>
        <p className={styles.subtitle}>
          We are an online plant shop offering a wide range of cheap and trendy
          plants.{" "}
        </p>

        <div className={styles.wrapper}>
          {data.map((c) => {
            return (
              <CardBlogPost
                key={c.title + c.date}
                title={c.title}
                description={c.description}
                date={c.date}
                timeToRead={c.timeToRead}
                image={c.image}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default BlogPosts;
