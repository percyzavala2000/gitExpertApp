/* import React, { useState ,useEffect} from "react";
import consultaAPI from "../helpers/ConsultaApi";*/
import GifGrifItem from "./GifGrifItem"; 
import React from 'react';
import useFetchGifs from '../hooks/useFetchGifs';

const GifGrid = ({ categoria }) => {

 /*  const [imagenes, setImagenes] = useState([]);
  useEffect(() => {
    
    consultaAPI(categoria).then(
      setImagenes
    );
  }, [categoria]); */
  const {data:imagenes,loading}= useFetchGifs(categoria);
  


  return (
     <>
    <h3 className='animate__animated animate__flip'>{categoria}</h3>
    {loading && <p>Loading</p>}
    <div className='card-grid'>
        {imagenes.map(img => {
          return  <GifGrifItem key={img.id} {...img} />
         
        })}
      
    </div>
    </>
  );
};

export default GifGrid;
