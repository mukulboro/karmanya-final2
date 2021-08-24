import Link from "next/link";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.copyright}>
        &#169; Copyright {new Date().getFullYear()}. All Rights Reserved{" "}
        <a href="https://commingsoonqleap.vercel.app/" target="_blank">
          qleap labs
        </a>
      </p>
    </div>
  );
};

export default Footer;
