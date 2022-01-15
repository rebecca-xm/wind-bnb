import styles from "./CardDescription.module.scss";

const CardDescription = ({ type, title, beds, rating }) => {
  return (
    <div className={styles.card_description}>
      <div className={styles.card__descriptionContainer}>
        <span className={styles.info}>{type} . {beds} beds</span>
      </div>
      <div className={styles.ratingWrapper}>
        <span className={styles.rating}>⭐{rating}</span>
      </div>
      <div className={styles.title}>
        {title}
      </div>
    </div>
  );
};

export default CardDescription;