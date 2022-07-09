export default function hamburgerMenuBtn(){
    const hamburgerMenuBtn = document.getElementById('hamburgerMenuBtn');
    const hamburgerMenu = document.getElementById('hamburgerMenu');

    hamburgerMenuBtn.addEventListener('click', () => {
        if(hamburgerMenu.style.display == 'none'){
            hamburgerMenu.style.display = 'flex';
        }
        else{
            hamburgerMenu.style.display = 'none';
        }
    })
}