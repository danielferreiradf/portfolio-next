import React, { useState } from "react";
import { ContactContainer } from "./contact.styles";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Contact: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [messageSent, setMessageSent] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const handleSubmit = (e) => {
    // fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: encode({ "form-name": "contact", name, message, email }),
    // })
    //   .then(() => alert("Success!"))
    //   .catch((error) => alert(error));

    e.preventDefault();

    if (!name && !email && !message) {
      setMessageError(true);
    } else {
      console.log(name, email, message);

      alert("Mensagem enviada!");
      setMessageSent(true);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <ContactContainer>
      <section id="contato">
        <h1>Contato</h1>
        <h2>Me envie uma mensagem</h2>

        <section>
          <form onSubmit={handleSubmit}>
            <p>
              <label>
                Nome <span>*</span>
              </label>
              <input
                // required
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </p>
            <p>
              <label>
                Email <span>*</span>
              </label>
              <input
                // required
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </p>
            <p>
              <label>
                Mensagem <span>*</span>
              </label>
              <textarea
                // required
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </p>
            {messageError ? (
              <p>Nome, email e mensagem são obrigatórios!</p>
            ) : null}
            {messageSent ? (
              <p>Mensagem enviada, Obrigado!</p>
            ) : (
              <button type="submit">Enviar</button>
            )}
          </form>
        </section>
        <footer>
          <h1>Desenvolvido por Daniel Ferreira - {new Date().getFullYear()}</h1>
        </footer>
      </section>
    </ContactContainer>
  );
};

export default Contact;
