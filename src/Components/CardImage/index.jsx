import styles from "./CardImage.module.scss";

const CardImage = ({ src }) => {
    return (
        <div className={styles.imageWrapper}>
            <img src={src} alt="product" className={styles.img} />
        </div>
    );
};

export default CardImage;
