import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import { useGlobalContext } from "../Components/utils/global.context";

const Detail = () => {
  const { id } = useParams();

  const [user, setUser] = useState({});
  const url = "https://jsonplaceholder.typicode.com/users/" + id;
  const { globalState } = useGlobalContext();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [url]);

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <div className={globalState.theme.theme ? "light" : "dark"}>
        <h1>Detail Dentist {id} </h1>

        <h3>{user.name}</h3>
        <h3>{user.email}</h3>
        <h3>{user.phone}</h3>
        <h3>{user.website}</h3>
      </div>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  );
};

export default Detail;
