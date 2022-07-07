import statsNavBtns from "./statsNavBtns.js";

let patients;

if(!sessionStorage.getItem("patients")){
    patients = [{
        name: 'Njord Liupold',
        dob: '05/23/1996',
        height: 180,
        weight: 87,
        sex: 'male',
        email: 'mfleming@msn.com',
        address: '12345 Water Street',
        number: '173-153-8615',
        appointments: [{date: '04/23/22', status: 'confirmed', time: '06:00PM'}, {date: '04/23/25', status: 'confirmed', time: '06:00PM'}],
    },
    {
        name: 'Dashiell Vinnie',
        dob: '05/23/1996',
        height: 180,
        weight: 87,
        sex: 'male',
        email: 'mfleming@msn.com',
        address: '12345 Water Street',
        number: '173-153-8615',
        appointments: [{date: '04/23/22', status: 'confirmed', time: '06:00PM'}, {date: '04/23/25', status: 'confirmed', time: '06:00PM'}],
    },
    {
        name: 'Pamela Crispian',
        dob: '05/23/1996',
        height: 180,
        weight: 87,
        sex: 'female',
        email: 'mfleming@msn.com',
        address: '12345 Water Street',
        number: '173-153-8615',
        appointments: [{date: '04/23/22', status: 'confirmed', time: '06:00PM'}, {date: '04/23/25', status: 'confirmed', time: '06:00PM'}],
    },
    {
        name: 'Joslyn Janette',
        dob: '05/23/1996',
        height: 180,
        weight: 87,
        sex: 'female',
        email: 'mfleming@msn.com',
        address: '12345 Water Street',
        number: '173-153-8615',
        appointments: [{date: '04/23/22', status: 'confirmed', time: '06:00PM'}, {date: '04/23/25', status: 'confirmed', time: '06:00PM'}],
    },
    {
        name: 'Corbin Charlee',
        dob: '05/23/1996',
        height: 180,
        weight: 87,
        sex: 'male',
        email: 'mfleming@msn.com',
        address: '12345 Water Street',
        number: '173-153-8615',
        appointments: [{date: '04/23/22', status: 'confirmed', time: '06:00PM'}, {date: '04/23/25', status: 'confirmed', time: '06:00PM'}],
    },
    {
        name: 'Ryland Maxine',
        dob: '05/23/1996',
        height: 180,
        weight: 87,
        sex: 'male',
        email: 'mfleming@msn.com',
        address: '12345 Water Street',
        number: '173-153-8615',
        appointments: [{date: '04/23/22', status: 'confirmed', time: '06:00PM'}, {date: '04/23/25', status: 'confirmed', time: '06:00PM'}],
    },
    {
        name: 'Jemma Janele',
        dob: '05/23/1996',
        height: 180,
        weight: 87,
        sex: 'female',
        email: 'mfleming@msn.com',
        address: '12345 Water Street',
        number: '173-153-8615',
        appointments: [{date: '04/23/22', status: 'confirmed', time: '06:00PM'}, {date: '04/23/25', status: 'confirmed', time: '06:00PM'}],
    },
    {
        name: 'Herbie Mack',
        dob: '05/23/1996',
        height: 180,
        weight: 87,
        sex: 'male',
        email: 'mfleming@msn.com',
        address: '12345 Water Street',
        number: '173-153-8615',
        appointments: [{date: '04/23/22', status: 'confirmed', time: '06:00PM'}, {date: '04/23/25', status: 'confirmed', time: '06:00PM'}],
    }]

    sessionStorage.setItem("patients", JSON.stringify(patients));
}
else{
    patients = JSON.parse(sessionStorage.getItem("patients"));
}
statsNavBtns();
//renderStats(patients);