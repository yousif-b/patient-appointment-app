export default function renderPatients(patients){
    let submitBtn  = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', () => {
        let data = [document.getElementById('nameIn'), document.getElementById('dateIn'), document.getElementById('weightIn'),
        document.getElementById('heightIn'), document.getElementById('sexIn'), document.getElementById('phoneIn'),
        document.getElementById('emailIn'), document.getElementById('addressIn')];
        let counter = 0;

        data.forEach(d => {
            if(!d.value){
                d.style = 'border-color: #ff595f'
            }
            else{
                counter++;
            }
        })
        if(counter == 8){
            let newPatientData = {
                name: data[0].value,
                dob: data[1].value,
                height: data[2].value,
                weight: data[3].value,
                sex: data[4].value,
                number: data[5].value,
                email: data[6].value,
                address: data[7].value,
            }

            patients.push(newPatientData);
            sessionStorage.setItem("patients", JSON.stringify(patients));
            location.reload();
        }
    });
    
    function getEachPatientIcon(name, div, sex){
        fetch(`https://avatars.dicebear.com/api/${sex}/${name}.svg`)
        .then(response => response.text())
        .then(svg => div.insertAdjacentHTML("afterbegin", svg))
    }

    function getLatestAppointment(appointments){
        if(appointments){
            let date = new Date(appointments[appointments.length-1].date);
            return `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
        }
        else{
            return 'none made';
        }
    }

    let patientList = document.getElementById('patientList');
    patients.forEach((p) => {
        let div = document.createElement('div');
        let dobDate = new Date(p.dob);
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
                        <h3>${dobDate.getMonth()+1}/${dobDate.getDate()}/${dobDate.getFullYear()}</h3>
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
                        <h3> ${p.weight} kg </h3>
                        <h3>${p.sex}</h3>
                        <h3>${getLatestAppointment(p.appointments)}</h3>
                    </div>
                </div>
            `;

        getEachPatientIcon(p.name, div, p.sex);
        
        div.addEventListener('click', () => {
            window.location.href = `patient.html?p=${p.name}`;
        })
        patientList.append(div);
    })
}