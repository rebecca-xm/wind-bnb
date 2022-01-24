import Styled from "./stays.module.scss";
import { data } from './../data/stays';
import { useState,useEffect } from 'react';

const Stays = () => {
  
    return (
        <>
        <h1>Stays in Finland</h1>
        <h3 key={data.rooms.lenght()}> + {...room.lenght()+1} stays </h3>  
        
        </>
    )
}

export default Stays;