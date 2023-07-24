import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.log("Ocurrió un error al obtener los datos:", error);
      }
    };

    fetchUser();
  }, [id]);

  return (
    <div>
      <h1>Dentist Detail</h1>
      {user && (
         <div style={{ textAlign: "center" }}>
           <img src="/public/images/doctor.jpg" alt="dentist"/>
              <h2>{user.name}</h2>
              <p>Email: {user.email}</p>
              <p>Telefono: {user.phone}</p>
              <p>Pagina Web: {user.website}</p>
            </div>
      )}
    </div>
  );
};

export default Detail