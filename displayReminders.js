export default function displayReminders(){
    function populateReminders(){
        let reminders;
        if(!sessionStorage.getItem('reminders')){
        reminders = ['In semper nibh a sapien varius elementum', 'Praesent laoreet sapien non urna consectetur, quis vehicula nisi luctus'];
        sessionStorage.setItem("reminders", JSON.stringify(reminders));
        }
    }

    populateReminders();
    let reminders = JSON.parse(sessionStorage.getItem("reminders"));
    let reminderBox = document.getElementById('reminderBox');
    let addReminderBtn = document.getElementById('addReminderBtn');

    addReminderBtn.addEventListener('click', () => {
        let newReminder = document.getElementById('reminderIn').value;
        reminders.unshift(newReminder);
        sessionStorage.setItem("reminders", JSON.stringify(reminders));
        location.reload();
    })

    reminders.forEach((reminder, index) => {
        let div = document.createElement('div');
        let label = document.createElement('label');
        let input = document.createElement('input');
        div.className = 'reminder';
        label.innerHTML = reminder;
        input.type = 'checkbox';
        input.addEventListener('click', () => {
            reminders.splice(index, 1);
            sessionStorage.setItem("reminders", JSON.stringify(reminders));
            location.reload();
        })
        div.append(input);
        div.append(label);
        reminderBox.append(div);
    })   
}