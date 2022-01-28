import CardDescription from "../CardDescription";
import CardImage from "../CardImage";
import styles from "./FlatCard.module.scss";

const FlatsCard = ({ superHost, type, title, beds, rating, image }) => {
  return (
    <div className={styles.card}>
      <CardImage src={image} />
      <CardDescription
        superHost={superHost}
        type={type}
        beds={beds}
        rating={rating}
        title={title}
      />
    </div>
  );
};

export default FlatsCard;
