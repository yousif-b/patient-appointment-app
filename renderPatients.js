export default function renderPatients(patients){
    let patientList = document.getElementById('patientList');
    patients.forEach((p) => {
        let div = document.createElement('div');
        div.className = 'patientCard';
        div.innerHTML = `
                <div class = "cardPatientIcon">
                </div>
                <div class = "cardInformationSection">
                    <div class = "cardInformationLabels">
                        <h3>Name</h3>
                        <h3>DOB</h3>
                        <h3>Phone</h3>
                        <h3>Email</h3>
                    </div>
                    <div class = "cardInformationDetails">
                        <h3>${p.name}</h3>
                        <h3>${p.dob}</h3>
                        <h3>${p.number}</h3>
                        <h3>${p.address}</h3>
                    </div>
                </div>
                <div class = "cardInformationSection">
                    <div class = "cardInformationLabels">
                        <h3>Latest Appt</h3>
                        <h3>Height</h3>
                        <h3>Weight</h3>
                        <h3>Sex</h3>
                    </div>
                    <div class = "cardInformationDetails">
                        <h3>${p.appointments[p.appointments.length-1].date}</h3>
                        <h3>${p.height} cm </h3>
                        <h3> ${p.weight} cm </h3>
                        <h3>${p.sex}</h3>
                    </div>
                </div>
            `;
        
        div.addEventListener('click', () => {
            window.location.href = `patient.html?p=${p.name}`;
        })
        
        patientList.append(div);
    })
}