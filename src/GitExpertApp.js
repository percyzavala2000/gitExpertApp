import React, { useState } from "react";
import AddCategoria from "./components/AddCategoria";
import GifGrid from "./components/GifGrid";

const GitExpertApp = () => {
  const [categorias, setCategorias] = useState(["dog"]);

  const handleAdd = (e) => {
    e.preventDefault();
    setCategorias([...categorias, ["Carlos"]]);
  };

  return (
    <>
      <h2>GitExpertApp</h2>
      <AddCategoria setCategorias={setCategorias} />
      <hr />
      <button onClick={handleAdd}>Agregar</button>
      <ol>
        {categorias.map((categoria) => {
          return <GifGrid key={categoria} categoria={categoria}/>
        })}
      </ol>
    </>
  );
};

export default GitExpertApp;
