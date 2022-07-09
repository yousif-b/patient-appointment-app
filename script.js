import statsNavBtns from "./statsNavBtns.js";
import populatePatients from './populatePatients.js';
import getUpcomingAppointments from './getUpcomingAppointments.js';
import displayReminders from './displayReminders.js';
import hamburgerMenuBtn from './hamburgerMenuBtn.js';

populatePatients();
displayReminders();
let patients = JSON.parse(sessionStorage.getItem("patients"));
getUpcomingAppointments(patients);
statsNavBtns();
hamburgerMenuBtn();