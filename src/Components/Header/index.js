import {Outlet, Link} from "react-router-dom";
import "./header.css";
import { HeaderLink, Ul} from "../styles";
import {useState} from "react";

export function Header() {
    const [activeMenuDeroulant, setActiveMenuDeroulant] = useState(false);
    return (
        <>
        <nav style={{height:"60px"}}>
            <Ul>
                <li className="headerTitle">Maison LeRoux</li>
                <li>
                    <HeaderLink onMouseEnter={()=>setActiveMenuDeroulant(false)} to="/">
                        Accueil
                    </HeaderLink>
                </li>
                <li>
                    <HeaderLink
                        onMouseEnter={()=>setActiveMenuDeroulant(true)}
                        to="">Repas ▼</HeaderLink>
                    {activeMenuDeroulant === true ?
                        <Ul
                            onMouseLeave={()=>setActiveMenuDeroulant(false)}
                            style={{position: "absolute", top: "78px", width: "120px", display:"block" }}>
                            <li>
                                <HeaderLink to ="/user/platsDuSemaine" style={{textAlign: "left", marginLeft:"0%"}}>Par semaine</HeaderLink>
                            </li>
                            <li>
                                <HeaderLink to="/user/platsDuMois" style={{textAlign: "left", marginLeft:"0%"}}>Par mois</HeaderLink>
                            </li>
                        </Ul> : null}
                </li>
                <li>
                    <HeaderLink onMouseEnter={()=>setActiveMenuDeroulant(false)} to="/" >
                        Profil
                    </HeaderLink>
                </li>
            </Ul>
            <Outlet />
        </nav>
        </>
    );
}