import styles from "./Footer.module.scss";
import logo from "./logo.png";
import  team  from "../team/team.json";
import { useState } from "react";


const FooterModal = ({ closeFootModal }) => {
const[hermit]  = useState(team)

  return (
    <div className={styles.footerModal}>
      <div className={styles.headerMod}>
        <div className={styles.titleMod}>
          <h1>Hermits' Team</h1>
        </div>
        
      </div>
      <form className={styles.membri}>
      {hermit.map((person) => (
        <section className={styles.membro}>
          <img className={styles.membroImg} src={person.photo} alt="floriana" />
          <p className={styles.nomeMembro}>{person.name}</p>
          <div className={styles.containerDescMod}>
            <p>{person.sector}</p>
            <div className={styles.containerLinks}>
              <div className={styles.linkLinkedin}>
                <a href={person.linkedin} target="_blank" rel="noreferrer">
                  <img className={styles.imgLinkedin}
                    src={person.logoLinkedin}
                    alt="linkedin" />
                </a>
              </div>
              <div className={styles.GitHub}>
                <a href={person.github} target="_blank" rel="noreferrer">
                  <img className={styles.imgGitHub}
                    src={person.logoGithub}                    
                    alt="github" />
                </a>
              </div>
            </div>
          </div>
        </section>
        ))}
      </form>
      <div className={styles.imgCloseMod}>
          <img src={logo} alt="logo" onClick={closeFootModal} className={styles.imgModal}></img>
        </div>

    </div>
  );
};

export default FooterModal;
