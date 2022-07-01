import {cardClasses, FormControl, InputLabel, makeStyles, MenuItem, Select, selectClasses} from "@mui/material";
import {useState} from "react";

import {blue, orange, red} from "@mui/material/colors";
import {RepasSemaine} from "./RepasSemaine";
import RepasMois from "./RepasMois";

const repasSemaine = <RepasSemaine />;
const repasMois = <RepasMois />;
export const RepasCalendrier = () => {
    const [calendrier, setCalendrier] = useState("format");
    const color = red;

    return <>
        <br />
        <FormControl>
            <InputLabel id="select-label">calendrier</InputLabel>
            <Select
                sx={{ outlineColor: "#662483"}}
                labelId="select-label"
                id="demo-simple-select"
                value={calendrier}
                label="Calendrier"
                onChange={(e) => setCalendrier(e.target.value) }
            >
                <MenuItem value="format">Choisir format</MenuItem>
                <MenuItem value="mois">Par mois</MenuItem>
                <MenuItem value="semaine">Par semaine</MenuItem>
            </Select>
        </FormControl>
        {calendrier === "semaine" ? repasSemaine : null}
        {calendrier === "mois" ? repasMois : null}
    </>;
        }