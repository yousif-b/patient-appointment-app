import renderPatients from "./renderPatients.js";

let patients = JSON.parse(sessionStorage.getItem("patients"));
renderPatients(patients);
//renderAppointments(patients);