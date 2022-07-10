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
                    <div class = 'cardInformationDetails'>
                        <div class = 'dataField'>
                            <label class = 'dataLabel'> Name </label>
                            <p> ${p.name} </p>
                        </div>
                        <div class = 'dataField'>
                            <label class = 'dataLabel'> DOB </label>
                            <p> ${dobDate.getMonth()+1}/${dobDate.getDate()}/${dobDate.getFullYear()} </p>
                        </div>
                        <div class = 'dataField'>
                            <label class = 'dataLabel'> Phone </label>
                            <p> ${p.number} </p>
                        </div>
                        <div class = 'dataField'>
                            <label class = 'dataLabel'> Address </label>
                            <p> ${p.address} </p>
                        </div>                        
                    </div>
                    <div class = 'cardInformationDetails'>
                        <div class = 'dataField'>
                            <label class = 'dataLabel'> Height </label>
                            <p> ${p.height} </p>
                        </div>
                        <div class = 'dataField'>
                            <label class = 'dataLabel'> Weight </label>
                            <p> ${p.weight} </p>
                        </div>
                        <div class = 'dataField'>
                            <label class = 'dataLabel'> Sex </label>
                            <p> ${p.sex} </p>
                        </div>
                        <div class = 'dataField'>
                            <label class = 'dataLabel'> Latest Appt </label>
                            <p> ${getLatestAppointment(p.appointments)} </p>
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