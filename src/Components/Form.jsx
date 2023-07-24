import React from "react";
import { useState } from "react";


const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const onChangeName = (e) => setName(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);

  const validateName = (name) => {
    if (name.length >= 5) {
      return true;
    } else {
      return false;
    }
  }

  const validateEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    
    if (!emailRegex.test(email)) {
      return true;
    } else {
      return false;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);

    if (!isNameValid || !isEmailValid) {
      setShowErrorMsg(true);
      setShowSuccessMsg(false);
    } else {
      setShowErrorMsg(false);
      setShowSuccessMsg(true);
      setName("");
      setEmail("")
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          id="name"
          placeholder="Nombre completo"
          value={name}
          onChange={onChangeName}
        />

        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={onChangeEmail}
        />

        {showErrorMsg && (
          <p className="error">Por favor, verifique su información nuevamente.</p>
        )}

        {showSuccessMsg && (
          <p className="success">Gracias {name}, te contactaremos cuanto antes vía mail.</p>
        )}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
