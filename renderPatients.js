export default function renderPatients(patients){
    function getPatientIcons(name, div){
        fetch(`https://avatars.dicebear.com/api/male/${name}.svg`)
        .then(response => response.text())
        .then(svg => div.insertAdjacentHTML("afterbegin", svg))
    }

    function getItemList(itemArr){
        let listHTML = `<div class = 'itemList'>`;
        itemArr.forEach(i => {
            listHTML+= `<h3> ${i} </h3>`;
        })
        return listHTML + '</div>';
    }

    let patientList = document.getElementById('patientList');
    patients.forEach((p) => {
        let previewDiv = document.createElement('div');
        let detailsDiv = document.createElement('div');
        detailsDiv.className = 'patientDetails';
        detailsDiv.style.display = 'none';
        previewDiv.className = 'patientCard';
        previewDiv.innerHTML = `
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
        
        detailsDiv.innerHTML = `
        <div class = 'medication'>
        <h2>Medication: </h2>
            ${getItemList(p.medications)}
        </div>
        <div class = 'symptoms'>
        <h2>Symptoms: </h2>
            ${getItemList(p.symptoms)}
        </div>
        <div class = "patientButtons">
            <button class = "editPatientBtn"> Edit Patient</button>
            <button class = "deletePatientBtn"> Delete </button>
        </div>
        `
        getPatientIcons(p.name, previewDiv);
        
        previewDiv.addEventListener('click', () => {
            if(detailsDiv.style.display == 'none'){
                detailsDiv.style.display = 'flex';
            }
            else{
                detailsDiv.style.display = 'none';
            }
        })
        patientList.append(previewDiv);
        patientList.append(detailsDiv);
    })
}