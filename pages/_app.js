import "../styles/global.css";
import { useEffect, useState } from "react";
import FooterComponent from "../components/footer/Footer.component";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import NavBar from "../components/nav/navBar";
function preventMotion(event) {
  event.preventDefault();
}
export default function App({ Component, pageProps }) {
  const matches = useMediaQuery("(min-width:768px)");
  const [showItems, setItems] = useState(true);
  const handleItems = (open) => {
    setItems((p) => !p);
  };
  useEffect(() => {
    window.addEventListener("touchmove", preventMotion, false);
  });
  return (
    <>
      <NavBar handleItems={handleItems} resetItems={setItems} />
      {(showItems || matches) && (
        <>
          <Component {...pageProps} />
          <FooterComponent />
        </>
      )}
    </>
  );
}
