import CardDescription from '../CardDescription'
import CardImage from '../CardImage'
import styles from "./FlatCard.module.scss";


const FlatsCard = ({ type, title,  beds, rating, image }) => (
  <div className={styles.card}>
    <CardImage src={image} />
    <CardDescription type={type} beds={beds} rating={rating} title={title}  />
  </div>
)

export default FlatsCard