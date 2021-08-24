import {
  faPhoneAlt,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/contact.module.css";
import Head from "next/dist/next-server/lib/head";
import Button from "@material-ui/core/Button";
export const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <h1 className={styles.h1}>Contact Us</h1>
      <section id={styles.mainHolder}>
        <div id={styles.miniHolder}>
          <div id={styles.mapHolder}>
            <iframe
              className={styles.iframe}
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7064.04741863965!2d85.34487602704033!3d27.716554228971024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb197d9d23f7ed%3A0x2724281b4393865d!2sChabahil%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1629019949401!5m2!1sen!2snp"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
          </div>

          <div id={styles.detailHolder}>
            <DetailCard text="+977-9851206838, 9841666927" icon={faPhoneAlt} />
            <DetailCard
              text="Sukedhara, Kathmandu, Nepal"
              icon={faMapMarkerAlt}
            />
            <DetailCard text="karmanyafoundation@gmail.com" icon={faEnvelope} />
          </div>
        </div>
      </section>

      <h1 className={styles.h1}>Send us a message</h1>

      <div className={styles.formHolder}>
        <form
          className={styles.form}
          action="https://mailthis.to/mukul.development@gmail.com"
          method="POST"
        >
          <input
            className={styles.input}
            type="text"
            name="fullName"
            placeholder="Enter name.."
          />

          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Enter email.."
          />

          <textarea
            placeholder="Type your message"
            className={styles.message}
            name="message"
          ></textarea>

          <button className={styles.button}>Submit</button>
        </form>
      </div>
    </>
  );
};

const DetailCard = ({ text, icon }) => {
  return (
    <div className={styles.detailCard}>
      <span className={styles.icon}>
        <FontAwesomeIcon icon={icon} />
      </span>
      <p>{text}</p>
    </div>
  );
};

export default ContactUs;
