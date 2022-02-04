import styles from "./Footer.module.scss";
import logo from "./logo.png";

const FooterModal = ({ closeFootModal }) => {
  return (
    <div className={styles.footerModal}>
      <div>
        <h1>Ciao</h1>
      </div>
      <div>
              <img src={logo} alt="logo" onClick={closeFootModal} className={styles.imgModal}></img>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
      </div>
    </div>
  );
};

export default FooterModal;
