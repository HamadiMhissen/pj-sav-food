import { Routes, Route } from "react-router-dom";
import "./App.css";
import CreerCompte from "./Components/CreerCompte/index";
import CreerComptePart2 from "./Components/CreerCompte/mdpPage";
import Login from "./Components/Login/index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="sign-up" element={<CreerCompte />} />
        <Route path="sign-up-mdp" element={<CreerComptePart2 />} />
      </Routes>
    </>
  );
}

export default App;
