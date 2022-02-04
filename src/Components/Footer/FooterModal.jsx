import styles from "./Footer.module.scss";
import logo from "./logo.png";

const foto = {
  floriana: "https://media-exp1.licdn.com/dms/image/C5603AQEzH_7qEDwYWg/profile-displayphoto-shrink_800_800/0/1643551621342?e=1649289600&v=beta&t=dqV0L3InGWz1awYQkvXHHdlpq5YbHeHRBzQRYIYEjgw",
  marco: "https://media-exp1.licdn.com/dms/image/D4D35AQFnLsd1IbbXKQ/profile-framedphoto-shrink_800_800/0/1643586532653?e=1644091200&v=beta&t=8GjUM5FHPuMX-ZCtMdi6bB8uAwQ07yZlvJ7IbH6-F1M",
  fabrizio: "https://media-exp1.licdn.com/dms/image/D4D35AQGdfU7W4r-ivA/profile-framedphoto-shrink_200_200/0/1643476467300?e=1644091200&v=beta&t=AMTRO_ThybxTh43j1ZHG_Am1B2rn_Lty8Y1cES2mBFg",
  miriana: "https://media-exp1.licdn.com/dms/image/C4D03AQGIyAfcmPdCLA/profile-displayphoto-shrink_800_800/0/1573201465367?e=1649289600&v=beta&t=QZZMWZIje5HNCY307pbhHrM379Fgm_GirVG3AIT0fyI",
  rebecca: "https://media-exp1.licdn.com/dms/image/D5603AQFsV_QWcWtQiA/profile-displayphoto-shrink_800_800/0/1635001237146?e=1649289600&v=beta&t=bvAiuecnGKz2q4vdva5xDd8whc_8J8LJKyRNj65Azr4",
}



const FooterModal = ({ closeFootModal }) => {
  return (
    <div className={styles.footerModal}>
      <div className={styles.headerMod}>
        <div className={styles.titleMod}>
          <h1>Hermits' Team</h1>
        </div>
        
      </div>
      <div className={styles.membri}>
        <div className={styles.membro}>
          <img className={styles.membroImg} src={foto.floriana} alt="floriana" />
          <p className={styles.nomeMembro}>Floriana Domianello</p>
          <div className={styles.containerDescMod}>
            <p>Front-end Developer</p>
            <div className={styles.containerLinks}>
              <div className={styles.linkLinkedin}>
                <a href="https://www.linkedin.com/in/floriana-domianello" target="_blank" rel="noreferrer">
                  <img className={styles.imgLinkedin}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Antu_linkedin.svg/512px-Antu_linkedin.svg.png"
                    alt="linkedin" />
                </a>
              </div>
              <div className={styles.GitHub}>
                <a href="https://github.com/floriana83" target="_blank" rel="noreferrer">
                  <img className={styles.imgGitHub}
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Font_Awesome_5_brands_github-square.svg"
                    alt="github" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.membro}>
          <img className={styles.membroImg} src={foto.marco} alt="marco" />
          <p className={styles.nomeMembro}>Marco Messina</p>
          <div className={styles.containerDescMod}>

            <p>Front-end Developer</p>
            <div className={styles.containerLinks}>
              <div className={styles.linkLinkedin}>
                <a href="https://www.linkedin.com/in/messina-marco" target="_blank" rel="noreferrer">
                  <img className={styles.imgLinkedin}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Antu_linkedin.svg/512px-Antu_linkedin.svg.png"
                    alt="linkedin" />
                </a>
              </div>
              <a href="https://github.com/Voldrak" target="_blank" rel="noreferrer">
                <div className={styles.GitHub}>
                  <img className={styles.imgGitHub}
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Font_Awesome_5_brands_github-square.svg" alt="github" /></div>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.membro}>
          <img className={styles.membroImg} src={foto.rebecca} alt="rebecca" />
          <p className={styles.nomeMembro}>Rebecca Mollica</p>
          <div className={styles.containerDescMod}>
            <p>Front-end Developer</p>
            <div className={styles.containerLinks}>
              <div className={styles.linkLinkedin}>
                <a href="https://www.linkedin.com/in/rebecca-mollica" target="_blank" rel="noreferrer">
                  <img className={styles.imgLinkedin}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Antu_linkedin.svg/512px-Antu_linkedin.svg.png"
                    alt="linkedin" />
                </a>
              </div>
              <div className={styles.GitHub}>
                <a href="https://github.com/rebecca-xm" target="_blank" rel="noreferrer">
                <img className={styles.imgGitHub}
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Font_Awesome_5_brands_github-square.svg"
                  alt="github" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.membro}>
          <img className={styles.membroImg} src={foto.miriana} alt="miriana" />
          <p className={styles.nomeMembro}>Miriana Maranzano</p>
          <div className={styles.containerDescMod}>
            <p>Front-end Developer</p>
            <div className={styles.containerLinks}>
              <div className={styles.linkLinkedin}>
                <a href="https://www.linkedin.com/in/miriana-maranzano-52559a167" target="_blank" rel="noreferrer">
                  <img className={styles.imgLinkedin}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Antu_linkedin.svg/512px-Antu_linkedin.svg.png"
                    alt="linkedin" />
                </a>
              </div>
              <div className={styles.GitHub}>
                <a href="https://github.com/MirMara" target="_blank" rel="noreferrer">
                  <img className={styles.imgGitHub}
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Font_Awesome_5_brands_github-square.svg"
                    alt="github" />
                </a>
              </div>
            </div>

          </div>
        </div>
        <div className={styles.membro}>
          <img className={styles.membroImg} src={foto.fabrizio} alt="fabrizio" />
          <p className={styles.nomeMembro}>Fabrizio Cottone</p>
          <div className={styles.containerDescMod}>
            <p>Front-end Developer</p>
            <div className={styles.containerLinks}>
              <div className={styles.linkLinkedin}>
                <a href="https://www.linkedin.com/in/fabrizio-cottone-developer" target="_blank" rel="noreferrer">
                  <img className={styles.imgLinkedin}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Antu_linkedin.svg/512px-Antu_linkedin.svg.png"
                    alt="linkedin" /></a>
              </div>
              <div className={styles.GitHub}>
                <a href="https://github.com/Fablizio" target="_blank" rel="noreferrer">
                  <img className={styles.imgGitHub}
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Font_Awesome_5_brands_github-square.svg"
                    alt="github" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className={styles.imgCloseMod}>
          <img src={logo} alt="logo" onClick={closeFootModal} className={styles.imgModal}></img>
        </div>

    </div>
  );
};

export default FooterModal;
