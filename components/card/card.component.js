import styles from "./card.module.css";
const Card = ({ title, body, children, className, colorCode }) => {
  return (
    <div
      className={`${styles.customcard} ${className}`}
      style={{
        backgroundColor: colorCode,
      }}
    >
      <div className={styles.cardtitle}>
        {children} <span>{title}</span>
      </div>
      <div className={styles.cardbody}>{body}</div>
    </div>
  );
};
export default Card;
