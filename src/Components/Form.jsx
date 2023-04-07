import React, { useState } from "react";

const Form = ({ handleClick }) => {
  const [user, setUser] = useState({
    email: "",
    fullName: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    let emailTest = emailRegex.test(user.email);
    if (emailTest && user.fullName.length > 5) {
      alert(`Gracias ${user.fullName}, te contactaremos cuando antes vía mail`);
    } else {
      alert("Por favor verifique su información nuevamente");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Full Name</label>
      <input
        type="text"
        required={true}
        onChange={(e) => setUser({ ...user, fullName: e.target.value })}
      />
      <label>Email</label>
      <input
        type="email"
        required={true}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <button onClick={handleClick}>Enviar</button>
    </form>
  );
};

export default Form;
