import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {
    const addToFavorites = () => {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      const isUserFavorite = favorites.some((favorite) => favorite.id === id);

      if (!isUserFavorite) {
        const newFavorite = ({name, username, id});
        const updatedFavorites = [...favorites, newFavorite];
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        console.log('Usuario agregado a favoritos:', newFavorite);
      } else {
        console.log("El usuario ya se encuentra en la lista de favoritos:", ({name, username, id}));
      }
    }
    
  return (
    <div className="card">
        <img src="/public/images/doctor.jpg" alt="doctor"/>
        <h2>{name}</h2>
        <h3>{username}</h3>
        <h3>{id}</h3>

        <Link to={`/detail/${id}`}>Ver detalles</Link>
        
        <button onClick={addToFavorites} className="favButton" icon="/public/favicon.ico"></button>
    </div>
  );
};

export default Card;
