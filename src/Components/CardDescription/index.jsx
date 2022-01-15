import styles from "./CardDescription.module.scss";

const CardDescription = ({ type, title,  beds, rating}) => (
    <div className={styles.card_description}>


    <section className={styles.card__descriptionContainer}>
        <p>{type} . {beds} beds</p>
        <p>⭐{rating}</p>
      </section>
      <div className={styles.title}>
        <h3>{title}</h3>
      </div>
    </div>
  
  )
  
  export default CardDescription