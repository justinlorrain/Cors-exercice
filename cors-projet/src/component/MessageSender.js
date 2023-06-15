import React, { useState } from "react";
import "./MessageSender.css";
const MessageSender = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Créez une requête HTTP POST vers le serveur Spring Boot avec le message
    const response = await fetch("http://localhost:8080/logMyMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    // Faites quelque chose avec la réponse de la requête si nécessaire
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="form">
      <h1>Hello world</h1>
      <form onSubmit={handleSubmit}>
        <label for="message">message </label>
        <input
          type="text"
          id="message"
          value={message}
          onChange={handleChange}
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default MessageSender;
