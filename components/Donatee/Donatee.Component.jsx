import styles from "./Donatee.module.css";
const DonateItem = ({ imgUrl, orgName, about }) => {
  return (
    <div
      className={styles.donateItem}
      style={{
        backgroundImage: `url(${imgUrl})`,
      }}
    >
      <div className={styles.overlay}>
        <h1>{orgName}</h1>
        <span className={styles.about}>{about}</span>
      </div>
    </div>
  );
};
export default DonateItem;
