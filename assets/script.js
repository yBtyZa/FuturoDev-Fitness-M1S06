let menuLateral = document.getElementById('header');
let sectionPerfil = document.getElementById('main');
let fontMenuLateral = document.querySelectorAll('.dplNone');
let footer = document.getElementById('footer');

function expandirMenu() {
    footer.style.paddingLeft = '20%'
    menuLateral.style.width = '15vw';
    sectionPerfil.style.marginLeft = '20%';

    fontMenuLateral.forEach(element => {
        element.style.display = 'initial';
    })    
}

function contrairMenu() {
    footer.style.paddingLeft = '10%'
    menuLateral.style.width = '6vw';
    sectionPerfil.style.marginLeft = '10%';

    fontMenuLateral.forEach(element => {
        element.style.display = 'none';

    })
}