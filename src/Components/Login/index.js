import { useState } from "react";

import { Input, StyledLink } from "../styles.js";
import "./index.css";

function Login() {
  const titrePage = "Se connecter :";
  const emptyCompte = { email: "", mdp: "" };
  const [compte, setCompte] = useState(emptyCompte);
  function handleSubmit(event) {
    event.preventDefault();
    setCompte(emptyCompte);
  }
  return (
    <div className="eltParent">
      <p style={{ display: "flex" }}>
        <label style={{ marginTop: "0.75em", marginRight: "0.5em" }}>
          Pas encore inscrit ?
        </label>
        <StyledLink to="/sign-up">Créer compte</StyledLink>
        <StyledLink to="#">Retour</StyledLink>
        {/* <Button type="button" value="Retour" /> */}
      </p>
      <form className="eltFils" onSubmit={handleSubmit}>
        <img src="/logo.png" width="255px" height="55px" alt="not-found" />
        <br />
        <>
          <span className="titreStyle">{titrePage}</span>
          <p>
            <label>
              {"Adresse e-mail : "}
              <Input
                type="text"
                placeholder="E-mail"
                value={compte.email}
                onChange={(e) =>
                  setCompte({ ...compte, email: e.target.value })
                }
              />
            </label>
          </p>
          <p>
            <label>
              {"Mot de passe : "}
              <Input
                type="password"
                placeholder="Mot de passe"
                value={compte.mdp}
                onChange={(e) => setCompte({ ...compte, mdp: e.target.value })}
              />
            </label>
          </p>
          <p style={{ marginLeft: "15px" }}>
            <a href="#">Mot de passe oublié</a>
            <Input
              style={{ cursor: "pointer" }}
              type="submit"
              value="Se connecter"
            />
          </p>
        </>
      </form>
    </div>
  );
}

export default Login;
