import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Components/Card";

const Favs = () => {
  const [favorites, setFavorites] = useState([]); 
  
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);
  
  return (
    <div>
      <h1>Dentists Favs</h1>
      <div className="card-container">
        {favorites.map((favorite) => (
          <Card key={favorite.id} name={favorite.name} username={favorite.username} id={favorite.id}/>
        ))}
      </div>
    </div>
  );
};

export default Favs;