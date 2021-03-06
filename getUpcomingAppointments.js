import getStandardTime from "./getStandardTime.js";
import getStandardDate from "./getStandardDate.js";
import compareAppointments from "./compareAppointments.js";

export default function getUpcomingAppointments(patients){
    const upcomingApppointmentsList = document.getElementById('upcomingAppointmentsTable');
    let patientsAppointments = [];
    let totalAppointmentsCount = 0;
    let appointmentsCancelledCount = 0;

    patients.forEach(p => {
        if(p.appointments){
            p.appointments.forEach(a => {
                totalAppointmentsCount ++;
                if(a.status == 'cancelled'){
                    appointmentsCancelledCount ++;
                }
                if(new Date(a.date) > new Date()){
                    let apptObj = {
                        name: p.name,
                        date: getStandardDate(a.date),
                        time: a.time,
                        status: a.status,
                    };
                    patientsAppointments.unshift(apptObj);
                }
            })
        }
    })
    
    patientsAppointments.sort(compareAppointments);
    document.getElementById('appointmentsCount').innerHTML = totalAppointmentsCount;
    document.getElementById('appointmentsCancelledCount').innerHTML = appointmentsCancelledCount;
    patientsAppointments.forEach(a => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td> ${a.name} </td>
            <td> ${a.date} </td>
            <td> ${getStandardTime(a.time)} </td>
            <td> ${a.status} </td>
        `
        upcomingApppointmentsList.append(tr);
    })
}