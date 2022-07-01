import RepasJour from "./RepasJour";
import {useState} from "react";
import {FaCircle} from "react-icons/fa"
import {BsCircle} from "react-icons/bs";
import {RiArrowLeftSFill, RiArrowRightSFill, RiArrowLeftSLine, RiArrowRightSLine} from "react-icons/ri"
import "./RepasSemaine.css";
import RepasDetail from "./RepasDetail";
import Button from "@mui/material/Button";


export const RepasSemaine = () => {
    const [remplie, setRemplie] = useState(2);
    const [move, setMove] = useState(0);



    const handlePrecedent = () => {
        setRemplie(remplie - 1);
        setMove(-1);
        setTimeout(() => setMove(0), 500);
    }
    const handleSuivant = () => {
        setRemplie(remplie + 1);
        setMove(1);
        setTimeout(() => setMove(0), 500);
    }
    const precedentBtn = (remplie > 0) ? <RiArrowLeftSFill size="2.5em"
        style={{height:"initial", cursor:"pointer", color:"#662483"}}
        onClick={handlePrecedent}
    /> : <RiArrowLeftSFill size="2.5em" style={{height:"initial", color:"white", pointerEvents:"none"}}/>
    const suivantBtn = (remplie < 4) ? <RiArrowRightSFill size="2.5em"
        style={{height:"initial", cursor:"pointer", color:"#662483", margin:"0%"}}
        onClick={handleSuivant}
    />: <RiArrowRightSFill size="2.5em" style={{height:"initial", color:"white", pointerEvents:"none"}}/>

    const semaineCourante = [];
    const semaineAvant = [];
    const semaineAvantX2 = [];
    const semaineApres = [];
    const semaineApresX2 = [];
    const jours = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const dateCourante = new Date();
    const bullets =[];

    let jourCourant = new Date(dateCourante.valueOf());
    while (jours[jourCourant.getDay()] !== 'Lundi'){
        jourCourant.setDate(jourCourant.getDate() - 1);
    }
    let jourSemaineAvant = new Date(jourCourant.valueOf());
    jourSemaineAvant.setDate(jourSemaineAvant.getDate() - 7);
    let jourSemaineAvantX2 = new Date(jourCourant.valueOf());
    jourSemaineAvantX2.setDate(jourSemaineAvantX2.getDate() - 14);
    let jourSemaineApres = new Date(jourCourant.valueOf());
    jourSemaineApres.setDate(jourSemaineApres.getDate() + 7);
    let jourSemaineApresX2 = new Date(jourCourant.valueOf());
    jourSemaineApresX2.setDate(jourSemaineApresX2.getDate() + 14);

    for (let i=0; i< 7; i++){
        semaineCourante.push(`${jours[jourCourant.getDay()]} ${jourCourant.getDate()}/${jourCourant.getMonth()+1}/${dateCourante.getFullYear()}`);
        jourCourant.setDate(jourCourant.getDate() + 1);
    }
    for (let i=0; i< 7; i++){
        semaineAvant.push(`${jours[jourSemaineAvant.getDay()]} ${jourSemaineAvant.getDate()}/${jourSemaineAvant.getMonth()+1}/${jourSemaineAvant.getFullYear()}`);
        jourSemaineAvant.setDate(jourSemaineAvant.getDate() + 1);
    }
    for (let i=0; i< 7; i++){
        semaineApres.push(`${jours[jourSemaineApres.getDay()]} ${jourSemaineApres.getDate()}/${jourSemaineApres.getMonth()+1}/${jourSemaineApres.getFullYear()}`);
        jourSemaineApres.setDate(jourSemaineApres.getDate() + 1);
    }
    for (let i=0; i< 7; i++){
        semaineAvantX2.push(`${jours[jourSemaineAvantX2.getDay()]} ${jourSemaineAvantX2.getDate()}/${jourSemaineAvantX2.getMonth()+1}/${jourSemaineAvantX2.getFullYear()}`);
        jourSemaineAvantX2.setDate(jourSemaineAvantX2.getDate() + 1);
    }
    for (let i=0; i< 7; i++){
        semaineApresX2.push(`${jours[jourSemaineApresX2.getDay()]} ${jourSemaineApresX2.getDate()}/${jourSemaineApresX2.getMonth()+1}/${jourSemaineApresX2.getFullYear()}`);
        jourSemaineApresX2.setDate(jourSemaineApresX2.getDate() + 1);
    }
    for (let i= 0; i<=4; i++){
        if (i === remplie)
            bullets.push(<FaCircle size="1.1em" color="#662483" style={{margin:"1.2px"}} key={`$i001`}/>);
        else bullets.push(<BsCircle size ="1.1em" color="#662483" style={{margin:"1.2px"}} key={`$i001`}/>);
    }
    return <>
        <h2>Calendrier des repas par semaine</h2>
        <p style={{display:"flex", justifyContent:"center"}}>
            {precedentBtn}
            <span className= "semaineAnimation" move={move} >
                {(remplie === 0) && semaineAvantX2.map(value => <RepasJour key={`${value}001`} jjCourant={value} taille={185} />)}
                {(remplie === 1) && semaineAvant.map(value => <RepasJour key={`${value}001`} jjCourant={value} taille={185} />)}
                {(remplie === 2) && semaineCourante.map(value => <RepasJour key={`${value}001`} jjCourant={value} taille={185} />)}
                {(remplie === 3) && semaineApres.map(value => <RepasJour key={`${value}003`} jjCourant={value} taille={185} />)}
                {(remplie === 4) && semaineApresX2.map(value => <RepasJour key={`${value}003`} jjCourant={value} taille={185} />)}
            </span>
            {suivantBtn}
        </p>
        <div style={{textAlign:"center"}}>{
            bullets
        }
        </div>
        {/*<RepasDetail etat={openPopup} evnt={setOpenPopup} />*/}

        {/*<Button onClick={() => setOpenPopup(true)}>Open modal</Button>*/}
    </>
}