export default function compareAppointments(a, b){
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);
    if (aDate<bDate){
        return -1;
    }
    if (aDate>bDate){
        return 1;
    }
    if (a.date == b.date){
        if(a.time<b.time){
            return -1;
        }
        if(b.time>b.time){
            return 1;
        }
    }
    return 0
}