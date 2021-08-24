import Image from "next/image";
import Link from "next/link";
import styles from "./section3.module.css";
import { Button } from "@material-ui/core";

const Section3 = () => {
  const shortText = "Every child deserves a good childhood and every mother needs to live long enough to see the prosperity of their children. I have had this believe ever since I was a child, and finally as an adult....."
  return (
    <div className={styles.section3}>
      <div>
        <Image
          className={styles.picture}
          src="/director.png"
          width={150}
          height={150}
        />
      </div>
      <div>
        <h1>Message from the Director</h1>
        <h2>Mr. Samrat Pal</h2>
      </div>
      <div className={styles.body}>
        <p>
          {shortText}
          <br />
          <Link href="/about">
            Read More
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Section3;
