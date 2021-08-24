import Link from "next/link";
import styles from "./navBar.module.css";
import Button from "@material-ui/core/Button";
import MobileNav from "./MobileNav";
import { useState, useEffect } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Modal from "../modal/modal.component";
import Image from "next/image";
const NavBar = ({ handleItems, resetItems }) => {
  const [open, setOpen] = useState(false);
  const [linkClicked, setLinkClicked] = useState(false);
  const matches = useMediaQuery("(max-width:768px)");
  useEffect(() => {
    if (!matches) {
      setOpen(false);
      resetItems(true);
    }
  });
  return (
    <div className={styles.nav}>
      <nav className={styles.navbar}>
        <Link href="/">
          <span className={styles.headerImg}>
            <Image width={130} height={60} src="/karmanyaLogo.png" />
          </span>
        </Link>
        {!matches && (
          <div className={styles.navcomp}>
            <Link href="/about">
              <a>About us</a>
            </Link>
            <Link href="/mission">
              <a>Our Mission</a>
            </Link>
            <Link href="/services">
              <a>Services</a>
            </Link>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
            <Link href="/donate">
              <Button variant="outlined" color="black" size="medium">
                Donate us
              </Button>
            </Link>
          </div>
        )}

        {matches && (
          <div
            className={styles.hamMenu}
            onClick={() => {
              const bars = document.querySelectorAll(
                ".navBar_hamMenu__2xVc6 span"
              );
              bars.forEach((bar) => {
                bar.classList.toggle("active");
                console.log(bar);
              });

              if (!linkClicked) {
                setOpen(!open);
              }
              handleItems();
              setLinkClicked(false);
            }}
          >
            <span className={styles.bar1}></span>
            <span className={styles.bar3}></span>
            <span className={styles.bar4}></span>
            <span className={styles.bar5}></span>
          </div>
        )}
      </nav>
      {open && !linkClicked && (
        <>
          <div className={styles.mobileparent}>
            <MobileNav
              onClick={() => {
                setLinkClicked(true);
                document.querySelector(".navBar_hamMenu__2xVc6").click();
              }}
            />
          </div>
          <Modal />
        </>
      )}
    </div>
  );
};

export default NavBar;
