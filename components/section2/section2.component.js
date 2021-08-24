import Card from "../card/card.component";
import Image from "next/image";
import styles from "./section2.module.css";
const Section2 = ({ data }) => {
  const colorHex = ["#668dfb", "#ffcf6e", "#ff8669", "#04aa6d"];
  return (
    <div className={styles.parent}>
      <div className={styles.sec2}>
        <div className={styles.first}>
          {data.slice(0, 2).map((d, i) => (
            <Card
              className={styles.card}
              key={Math.random()}
              title={d.title}
              body={d.body}
              colorCode={colorHex[i]}
            >
              <Image src={d.src} width={60} height={60} />
            </Card>
          ))}
        </div>
        <div>
          {data.slice(2).map((d, i) => (
            <Card
              title={d.title}
              body={d.body}
              key={Math.random()}
              colorCode={colorHex[i + 2]}
            >
              <Image src={d.src} width={60} height={60} />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Section2;
