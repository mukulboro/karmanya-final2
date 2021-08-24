import Container from "@material-ui/core/Container";
import styles from "./section.module.css";
const Section = ({ children, bg }) => {
  return (
    <div
      className={styles.section1}
      style={{
        background: bg,
      }}
    >
      {children}
    </div>
  );
};
export default Section;
