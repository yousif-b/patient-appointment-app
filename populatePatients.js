export default function populatePatients(){
    let patients;
    if(!sessionStorage.getItem("patients")){
        patients = [{
            name: 'Njord Liupold',
            dob: '1996-08-05',
            height: 180,
            weight: 87,
            sex: 'male',
            email: 'mfleming@msn.com',
            address: '12345 Water Street',
            number: '173-153-8615',
            appointments: [{date: '06/03/22', status: 'confirmed', time: '03:28'}, {date: '04/23/25', status: 'confirmed', time: '14:20'}],
        },
        {
            name: 'Dashiell Vinnie',
            dob: '1996-08-05',
            height: 180,
            weight: 87,
            sex: 'male',
            email: 'mfleming@msn.com',
            address: '12345 Water Street',
            number: '173-153-8615',
            appointments: [{date: '03/09/22', status: 'cancelled', time: '04:50'}, {date: '04/09/22', status: 'confirmed', time: '18:28'}],
        },
        {
            name: 'Pamela Crispian',
            dob: '1996-08-05',
            height: 180,
            weight: 87,
            sex: 'female',
            email: 'mfleming@msn.com',
            address: '12345 Water Street',
            number: '173-153-8615',
            appointments: [{date: '02/28/22', status: 'confirmed', time: '12:28'}, {date: '03/25/23', status: 'confirmed', time: '17:14'}],
        },
        {
            name: 'Joslyn Janette',
            dob: '1996-08-05',
            height: 180,
            weight: 87,
            sex: 'female',
            email: 'mfleming@msn.com',
            address: '12345 Water Street',
            number: '173-153-8615',
            appointments: [{date: '07/15/22', status: 'cancelled', time: '14:28'}, {date: '12/20/23', status: 'confirmed', time: '12:20'}],
        },
        {
            name: 'Corbin Charlee',
            dob: '1996-08-05',
            height: 180,
            weight: 87,
            sex: 'male',
            email: 'mfleming@msn.com',
            address: '12345 Water Street',
            number: '173-153-8615',
            appointments: [{date: '07/05/22', status: 'confirmed', time: '10:20'}, {date: '11/13/23', status: 'confirmed', time: '15:35'}],
        },
        {
            name: 'Ryland Maxine',
            dob: '1996-08-05',
            height: 180,
            weight: 87,
            sex: 'male',
            email: 'mfleming@msn.com',
            address: '12345 Water Street',
            number: '173-153-8615',
            appointments: [{date: '03/15/22', status: 'confirmed', time: '17:20'}, {date: '03/09/22', status: 'confirmed', time: '16:10'}],
        },
        {
            name: 'Jemma Janele',
            dob: '1996-08-05',
            height: 180,
            weight: 87,
            sex: 'female',
            email: 'mfleming@msn.com',
            address: '12345 Water Street',
            number: '173-153-8615',
            appointments: [{date: '11/23/22', status: 'confirmed', time: '09:30'}, {date: '11/14/23', status: 'confirmed', time: '09:30'}],
        },
        {
            name: 'Herbie Mack',
            dob: '1996-08-05',
            height: 180,
            weight: 87,
            sex: 'male',
            email: 'mfleming@msn.com',
            address: '12345 Water Street',
            number: '173-153-8615',
            appointments: [{date: '04/23/22', status: 'confirmed', time: '14:28'}, {date: '04/23/25', status: 'confirmed', time: '14:28'}],
        }]
    
        sessionStorage.setItem("patients", JSON.stringify(patients));
    }
}