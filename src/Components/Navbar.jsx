import React from "react";
import { Link } from "react-router-dom";

import { useGlobalContext } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { globalState, globalStateDispatch } = useGlobalContext();

  const changeTheme = () => {
    if (globalState.theme.theme) {
      globalStateDispatch({ type: "SWITCH_DARK" });
    } else {
      globalStateDispatch({ type: "SWITCH_LIGHT" });
    }
  };
  return (
    <nav className={globalState.theme.theme ? "light" : "dark"}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={changeTheme}>Change theme</button>

      <Link to={"/home"}>
        <h3>Home</h3>
      </Link>
      <Link to={"favs"}>
        <h3>Favs</h3>
      </Link>
      <Link to={"/contact"}>
        <h3>Contact</h3>
      </Link>
    </nav>
  );
};

export default Navbar;
