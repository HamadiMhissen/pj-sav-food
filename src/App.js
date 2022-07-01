import { Routes, Route } from "react-router-dom";
import "./App.css";
import CreerCompte from "./Components/CreerCompte/index";
import CreerComptePart2 from "./Components/CreerCompte/mdpPage";
import Login from "./Components/Login/index";
import RepasJour from "./Components/Repas/RepasJour";
import RepasMois from "./Components/Repas/RepasMois";
import {RepasSemaine} from "./Components/Repas/RepasSemaine";
import {RepasCalendrier} from "./Components/Repas/RepasCalendrier";
import {Header} from "./Components/Header";

function App() {
  return (
    <>
      <Routes>
        {/*<Route path="/" element={<Login/>} />*/}
        {/*<Route path="sign-up" element={<CreerCompte />} />*/}
        {/*<Route path="sign-up-mdp" element={<CreerComptePart2 />} />*/}
          <Route path="/" element= {<Header />} >
            <Route path={"user/platsDuSemaine"} element={<RepasSemaine />} />
            <Route path={"user/platsDuMois"} element={<RepasMois />} />
            <Route path={"user/calendrier-plats"} element={<RepasCalendrier />} />
          </Route>
      </Routes>
    </>
  );
}

export default App;
