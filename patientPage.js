let patientBox = document.getElementById('patientBox');
let urlParams = new URLSearchParams(window.location.search);
let patientName = urlParams.get('p');
let patients = JSON.parse(sessionStorage.getItem("patients"));

function getMedication(medication){
    let medicationHTML = ``;
    medication.forEach(m => {
        medicationHTML+= `<h3> ${m} </h3>`;
    })
    return medicationHTML;
}

function getAppointments(appointments){
}

patients.forEach(p =>{
    if(p.name == patientName){
        patientBox.innerHTML = `
            <h1> ${p.name} </h1>
            <h2> Date of Birth: ${p.dob} </h2>
            <h2> Height: ${p.height} </h2>
            <h2> Weight: ${p.weight} </h2>
            <h2> Sex: ${p.sex} </h2>
            <h2> Number: ${p.number} </h2>
            <div class = 'medication'>
            ${getMedication(p.medications)}
            </div>
            <div class = 'appointments'> 
            </div>
            <button> Edit </button>
            <button> Set Appointment </button>
        `
    }
})