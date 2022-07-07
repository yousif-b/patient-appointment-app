export default function renderPatients(patients){
    function getPatientIcons(name, div, sex){
        fetch(`https://avatars.dicebear.com/api/${sex}/${name}.svg`)
        .then(response => response.text())
        .then(svg => div.insertAdjacentHTML("afterbegin", svg))
    }

    function getLatestAppointment(appointments){
        console.log(appointments);
        if(appointments.length>0){
            return appointments[appointments.length-1].date;
        }
        else{
            return 'none made';
        }
    }

    let patientList = document.getElementById('patientList');
    patients.forEach((p) => {
        let div = document.createElement('div');
        div.className = 'patientCard';
        div.innerHTML = `
                <div class = "cardInformationSection">
                    <div class = "cardInformationLabels">
                        <h3>Name</h3>
                        <h3>DOB</h3>
                        <h3>Phone</h3>
                        <h3>Address</h3>
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
                        <h3>Height</h3>
                        <h3>Weight</h3>
                        <h3>Sex</h3>
                        <h3>Latest Appt</h3>
                    </div>
                    <div class = "cardInformationDetails">
                        <h3>${p.height} cm </h3>
                        <h3> ${p.weight} cm </h3>
                        <h3>${p.sex}</h3>
                        <h3>${getLatestAppointment(p.appointments)}</h3>
                    </div>
                </div>
            `;

        getPatientIcons(p.name, div, p.sex);
        
        div.addEventListener('click', () => {
            window.location.href = `patient.html?p=${p.name}`;
        })
        patientList.append(div);
    })
}