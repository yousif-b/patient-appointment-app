import renderPatients from "./renderPatients.js";
import hamburgerMenuBtn from './hamburgerMenuBtn.js';

let patients = JSON.parse(sessionStorage.getItem("patients"));

renderPatients(patients);
hamburgerMenuBtn();