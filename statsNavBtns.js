export default function statsNavBtns(){
    let stats = [document.getElementsByClassName("stats")[0], document.getElementsByClassName("stats")[1], document.getElementById("welcome")];
    let statsBtns = document.getElementsByClassName("navigateStats");
    let i = 0;
    stats[i].style.display = "inline-block";
    statsBtns[0].addEventListener("click", () => {
        stats[i].style.display = "none";
        if(i>0){i--;}
        else{i = 2;}
        stats[i].style.display = "inline-block";
    })
    statsBtns[1].addEventListener("click", () => {
        stats[i].style.display = "none";
        if(i<2){i++;}
        else{i = 0;}
        stats[i].style.display = "inline-block";
    });
}