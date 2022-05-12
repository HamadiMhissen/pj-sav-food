import "./mdpPage.css";
import imgLogo from "../../images/mlrLogo.png";
import {
  validateMajuscule,
  validateMinuscule,
  validateNumber,
  CompareMdps,
  validateSize,
  validateSpecialChar,
} from "./validateMdpFunctions.js";
import { useState } from "react";
import { Input } from "../styles.js";
import { FaEye, FaEyeSlash, FaCheck, FaTimes } from "react-icons/fa";
function CreerComptePart2() {
  const eye = <FaEye />;
  const eyeSlash = <FaEyeSlash />;
  const checkIcon = <FaCheck style={{ color: "green" }} />;
  const incorrectIcon = <FaTimes style={{ color: "red" }} />;
  const titrePage = "Nouveau mot de passe";
  const emptyMdp = { initMdp: "", verifMdp: "" };
  const [mdp, setMdp] = useState(emptyMdp);
  const [input1Hide, setInput1Hide] = useState(true);
  const [input2Hide, setInput2Hide] = useState(true);
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="eltParent">
      <form className="eltFils" onSubmit={handleSubmit}>
        <img src={imgLogo} width="320px" height="69px" alt="not-found" />
        <br />
        <span className="titreStyleMdp">{titrePage}</span>
        <p>
          <label>
            {"Mot de passe : "}
            <Input
              type={input1Hide ? "password" : "text"}
              placeholder="Mot de passe"
              value={mdp.initMdp}
              onChange={(e) => setMdp({ ...mdp, initMdp: e.target.value })}
            />
            <i
              className="eyeWrapper"
              onClick={() => setInput1Hide(!input1Hide)}
            >
              {input1Hide ? eyeSlash : eye}
            </i>
          </label>
        </p>
        <p>
          <label>
            {"Confirmation du mot de passe : "}
            <Input
              type={input2Hide ? "password" : "text"}
              placeholder="Confirmation du mot de passe"
              value={mdp.verifMdp}
              onChange={(e) => setMdp({ ...mdp, verifMdp: e.target.value })}
            />
            <i
              className="eye2Wrapper"
              onClick={() => setInput2Hide(!input2Hide)}
            >
              {input2Hide ? eyeSlash : eye}
            </i>
          </label>
        </p>
        <br />
        <ul
          style={{
            listStyleType: "none",
            textAlign: "left",
            marginLeft: "-30px",
            backgroundColor: "#f4f4f4",
          }}
        >
          <b>{"Votre mot de passe doit contenir :"}</b>
          <li>
            {validateSize(mdp.initMdp) ? checkIcon : incorrectIcon} 8 caractères
            minimum
          </li>
          <li>
            {validateNumber(mdp.initMdp) ? checkIcon : incorrectIcon} 1 chiffre
            minimum
          </li>
          <li>
            {validateSpecialChar(mdp.initMdp) ? checkIcon : incorrectIcon} 1
            caractère spécial (!@*,) minimum
          </li>
          <li>
            {validateMajuscule(mdp.initMdp) ? checkIcon : incorrectIcon} 1
            Majuscule
          </li>
          <li>
            {validateMinuscule(mdp.initMdp) ? checkIcon : incorrectIcon} 1
            Miniscule
          </li>
          <li>
            {CompareMdps(mdp.initMdp, mdp.verifMdp) ? checkIcon : incorrectIcon}
            Les mots de passe sont identiques
          </li>
        </ul>
        <p style={{ marginLeft: "15px" }}>
          <Input
            style={{ cursor: "pointer" }}
            type="submit"
            value="Valider mon mot de passe"
          />
        </p>
      </form>
    </div>
  );
}
export default CreerComptePart2;
