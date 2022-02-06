import styles from "./stays.module.scss";
// import { useState, useEffect } from "react";

const Stays = ({ count }) => {
  return (
    <div className={styles.stays}>
      <h2>Stays in Finland</h2> 
      <h2 className={styles.staysNum}>  {count}+ stays</h2>
    </div>
  );
};

export default Stays;
