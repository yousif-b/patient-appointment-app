export default function getStandardDate(date){
    let d = new Date(date);
    return `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`;
}