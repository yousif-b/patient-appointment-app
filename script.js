import statsNavBtns from "./statsNavBtns.js";

let patients;

if(!sessionStorage.getItem("patients")){
    patients = [{
        name: 'Rony Brawa',
        dob: '05/23/1996',
        height: 180,
        weight: 87,
        sex: 'm',
        number: '173-153-8615',
        medications: ['ibuprofen', 'ibuprofen', 'ibuprofen'],
        symptoms: ['cold', 'cold', 'cold', 'cold', 'cold', 'cold', 'cold', 'cold', 'cold'],
        appointments: [{date: '04/23/22', status: 'confirmed', time: '06:00PM'}, {date: '04/23/25', status: 'confirmed', time: '06:00PM'}],
    },
    {
        name: 'Rony Brawa',
        dob: '05/23/1996',
        height: 180,
        weight: 87,
        sex: 'm',
        number: '173-153-8615',
        medications: ['ibuprofen', 'ibuprofen', 'ibuprofen'],
        symptoms: ['cold', 'cold', 'cold'],
        appointments: [{date: '04/23/22', status: 'confirmed', time: '06:00PM'}, {date: '04/23/25', status: 'confirmed', time: '06:00PM'}],
    },
    {
        name: 'Rony Brawa',
        dob: '05/23/1996',
        height: 180,
        weight: 87,
        sex: 'm',
        number: '173-153-8615',
        medications: ['ibuprofen', 'ibuprofen', 'ibuprofen'],
        symptoms: ['cold', 'cold', 'cold'],
        appointments: [{date: '04/23/22', status: 'confirmed', time: '06:00PM'}, {date: '04/23/25', status: 'confirmed', time: '06:00PM'}],
    },
    {
        name: 'Rony Brawa',
        dob: '05/23/1996',
        height: 180,
        weight: 87,
        sex: 'm',
        number: '173-153-8615',
        medications: ['ibuprofen', 'ibuprofen', 'ibuprofen'],
        symptoms: ['cold', 'cold', 'cold'],
        appointments: [{date: '04/23/22', status: 'confirmed', time: '06:00PM'}, {date: '04/23/25', status: 'confirmed', time: '06:00PM'}],
    },
    {
        name: 'Rony Brawa',
        dob: '05/23/1996',
        height: 180,
        weight: 87,
        sex: 'm',
        number: '173-153-8615',
        medications: ['ibuprofen', 'ibuprofen', 'ibuprofen'],
        symptoms: ['cold', 'cold', 'cold'],
        appointments: [{date: '04/23/22', status: 'confirmed', time: '06:00PM'}, {date: '04/23/25', status: 'confirmed', time: '06:00PM'}],
    },
    {
        name: 'Rony Brawa',
        dob: '05/23/1996',
        height: 180,
        weight: 87,
        sex: 'm',
        number: '173-153-8615',
        medications: ['ibuprofen', 'ibuprofen', 'ibuprofen'],
        symptoms: ['cold', 'cold', 'cold'],
        appointments: [{date: '04/23/22', status: 'confirmed', time: '06:00PM'}, {date: '04/23/25', status: 'confirmed', time: '06:00PM'}],
    },
    {
        name: 'Rony Brawa',
        dob: '05/23/1996',
        height: 180,
        weight: 87,
        sex: 'm',
        number: '173-153-8615',
        medications: ['ibuprofen', 'ibuprofen', 'ibuprofen'],
        symptoms: ['cold', 'cold', 'cold'],
        appointments: [{date: '04/23/22', status: 'confirmed', time: '06:00PM'}, {date: '04/23/25', status: 'confirmed', time: '06:00PM'}],
    },
    {
        name: 'Rony Brawa',
        dob: '05/23/1996',
        height: 180,
        weight: 87,
        sex: 'm',
        number: '173-153-8615',
        medications: ['ibuprofen', 'ibuprofen', 'ibuprofen'],
        symptoms: ['cold', 'cold', 'cold'],
        appointments: [{date: '04/23/22', status: 'confirmed', time: '06:00PM'}, {date: '04/23/25', status: 'confirmed', time: '06:00PM'}],
    }]

    sessionStorage.setItem("patients", JSON.stringify(patients));
}
else{
    patients = JSON.parse(sessionStorage.getItem("patients"));
}
statsNavBtns();
//renderStats(patients);