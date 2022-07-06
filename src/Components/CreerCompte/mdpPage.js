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
import {URL_API_HTTP} from "../constantsAPI.js";
import {useState} from "react";
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";
import {Input} from "../styles.js";
import {FaEye, FaEyeSlash, FaCheck, FaTimes} from "react-icons/fa";

function CreerComptePart2() {
    const eye = <FaEye/>;
    const eyeSlash = <FaEyeSlash/>;
    const checkIcon = <FaCheck style={{color: "green"}}/>;
    const incorrectIcon = <FaTimes style={{color: "red"}}/>;
    const titrePage = "Nouveau mot de passe";
    const emptyMdp = {initMdp: "", verifMdp: ""};
    const [mdp, setMdp] = useState(emptyMdp);
    const [input1Hide, setInput1Hide] = useState(true);
    const [input2Hide, setInput2Hide] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();


    async function handleSubmit(event) {
        const userToRegister = location.state.userToRegister;
        event.preventDefault();
        axios
            .post(`${URL_API_HTTP}/authentication/sign-up`, {...userToRegister, password: mdp.initMdp})
            .then((response) => {
                console.log(`jeton de mail : ${response.data}`);
                navigate("/");
            })
            .catch((error) => {
            if (error.response) {
                    alert(`l'erreur : ${error.response.data.message} a empêche le bon fonctionnement de cette page`);
                }
            });
    }

    return (
        <>
        <div className="eltParent">
            <img src={imgLogo} width="320px" height="69px" alt="not-found"/>
        </div>
            <form className="eltFilsMdp" onSubmit={handleSubmit}>
                <span className="titreStyleMdp">{titrePage}</span>
                <p className="pMdp">
                    <label>
                        {"Mot de passe "}
                        <Input
                            type={input1Hide ? "password" : "text"}
                            placeholder="Mot de passe"
                            value={mdp.initMdp}
                            onChange={(e) => setMdp({...mdp, initMdp: e.target.value})}
                        />
                        <i
                            className="eyeWrapper"
                            onClick={() => setInput1Hide(!input1Hide)}
                        >
                            {input1Hide ? eyeSlash : eye}
                        </i>
                    </label>
                </p>
                <p className="pMdp">
                    <label>
                        {"Confirmation du mot de passe "}
                        <Input
                            type={input2Hide ? "password" : "text"}
                            placeholder="mot de passe"
                            value={mdp.verifMdp}
                            onChange={(e) => setMdp({...mdp, verifMdp: e.target.value})}
                        />
                        <i
                            className="eye2Wrapper"
                            onClick={() => setInput2Hide(!input2Hide)}
                        >
                            {input2Hide ? eyeSlash : eye}
                        </i>
                    </label>
                </p>
                <br/>
                <ul
                    style={{
                        listStyleType: "none",
                        textAlign: "left",
                        marginLeft: "-33px",
                        paddingTop: "10px",
                        paddingBottom: "18px",
                        backgroundColor: "#f4f4f4",
                    }}
                >
                    <b>{"Votre mot de passe doit contenir :"}</b>
                    <li> &nbsp; </li>
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
                <p style={{marginLeft: "45px", marginTop: "30px"}}>
                    <Input
                        style={{cursor: "pointer", color: "#ef7d00", fontWeight: "bold"}}
                        type="submit"
                        value="Enregistrer mot de passe"
                    />
                </p>
            </form>
        </>
    );
}

export default CreerComptePart2;
