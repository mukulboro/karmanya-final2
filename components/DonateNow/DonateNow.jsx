import React from "react";
import styles from "./Donate.module.css";

const DonateNow = () => {
  return (
    <div className={styles.mainBody}>
      <h1 className={styles.h1}>Donate To Us</h1>

      <DonateCard
        cardColor="#5ad347"
        imageURL="https://www.nepalitimes.com/wp-content/uploads/2021/07/Esewa-Remittance-Payment.png"
        title="eSewa"
        id="9841566544"
      />
      <DonateCard
        cardColor="#C39BD3 "
        imageURL="https://d7vw40z4bofef.cloudfront.net/static/img/logo1.png"
        title="Khalti"
        id="9841566544"
      />
      <DonateCard
        cardColor="#ED1B24"
        imageURL="https://4.bp.blogspot.com/daBK0EXWm2fMFeupwWSefARuzuvookgy6wDy0dJyHSYrn88jtyDbN2r_KLpB_7F07Rc"
        title="IMEpay"
        id="9841566544"
      />
    </div>
  );
};

const DonateCard = ({ cardColor, imageURL, title, id }) => {
  return (
    <section className={styles.mainCard} style={{ backgroundColor: cardColor }}>
      <img src={imageURL} alt="" className={styles.donateImg} />
      <h1>{title}</h1>
      <p>{id}</p>
    </section>
  );
};

export default DonateNow;
