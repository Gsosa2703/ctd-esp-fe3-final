import React from "react";
import Form from "../Components/Form";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import { useGlobalContext } from "../Components/utils/global.context";

const Contact = () => {
  const { globalState } = useGlobalContext();

  return (
    <div className={globalState.theme.theme ? "light form" : "dark form"}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
