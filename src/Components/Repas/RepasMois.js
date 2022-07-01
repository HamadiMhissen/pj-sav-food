import RepasJour from "./RepasJour";

export default function RepasMois(){
    const joursDuMois = []
    const joursDuSemaine = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    let cond = true;
    let dt = new Date();
    let month = dt.getMonth();
    let year = dt.getFullYear();
    let daysInMonth = new Date(year, month+1, 0).getDate();
    let i = 1;
    let dateInitiale = new Date(year,month,1);
    while (joursDuSemaine[dateInitiale.getDay()] !== "Lundi"){
        i--;
        dateInitiale.setDate(dateInitiale.getDate()-1);
    }
    let jourAVisualiser = joursDuSemaine[dateInitiale.getDay()];
    while (i< 1){
        joursDuMois.push(`${jourAVisualiser} ${dateInitiale.getDate()}/${month}`);
        dateInitiale.setDate(dateInitiale.getDate()+1);
        jourAVisualiser = joursDuSemaine[dateInitiale.getDay()];
        i++;
    }
    let j;
    for (j=i; j<=daysInMonth; j++){
        joursDuMois.push(`${jourAVisualiser} ${j}/${month+1}`);
        dateInitiale.setDate(dateInitiale.getDate() + 1);
        jourAVisualiser = joursDuSemaine[dateInitiale.getDay()];
    }
    j=1;
    while (joursDuSemaine[dateInitiale.getDay()] !== "Lundi"){
        joursDuMois.push(`${jourAVisualiser} ${j}/${month+2}`);
        dateInitiale.setDate(dateInitiale.getDate() + 1);
        jourAVisualiser = joursDuSemaine[dateInitiale.getDay()];
        j++;
    }
    return (
        <>
            <h2>Calendrier des repas par mois</h2>
        {
            joursDuMois.map(value => <RepasJour key={`${value}001`} jjCourant={value} taille={185}/>)
        }
        </>
            );
    }

