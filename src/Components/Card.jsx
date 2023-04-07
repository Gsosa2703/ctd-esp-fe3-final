import React, { useReducer, useEffect } from "react";
import { Link } from "react-router-dom";

import { useGlobalContext } from "../Components/utils/global.context";

const Card = ({ name, username, id }) => {
  const initialFavState = [];
  const { globalState } = useGlobalContext();

  const favReducer = (state, action) => {
    switch (action.type) {
      case "ADD_FAV_USER":
        console.log(state, "state");
        console.log(action.payload, "action payload");
        console.log([...state, action.payload], "array");

        return [...state, action.payload];
      default:
        throw new Error();
    }
  };

  const [favState, favDispatch] = useReducer(favReducer, initialFavState);

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    const user = {
      name,
      username,
      id,
    };

    favDispatch({ type: "ADD_FAV_USER", payload: user });
  };

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favState));
  }, [favState]);

  return (
    <div className={globalState.theme.theme ? "card light" : "card dark"}>
      <Link key={id} to={"/dentist/" + id}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <h5>{id}</h5>
        <h3>
          {name} - {username}
        </h3>
      </Link>

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
