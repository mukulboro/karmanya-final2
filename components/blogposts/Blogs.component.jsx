import CardComponent from "../blogcard/Card.component";
import { useEffect, useState } from "react";
import styles from "./blog.module.css";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import { StylesContext } from "@material-ui/styles";
const Blogs = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const response = await fetch("https://karmanya.herokuapp.com/blog");
    const data = await response.json();
    setData(data.reverse());
  }, []);
  return (
    <div className={styles.parent}> 
      <h1 className={styles.header}> Who we help</h1>
      <p className={styles.subtitle}>Your single penny can change someone's life</p>
        {data?.slice(0, 3)?.map((d) => (
          <CardComponent
            title={d?.title}
            postID={d?.id}
            body={ReactHtmlParser(d?.body.slice(0, 20))}
            src={d?.imageURL}
            key={Math.random()}
          />
        ))}

    </div>
  );
};



export default Blogs;
