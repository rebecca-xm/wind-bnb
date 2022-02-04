import React from 'react';
import styles from './Footer.module.scss';



const Footer= ({handleHermitModal}) =>{

    return (
    <>
    <div className={styles.Footer}>
    <p>Created by <span className={styles.Hermits} placeholder="Click Me" onClick={handleHermitModal}> Hermits' Team</span>
        </p>
    </div>
    </>
    )
}

export default Footer;

