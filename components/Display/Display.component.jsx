import DonateItem from "../Donatee/Donatee.Component";
import styles from "./Display.module.css";
const DonateDisplay = () => {
  var items = [
    {
      orgName: "Maitighar Mandala",
      about: "Probably the most random thing you have ever seen!",
      imageUrl:
        "https://i.pinimg.com/originals/99/b4/71/99b471377a20348eb50c8544d67deeaf.png",
    },
    {
      orgName: "Didi Bahini Samuha",
      about: "Hello World!",
      imageUrl:
        "https://c.ndtvimg.com/2021-04/vsuvlu5o_lijjat-pappadmumbai_625x300_15_April_21.jpg",
    },
    {
      orgName: "Baal Mandir",
      about: "Hello World!",
      imageUrl:
        "https://assets-cdn.kathmandupost.com/uploads/source/news/2019/miscellaneous/ncobuilding-1482019014739-1000x0.jpg",
    },
    {
      orgName: "Sxc",
      about: "1969 AD",
      imageUrl:
        "https://images.static-collegedunia.com/public/college_data/images/appImage/1504695740cover.jpg?tr=c-force",
    },
  ];
  return (
    <div className={styles.display}>
      {items.map((item) => (
        <DonateItem
          imgUrl={item.imageUrl}
          orgName={item.orgName}
          about={item.about}
          key={Math.random()}
        />
      ))}
    </div>
  );
};
export default DonateDisplay;
