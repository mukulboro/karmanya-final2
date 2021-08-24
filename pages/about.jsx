import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
const sliderImage1 = "/sliderImage1.jpg";
const sliderImage2 = "/sliderImage2.JPG";
const sliderImage3 = "/sliderImage3.jpg";
import { useState } from "react";
import styles from "../styles/about.module.css";
import Head from "next/dist/next-server/lib/head";

export const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <h1 className={styles.h1}>About Us</h1>
      <HeadSlider />

      <section className={styles.content}>
        <h2>Who are we?</h2>
        <p>
          We are karmanya Foundation. Ever since we were founded, we have been
          working our best to ensure a better life for as many children as well
          as mothers. Other than that, Karmanya also organizes various programs
          and seminars to help the youth of the country become more independent
          and politically literate.
        </p>

        <h2>Message from the director</h2>

        <img
          className={styles.director}
          src="https://scontent.fktm10-1.fna.fbcdn.net/v/t1.6435-9/132021649_10208038916647692_2204266168629443051_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=lORMU8KqpKQAX84kkLW&_nc_ht=scontent.fktm10-1.fna&oh=aae993fae36b5b9c4e72b8e11db884fd&oe=6145CBFE"
          alt="karmanya-director"
        />
        <p>
          Every child deserves a good childhood and every mother needs to live
          long enough to see the prosperity of their children. I have had this
          believe ever since I was a child, and finally as an adult I can work
          towards making my belief a reality. With this thought in mind,
          Karmanya Foundation was built with 7 founding members. <br />
          Karmanya has been working for years to uplift the lives of
          underprivileged children and parents. I am very thankful to all our
          members as well as the donors for helping Karmanya change lives of
          those who need it. We have successfully conducted a lot of programs
          over the years to raise donations for the ones in need. <br /> This
          would not have been possible without the continuous support of the
          team as well as the donors.
        </p>
        <h2>Our Team</h2>
        <section className={styles.ourTeam}>
          <ImageCard
            name="Mr. Samrat Pal"
            post="Director"
            image="https://scontent.fktm10-1.fna.fbcdn.net/v/t1.6435-9/132021649_10208038916647692_2204266168629443051_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=lORMU8KqpKQAX84kkLW&_nc_ht=scontent.fktm10-1.fna&oh=aae993fae36b5b9c4e72b8e11db884fd&oe=6145CBFE"
          />
          <ImageCard
            name="Mr. Dipesh Aryal"
            post="President"
            image="https://scontent.fktm7-1.fna.fbcdn.net/v/t31.18172-8/25398363_1983526815218934_1291752714390095015_o.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=4JtViZ-eZRIAX8EbthC&_nc_ht=scontent.fktm7-1.fna&oh=b94db8d1a0fd342e0375a4fb88f78fdc&oe=614A8110"
          />
          <ImageCard
            name="Mr. Muktak Aryal"
            post="Program Co-ordinator"
            image="https://scontent.fktm7-1.fna.fbcdn.net/v/t31.18172-8/19693777_10214078530976098_1832188617969481567_o.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=7F1omrUUuXAAX8x0A1y&_nc_ht=scontent.fktm7-1.fna&oh=5d38a32ed97cec491dda1bd7fac06fc3&oe=61495D0F"
          />
        </section>
      </section>
    </>
  );
};

const HeadSlider = () => {
  const headerContent1 = {
    title: "We are Karmanya",
    subtitle: "We work tirelessly to ensure better life for others, especially children and underpriviledged mothers.",
    image: sliderImage1,
  };

  const headerContent2 = {
    title: "Knowledge is key",
    subtitle:
      "We work with severeal other organizations and institutions to impart necessary knowledge to those who need it.",
    image: sliderImage2,
  };

  const headerContent3 = {
    title: "Every child deserves a home.",
    subtitle:
      "We believe that every child needs a loving and comforting environment to grow in.",
    image: sliderImage3,
  };

  const sliderContent = [headerContent1, headerContent2, headerContent3];

  const [sliderContentNumber, setSliderContentNumber] = useState(0);
  useEffect(function componentDidMount() {
    sliderContent.forEach((image) => {
      new Image().src = image;
    });
  }, []);
  const clickHandleLeft = () => {
    if (sliderContentNumber !== 0) {
      setSliderContentNumber(sliderContentNumber - 1);
    } else {
      setSliderContentNumber(sliderContent.length - 1);
    }
  };

  const clickHandleRight = () => {
    if (sliderContentNumber < sliderContent.length - 1) {
      setSliderContentNumber(sliderContentNumber + 1);
    } else {
      setSliderContentNumber(0);
    }
  };

  return (
    <section
      id={styles.headSlider}
      style={{
        backgroundImage: `url(${sliderContent[sliderContentNumber].image})`,
      }}
    >
      <main className={styles.headerContent}>
        <div
          className={`${styles.iconLeft} ${styles.icon}`}
          onClick={clickHandleLeft}
        >
          <FontAwesomeIcon icon={faArrowCircleLeft} />
        </div>

        <div className={styles.textMiddle}>
          <h2>{sliderContent[sliderContentNumber].title}</h2>
          <p>{sliderContent[sliderContentNumber].subtitle}</p>
        </div>

        <div
          className={`${styles.iconRight} ${styles.icon}`}
          onClick={clickHandleRight}
        >
          <FontAwesomeIcon icon={faArrowCircleRight} />
        </div>
      </main>
    </section>
  );
};

const ImageCard = ({ name, post, image }) => {
  return (
    <div className={styles.team}>
      <img className={styles.personPhoto} src={image} alt="team-member" />
      <h3 className={styles.personName}>{name}</h3>
      <h6 className={styles.personPost}>{post}</h6>
    </div>
  );
};
export default AboutUs;
