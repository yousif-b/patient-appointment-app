export default function getStandardTime(time){
    let t = time.split(':');
    let hours = t[0];
    let minutes = t[1];
    let timeValue;
    if(hours> 0 && hours <= 12){
        timeValue = hours + ":" + minutes + " AM";
    } else if( hours > 12){
        timeValue = `0${hours - 12}` + ":" + minutes + " PM"; 
    } else if( hours == 0) {
        timeValue = "12:"+ minutes + " AM";
    }

    return timeValue;
}