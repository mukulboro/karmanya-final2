import React from "react";
import styles from "./section4.module.css";
import Image from "next/image";
import DonateDisplay from "../Display/Display.component";
export default function Section3(props) {
  var items = [
    {
      name: "Maitighar Mandala",
      description: "Probably the most random thing you have ever seen!",
      src: "https://i.pinimg.com/originals/99/b4/71/99b471377a20348eb50c8544d67deeaf.png",
    },
    {
      name: "Didi Bahini Samuha",
      description: "Hello World!",
      src: "https://c.ndtvimg.com/2021-04/vsuvlu5o_lijjat-pappadmumbai_625x300_15_April_21.jpg",
    },
    {
      name: "Baal Mandir",
      description: "Hello World!",
      src: "https://assets-cdn.kathmandupost.com/uploads/source/news/2019/miscellaneous/ncobuilding-1482019014739-1000x0.jpg",
    },
    {
      name: "Pashupati Briddha Ashram",
      description: "Hello World!",
      src: "https://lh3.googleusercontent.com/proxy/2Bd1KuctBki1PnWyrP-TKGByukjQ9xb4lyntVUl_7fj9zJnqjiOrFpkWTod4BY25fRBNrchCPPCCmiPWnmI1qzyIRKTSYy-tGomUhibxUTZTJLOKEJEvXQfcEYKPUy6J8OpKUVC-EhlgS7yx",
    },
  ];
  return (
    <div className={styles.carousel}>
      <h1
        className={styles.header}
        style={{
          backgroundColor: "white",
        }}
      >
        Whom do we donate to?
      </h1>
      <DonateDisplay />
    </div>
  );
}
