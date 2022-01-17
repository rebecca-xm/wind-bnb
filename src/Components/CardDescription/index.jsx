import styles from "./CardDescription.module.scss";

const CardDescription = ({superHost, type, title, beds, rating }) => {

  if (superHost === false) {
    (superHost = null)
  } else if 
    (superHost === true) {
      (superHost = <span className={styles.host}>SUPER HOST</span> )
  }

  return (
    <div className={styles.card_description}>
      <div className={styles.card__descriptionContainer}>
        <span className={styles.info}>{superHost} {type} . {beds} beds</span>
        <div className={styles.ratingWrapper}>
          <span className={styles.rating}>⭐{rating}</span>
        </div>
      </div>
      <div className={styles.title}>
        {title}
      </div>
    </div>
  );
};

export default CardDescription;