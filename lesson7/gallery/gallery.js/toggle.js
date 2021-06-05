const hamButton = document.querySelector('.ham');
const mainMenu = document.querySelector('.navigation');

hamButton.addEventListener('click', () =>{mainMenu.classList.toggle('responsive')}, false);

window.onresize = () => {
    if(window.innerWidth > 760){
        mainMenu.classList.remove('responsive');
    }
}

