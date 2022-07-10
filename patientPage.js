import getStandardDate from './getStandardDate.js';
import getStandardTime from './getStandardTime.js'
import hamburgerMenuBtn from './hamburgerMenuBtn.js';

hamburgerMenuBtn();

let urlParams = new URLSearchParams(window.location.search);
let patientName = urlParams.get('p');
let patients = JSON.parse(sessionStorage.getItem("patients"));
let infoValues = document.getElementsByClassName('infoValue');
let appointmentsList = document.getElementById('appointments');
let editPatientBtn = document.getElementById('editPatientBtn');
let deletePatientBtn = document.getElementById('deletePatientBtn');
let infoValuesBox = document.getElementById('infoValues');
let patientNameBox = document.getElementById('patientName');

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
                patients[pIndex].appointments[aIndex].status = 'cancelled';
                sessionStorage.setItem("patients", JSON.stringify(patients));
                location.reload();
            })
            deleteBtn.addEventListener('click', () => {
                patients[pIndex].appointments.splice(aIndex, 1);
                sessionStorage.setItem("patients", JSON.stringify(patients));
                location.reload();
            })

            appointmentDiv.innerHTML = `
            <p> ${getStandardDate(a.date)} </p>
            <p> ${getStandardTime(a.time)} </p>
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
        if(patients[pIndex].appointments){
        patients[pIndex].appointments.unshift(appt);
        }
        else{
            patients[pIndex].appointments = [appt];
        }
        sessionStorage.setItem("patients", JSON.stringify(patients));
        location.reload();
    })
}

patients.forEach((patient, pIndex) =>{
    if(patient.name == patientName){
        infoValues[0].innerHTML = patient.name;
        infoValues[1].innerHTML = getStandardDate(patient.dob);
        infoValues[2].innerHTML = `${patient.height} cm`;
        infoValues[3].innerHTML = `${patient.weight} kg`;
        infoValues[4].innerHTML = patient.sex;
        infoValues[5].innerHTML = patient.number;
        infoValues[6].innerHTML = patient.email;
        infoValues[7].innerHTML = patient.address;

        getPatientIcon(patient.name, patient.sex);
        displayAppointments(patient , pIndex);
        createAppointment(pIndex);

        editPatientBtn.addEventListener('click', () => {
            let nameIn = document.createElement('input');
            let dobIn = document.createElement('input');
            let heightIn = document.createElement('input');
            let weightIn = document.createElement('input');
            let sexIn = document.createElement('select');
            let numberIn = document.createElement('input');
            let emailIn = document.createElement('input');
            let addressIn = document.createElement('input');
            let discardBtn = document.createElement('button');
            let saveBtn = document.createElement('button');
            nameIn.type = 'text';
            nameIn.style = 'margin-top:1rem;';
            dobIn.type = 'date';
            heightIn.type = 'number';
            weightIn.type = 'number';
            sexIn.innerHTML = `
            <option value = 'male'> male </option>
            <option value = 'female'> female </option>
            `;
            numberIn.type = 'tel';
            emailIn.type = 'email';
            addressIn.type = 'text';

            nameIn.value = patient.name;
            dobIn.value = getStandardDate(patient.dob);
            heightIn.value = patient.height;
            weightIn.value = patient.weight;
            sexIn.value = patient.sex;
            numberIn.value = patient.number;
            emailIn.value = patient.email;
            addressIn.value = patient.address;

            patientNameBox.querySelector('h1').replaceWith(nameIn);
            infoValuesBox.replaceChildren(dobIn, heightIn, weightIn, sexIn, numberIn,
                emailIn, addressIn);

            discardBtn.innerHTML = 'discard';
            saveBtn.innerHTML = 'save';
            
            discardBtn.id = 'discardPatientBtn';
            saveBtn.id = 'savePatientBtn';

            discardBtn.addEventListener('click', () => {location.reload()});
            saveBtn.addEventListener('click', () => {
                patients[pIndex].name = nameIn.value;
                patients[pIndex].dob = dateIn.value;
                patients[pIndex].height = heightIn.value;
                patients[pIndex].weight = weightIn.value;
                patients[pIndex].sex = sexIn.value;
                patients[pIndex].number = numberIn.value;
                patients[pIndex].email = emailIn.value;
                patients[pIndex].address = addressIn.value; 
                sessionStorage.setItem("patients", JSON.stringify(patients));
                window.location.href = `patient.html?p=${nameIn.value}`;
            })
            editPatientBtn.replaceWith(saveBtn);
            deletePatientBtn.replaceWith(discardBtn);
        })

        deletePatientBtn.addEventListener('click', () => {
            patients.splice(pIndex, 1);
            sessionStorage.setItem("patients", JSON.stringify(patients));
            window.location.href = 'patients.html';
        })
    }
});