import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CreerCompte.css";
import {
  validateEmail,
  validatePrenomOuNom,
  validateAnnee,
  validateJour,
  validateMois,
  validateTel,
  validatePerson,
  isEmptyPerson,
} from "./validationFunctions";
import { Input, InputLarge, InputDate } from "../styles.js";
function CreerCompte() {
  const titrePage = "Je crée mon compte :";
  const commandeQuestion = "Pour qui passez-vous commande";
  const navigate = useNavigate();
  const emptyPerson = {
    prenom: "",
    nom: "",
    sexe: "MASCULIN",
    date: { jour: "", mois: "", annee: "" },
    email: "",
    tel: "",
    telFixe: "",
  };
  const [person, setPerson] = useState(emptyPerson);
  const [client, setClient] = useState("moi");
  //const [emailErr, setEmailErr] = useState("");

  const userJson = {
    prenom: person.prenom,
    nom: person.nom,
    sexe: person.sexe,
    email: person.email,
    tel: person.tel,
    telFixe: person.telFixe,
    dateNaiss: `${person.date.annee}-${person.date.mois}-${person.date.jour}`,
  };
  const url = "http://localhost:8080/api/clients";

  async function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(url, userJson)
      .then((response) => {
        console.log(response);
        //navigate("/sign-up-mdp");
      })
      .catch((error) => {
        if (error.response) {
          console.log(`data : ${error.response.data.message}`);
          alert(error.response.data.message);
          //setEmailErr(error.response.data.message);
        }
        //setPerson(emptyPerson);
      });
  }

  return (
    <div>
      <h1>{titrePage}</h1>
      <form onSubmit={handleSubmit}>
        <p className="pContent">
          <label style={{ marginRight: "40px" }}>
            {"Homme "}
            <input
              type="radio"
              name="sexe"
              value="MASCULIN"
              checked={person.sexe === "MASCULIN"}
              onChange={(e) =>
                setPerson({ ...person, sexe: e.currentTarget.value })
              }
            />
          </label>
          <label>
            {"Femme "}
            <input
              type="radio"
              name="sexe"
              value="FEMININ"
              checked={person.sexe === "FEMININ"}
              onChange={(e) =>
                setPerson({ ...person, sexe: e.currentTarget.value })
              }
            />
          </label>
        </p>
        <p className="pContent">
          <label>
            {"Prénom : "}
            <Input
              type="text"
              placeholder="prenom"
              value={person.prenom}
              onChange={(e) => setPerson({ ...person, prenom: e.target.value })}
            />
            <span>{validatePrenomOuNom(person.prenom)} &nbsp;</span>
          </label>
          <label>
            {"Nom : "}
            <Input
              type="text"
              placeholder="nom"
              value={person.nom}
              onChange={(e) => setPerson({ ...person, nom: e.target.value })}
            />
            <span>{validatePrenomOuNom(person.nom)}</span>
          </label>
        </p>
        <p className="pContent">
          <label>
            {"Adresse e-mail : "}
            <InputLarge
              type="text"
              placeholder="e-mail"
              value={person.email}
              onChange={(e) => setPerson({ ...person, email: e.target.value })}
            />
            <span>{validateEmail(person.email) /*|| emailErr*/} &nbsp;</span>
          </label>
        </p>
        <p className="pContent">
          <label>
            {"téléphone portable : "}
            <Input
              type="number"
              placeholder="tel portable"
              value={person.tel}
              onChange={(e) => setPerson({ ...person, tel: e.target.value })}
            />
            <span>{validateTel(person.tel)} &nbsp;</span>
          </label>
          <label>
            {"téléphone fixe : "}
            <Input
              type="number"
              placeholder="tel fixe"
              value={person.telFixe}
              onChange={(e) =>
                setPerson({ ...person, telFixe: e.target.value })
              }
            />
            <span>{validateTel(person.telFixe)}</span>
          </label>
        </p>
        <section
          style={{
            textAlign: "left",
            color: "#662483",
            marginLeft: "26em",
            marginBottom: "-1em",
          }}
        >
          Date de naissance
        </section>
        <p className="pContent">
          <label>
            {"Jour : "}
            <InputDate
              type="number"
              placeholder="JJ"
              value={person.date.jour}
              onChange={(e) =>
                setPerson({
                  ...person,
                  date: { ...person.date, jour: e.target.value },
                })
              }
            />
            <span>{validateJour(person.date.jour)} &nbsp;</span>
          </label>
          <label>
            {"Mois : "}
            <InputDate
              type="number"
              placeholder="MM"
              value={person.date.mois}
              onChange={(e) =>
                setPerson({
                  ...person,
                  date: { ...person.date, mois: e.target.value },
                })
              }
            />
            <span>{validateMois(person.date.mois)}</span>
          </label>
          <label>
            {"Année : "}
            <InputDate
              type="number"
              placeholder="YYYY"
              value={person.date.annee}
              onChange={(e) =>
                setPerson({
                  ...person,
                  date: { ...person.date, annee: e.target.value },
                })
              }
            />
            <span>{validateAnnee(person.date.annee)}</span>
          </label>
        </p>
        <h4>{commandeQuestion}</h4>
        <p className="pContent">
          <label field={"Je commande pour moi-même "} className="radioStyled">
            <input
              type="radio"
              name="moi"
              checked={client === "moi"}
              onChange={(e) => {
                setClient("moi");
              }}
            />
            {"Je commande pour moi-même "}
          </label>
          <label className="radioStyled">
            <input
              type="radio"
              value="proche"
              checked={client === "proche"}
              onChange={(e) => setClient("proche")}
            />
            {"Je commande pour un proche "}
          </label>
        </p>
        <p className="pContent">
          <Input
            type="submit"
            disabled={
              !validatePerson(
                person.prenom,
                person.nom,
                person.email,
                person.tel,
                person.telFixe,
                person.date.jour,
                person.date.mois,
                person.date.annee
              ) ||
              isEmptyPerson(
                person.prenom,
                person.nom,
                person.email,
                person.tel,
                person.date.jour,
                person.date.mois,
                person.date.annee
              )
            }
            value="Je valide mon compte"
          />
        </p>
      </form>
    </div>
  );
}

export default CreerCompte;
