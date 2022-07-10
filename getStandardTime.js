export default function getStandardTime(time){
    const t = time.split(':');
    const hours = t[0];
    const minutes = t[1];
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