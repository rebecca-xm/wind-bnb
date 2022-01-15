import styles from "./CardImage.module.scss";

const CardImage = ({ src }) => <img src={src} alt="product" className={styles.img} />


export default CardImage;
