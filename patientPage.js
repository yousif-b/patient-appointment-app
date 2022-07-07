let patientBox = document.getElementById('patientBox');
let urlParams = new URLSearchParams(window.location.search);
let patientName = urlParams.get('p');
let patients = JSON.parse(sessionStorage.getItem("patients"));
let infoValues = document.getElementsByClassName('infoValue');
let appointmentsList = document.getElementById('appointments');

function getPatientIcon(name, sex){
    fetch(`https://avatars.dicebear.com/api/${sex}/${name}.svg`)
    .then(response => response.text())
    .then(svg => document.getElementById('patientIcon').insertAdjacentHTML("afterbegin", svg))
}

function displayAppointments(patient, pIndex){
    if(patient.appointments){
        patient.appointments.forEach((a, aIndex) => {
            let appointmentDiv = document.createElement('div');
            let buttonsDiv = document.createElement('div');
            let cancelBtn = document.createElement('button');
            let confirmBtn = document.createElement('button');
            let deleteBtn = document.createElement('button');
            appointmentDiv.className = 'appointment';
            buttonsDiv.className = 'appointmentBtns';
            confirmBtn.className = 'appointmentConfirmBtn';
            cancelBtn.className = 'appointmentCancelBtn';
            deleteBtn.className = 'appointmentDeleteBtn';
            confirmBtn.innerHTML = '&#10003;'
            cancelBtn.innerHTML = '&#10005;';
            deleteBtn.innerHTML = 'delete';
            confirmBtn.addEventListener('click', () => {
                patients[pIndex].appointments[aIndex].status = 'confirmed';
                sessionStorage.setItem("patients", JSON.stringify(patients));
                location.reload();
            })
            cancelBtn.addEventListener('click', () => {
                patients[pIndex].appointments[aIndex].status = 'not confirmed';
                sessionStorage.setItem("patients", JSON.stringify(patients));
                location.reload();
            })
            deleteBtn.addEventListener('click', () => {
                patients[pIndex].appointments.splice(aIndex, 1);
                sessionStorage.setItem("patients", JSON.stringify(patients));
                location.reload();
            })
            appointmentDiv.innerHTML = `
            <p> ${a.date} </p>
            <p> ${a.time} </p>
            <p> ${a.status} </p>
            `;
            buttonsDiv.append(confirmBtn);
            buttonsDiv.append(cancelBtn);
            buttonsDiv.append(deleteBtn);
    
            appointmentDiv.append(buttonsDiv);
            appointmentsList.append(appointmentDiv);
            })
        }
}

function createAppointment(pIndex){
    const addAppointmentBtn = document.getElementById('addAppointmentBtn');
    addAppointmentBtn.addEventListener('click', () => {
        const appointmentFields = document.querySelectorAll('#setAppointmentForm input');
        let appt = {date: appointmentFields[0].value , status: 'not confirmed', time:appointmentFields[1].value};
        patients[pIndex].appointments.push(appt);
        sessionStorage.setItem("patients", JSON.stringify(patients));
        location.reload(); // currently resets url parameters
    })
}

patients.forEach((patient, pIndex) =>{
    if(patient.name == patientName){
        infoValues[0].innerHTML = patient.name;
        infoValues[1].innerHTML = patient.dob;
        infoValues[2].innerHTML = patient.height;
        infoValues[3].innerHTML = patient.weight;
        infoValues[4].innerHTML = patient.sex;
        infoValues[5].innerHTML = patient.number;
        infoValues[6].innerHTML = patient.email;
        infoValues[7].innerHTML = patient.address;

        getPatientIcon(patient.name, patient.sex);
        displayAppointments(patient , pIndex);
        createAppointment(pIndex);
    }
});