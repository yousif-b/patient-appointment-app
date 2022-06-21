import statsNavBtns from "./statsNavBtns.js";
import handlePatients from "./handlePatients.js";

let patients;

if(!sessionStorage.getItem("patients")){
    patients = [{
        name: 'Rony Brawa',
        age: 26,
        dob: '05/23/1996',
        height: 180,
        weight: 87,
        number: '32523157623',
        medications: [],
        appointments: [],
    },
    {
        name: 'Rony Brawa',
        age: 26,
        dob: '05/23/1996',
        height: 180,
        weight: 87,
        number: '32523157623',
        medications: [],
        appointments: [],
    }]

    sessionStorage.setItem("patients", JSON.stringify(patients));
}
else{
    patients = JSON.parse(sessionStorage.getItem("patients"));
}

handlePatients(patients);
statsNavBtns();