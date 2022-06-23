export default function renderPatients(patients){
    let patientList = document.getElementById('patientList');
    patients.forEach(p => {
        let tr = document.createElement('tr');
        tr.className = 'patientRow';
        tr.innerHTML = `<td>${p.name}</td>
            <td>${p.dob}</td>
            <td>${p.appointments[p.appointments.length-1].date}</td>
            <td>${p.number}</td>`;
        tr.addEventListener('click', () => {
            window.location.href = `patient.html?p=${p.name}`;
        })
        patientList.append(tr);
    })
}