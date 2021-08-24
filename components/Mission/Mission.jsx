import React from "react";
import styles from "./Mission.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";

const Mission = ({ data }) => {
  const [work, setWork] = useState(null);

  useState(() => {
    const getData = async () => {
      const { data } = await axios.get("https://karmanya.herokuapp.com/work");
      setWork(data);
    };

    getData();
  }, []);

  console.log(data);
  return (
    <>
      <h1 className={styles.h1}>Our Mission</h1>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima quam
        dicta omnis? Atque enim vero labore itaque laudantium, eum voluptates
        vitae nihil sapiente facilis nostrum saepe amet. Ducimus dolorum iste,
        distinctio, pariatur quibusdam, eum necessitatibus aut similique
        nesciunt nulla maiores.
      </p>

      <h1 className={styles.h1}>Our Works</h1>
      {work ? (
        <WorkList works={work} />
      ) : (
        <h1 className={styles.loading}>Loading....</h1>
      )}
    </>
  );
};

const WorkList = ({ works }) => {
  const colorHex = [
    "#668dfb",
    "#ffcf6e",
    "#ff8669",
    "#04aa6d",
    "#9370DB",
    "#ff9999",
  ];
  return (
    <section className={styles.work}>
      {works.map((work, i) => {
        return (
          <section
            key={work.id}
            className={styles.workCard}
            style={{ backgroundColor: colorHex[i] }}
          >
            <h2 className={styles.workTitle}>{work.title}</h2>
            <img
              src={work.imageURL}
              className={styles.workImg}
              alt={work.title}
            />
            <p className={styles.workBody}>{ReactHtmlParser(work.body)}</p>
          </section>
        );
      })}
    </section>
  );
};

export default Mission;
