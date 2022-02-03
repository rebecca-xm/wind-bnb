import styles from "./stays.module.scss";
// import { useState, useEffect } from "react";

const Stays = ({ count }) => {
  return (
    <div className={styles.stays}>
      <h1>Stays in Finland</h1> 
      <p>  {count}+ stays</p>
    </div>
  );
};

export default Stays;
