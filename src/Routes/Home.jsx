import React from "react";
import Card from "../Components/Card";

import { useGlobalContext } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Home = () => {
  const { globalState } = useGlobalContext();
  return (
    <main className={globalState.theme.theme ? "light" : "dark"}>
      <h1>Home</h1>
      <div className="card-grid">
        {globalState.data.map((user) => (
          <Card
            name={user.name}
            id={user.id}
            username={user.username}
            key={user.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
