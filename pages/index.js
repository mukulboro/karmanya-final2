import Head from "next/head";
import Header from "../components/section1/Header";
import data from "../components/section2/card.data";
import Section2 from "../components/section2/section2.component";
import Section3 from "../components/section3/section3.component";
import Section4 from "../components/section4/section4.component";
import BlogsComponent from "../components/blogposts/Blogs.component";
import styles from "./index.module.css";
import Link from "next/dist/client/link";
export default function Home() {
  return (
    <div className="container" className={styles.container}>
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <title>Karmanya Foundation</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, minimum-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel="stylesheet" href="index.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <>
        <Header />

        <Section2 data={data} />

        <Section3 />

        {/* <Section4 /> */}

        <BlogsComponent />
        
       <div className={styles.donateNow}>
         <Link href="/donate">
           <div className={styles.donate}>Donate To Us</div>
         </Link>
       </div>
      </>
    </div>
  );
}
