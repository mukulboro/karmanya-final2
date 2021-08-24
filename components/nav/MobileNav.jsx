import Link from "next/link";
import styles from "./navBar.module.css";
import Button from "@material-ui/core/Button";
import Head from "next/dist/next-server/lib/head";

const MobileNav = ({ isClicked, onClick }) => {
    
  return <>
    <Head>
      <title>Karmanya Foundation</title>
    </Head>
    <ul className={styles.mobilenav} onClick={onClick}>
      <li>
        <Link href="/about">
          <a>About us</a>
        </Link>
      </li>

      <li>
        <Link href="/mission">
          <a>Our Mission</a>
        </Link>
      </li>

      <li>
        <Link href="/services">
          <a>Services</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>
      <li>
        <Link href="/donate">
          <Button variant="outlined" color="black" size="medium">
            Donate us
          </Button>
        </Link>
      </li>
    </ul>
  </>
};

export default MobileNav;
