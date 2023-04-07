import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import { useGlobalContext } from "../Components/utils/global.context";

const Favs = () => {
  const favs = JSON.parse(localStorage.getItem("favs"));
  const { globalState } = useGlobalContext();

  return (
    <>
      <div className={globalState.theme.theme ? "light" : "dark"}>
        <h1>Dentists Favs</h1>
        <div className="card-grid">
          {favs.map((user) => (
            <Card name={user.name} id={user.id} username={user.username} />
          ))}
          {/* este componente debe consumir los destacados del localStorage */}
          {/* Deberan renderizar una Card por cada uno de ellos */}
        </div>
      </div>
    </>
  );
};

export default Favs;
