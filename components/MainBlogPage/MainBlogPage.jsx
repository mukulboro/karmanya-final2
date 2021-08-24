import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./MainBlog.module.css";
import { useRouter } from "next/dist/client/router";

export const MainBlogPage = () => {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    const response = await axios.get("https://karmanya.herokuapp.com/blog");
    const { data } = await response;
    setPostData(data.reverse());
    setLoading(false);
  };

  useEffect(() => getData(), []);

  return (
    <>
      <section id={styles.mainHolder}>
        <h1 className={styles.h1}>Services</h1>

        {postData.map((post) => (
          <BlogCard key={post.id} post={post} loading={loading} />
        ))}
      </section>
    </>
  );
};

const BlogCard = ({ post, loading }) => {
  const router = useRouter();
  if (loading) {
    return <h2 className={styles.loading}>Loading...</h2>;
  } else {
    return (
      <section
        className={styles.blogCard}
        style={{ backgroundImage: `url(${post.imageURL})` }}
        onClick={() => {
          router.push(`/services/${post.id}`);
        }}
      >
        <h1 className={styles.postTitle}>{post.title}</h1>
        <p className={styles.postDescription}>
          {post.body.replace(/<[^>]*>?/gm, "").slice(0, 65)}.....
        </p>
      </section>
    );
  }
};

export default MainBlogPage;
