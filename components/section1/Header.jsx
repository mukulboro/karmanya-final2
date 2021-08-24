import { useEffect } from "react";
import Link from "next/link";
import styles from "./header.module.css";
import { useState } from "react";
const headerImage1 = "/headerImage1.jpg";
const headerImage2 = "/headerImage2.jpg";
const headerImage3 = "/headerImage3.jpg";
const nepalMap = "/nepalMap.png";
function Header() {
  const imageList = [headerImage1, headerImage2, headerImage3];
  const [headerImage, setHeaderImage] = useState(headerImage1);
  useEffect(function componentDidMount() {
    imageList.forEach((image) => {
      new Image().src = image;
    });
  }, []);

  const slideshow = () => {
    if (headerImage === headerImage1) {
      setHeaderImage(headerImage2);
    } else if (headerImage === headerImage2) {
      setHeaderImage(headerImage3);
    } else {
      setHeaderImage(headerImage1);
    }
  };

  setTimeout(slideshow, 4000);

  return (
    <>
      <div className={styles.fullHeader}>
        <div className={styles.header}>
          <div className={styles.textHolder}>
            <h1>A world where no child or mother is a victim.</h1>
            <p>
              Everyday, thousands of mothers and children have to suffer and live a horrible life because
              of situations out of their control. Here at Karmanya, we strive to make life better for these victims.
            </p>
            <Link href="/donate">
              <button id={styles.donateNow}>Donate Now</button>
            </Link>
          </div>
          <img
            src={nepalMap}
            alt="nepal-map-overlay"
            id={styles.mapOverlay}
            style={{ backgroundImage: `url("${headerImage}")` }}
          />
        </div>
      </div>
    </>
  );
}

export default Header;
