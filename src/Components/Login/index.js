import { useState } from "react";
import axios from "axios";
import imgLogo from "../../images/mlrLogo.png";

import { Input, StyledLink } from "../styles.js";
import "./index.css";


function Login() {
  const titrePage = "Se connecter ";
  const EMAIL_ERRONE = "adresse mail erronée, compte inexistant !";
  const MOT_DE_PASSE_ERRONE = "Access Denied";
  const emptyCompte = { email: "", mdp: "" };
  const [compte, setCompte] = useState(emptyCompte);
  const [isShown, setIsShown] = useState(true);
  let erreur = "erreur1";

  async function handleSubmit(event) {
    const URL_API_HTTP = "http://localhost:8080/api/clients";
    event.preventDefault();
    axios
        .post(`${URL_API_HTTP}/authentication/login`, { email: compte.email, mdp: compte.mdp })
        .then((response) => {
         //   if (response.data.message === "Vous n'a pas assez de privilèges pour se connecter, Veuillez confirmez votre email !")

        //    else {
                localStorage.setItem("token", response.data);
                localStorage.setItem("username", compte.email);
                console.log(`jeton de connexion : ${localStorage.getItem("token")}`);
                console.log(`username : ${localStorage.getItem("username")}`);
         //   }
        })
        .catch((error) => {
          erreur = error.response.data ;
          if (error.response) {
            if (error.response.status === 400)  alert(`erreur : ${error.response.data}`);
            else alert(`erreur : ${error.response.data.message}`);
          }
        });

    //console.log(localStorage.setItem("token", ""));
    setCompte(emptyCompte);
  }
  return (
    <>
      <div className="eltParent">
        <p style={{ display: "flex"}}>
          <label style={{ marginTop: "0.75em", marginRight: "0.5em" }}>
          Pas encore inscrit ?
          </label>
          <StyledLink to="/sign-up">Créer compte</StyledLink>
          <StyledLink to="#">Retour</StyledLink>
        </p>
      </div>
      <form className="eltFils" onSubmit={handleSubmit}>
        <img src={imgLogo} width="255px" height="55px" alt="not-found" />
        <br />
        <>
          <span className="titreStyle">{titrePage}</span>
          <p>
            <label>
              {"Adresse e-mail "}
              <Input
                type="text"
                placeholder="E-mail"
                value={compte.email}
                onChange={(e) =>
                  setCompte({ ...compte, email: e.target.value })
                }
                onMouseEnter={() => setIsShown(false)}
              />
                {/*<span>{isShown && erreur === EMAIL_ERRONE && EMAIL_ERRONE}</span>*/}
            </label>
          </p>
          <p>
            <label>
              {"Mot de passe "}
              <Input
                type="password"
                placeholder="Mot de passe"
                value={compte.mdp}
                onChange={(e) => setCompte({ ...compte, mdp: e.target.value })}
                //onMouseEnter={() => setIsShown(false)}
              />
                {/*<span>{isShown && erreur === MOT_DE_PASSE_ERRONE && MOT_DE_PASSE_ERRONE}</span>*/}
            </label>
          </p>
          <p style={{ marginLeft: "15px", marginTop: "30px"}}>
            <a href="#">Mot de passe oublié</a>
            <Input
              style={{ cursor: "pointer", color: "#ef7d00", fontWeight: "bold" }}
              type="submit"
              value="Se connecter"
              onClick = {() => setIsShown(true)}
            />
          </p>
        </>
      </form>
    </>
  );
}

export default Login;
