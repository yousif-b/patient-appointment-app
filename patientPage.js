let patientBox = document.getElementById('patientBox');
let urlParams = new URLSearchParams(window.location.search);
let patientName = urlParams.get('p');
let patients = JSON.parse(sessionStorage.getItem("patients"));

function getMedication(medication){
    let medicationHTML = `<div id = 'medicationList'>`;
    medication.forEach(m => {
        medicationHTML+= `<h3> ${m} </h3>`;
    })
    return medicationHTML + '</div>';
}

function getAppointments(appointments){
    let appointmentsHTML = '';
    appointments.forEach(a => {
        appointmentsHTML += `
        <tr>
            <td> ${a.date} </td>
            <td> ${a.time} </td>
            <td> ${a.status} </td>
        </tr>
        `;
    })
    return appointmentsHTML;
}

patients.forEach(p =>{
    if(p.name == patientName){
        patientBox.innerHTML = `
            <div id = 'patientUpperSection'>
                <div id = 'patientInformation'>
                    <div id = 'patientName'>
                        <div id = 'patientIcon'></div>
                        <h1> ${p.name} </h1>
                    </div>
                    <div id = 'info'>
                        <h2> DOB: ${p.dob} </h2>
                        <h2> Height: ${p.height} </h2>
                        <h2> Weight: ${p.weight} </h2>
                        <h2> Sex: ${p.sex} </h2>
                        <h2> Number: ${p.number} </h2>
                        <div id = "patientButtons">
                            <button id = "editPatientBtn"> Edit </button>
                            <button id = "deletePatientBtn"> Delete Patient </button>
                        </div>
                    </div>
                </div>
                <div id = 'appointments'> 
                <h2>Appointments: </h2>
                <table>
                    ${getAppointments(p.appointments)}
                </table>
            </div>
            </div>
        `;
    }
});

fetch(`https://avatars.dicebear.com/api/male/${patientName}.svg`)
.then(response => response.text())
.then(svg => document.getElementById('patientIcon').insertAdjacentHTML("afterbegin", svg))