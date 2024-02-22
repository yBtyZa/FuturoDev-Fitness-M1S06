function expandirMenu() {
    let menuLateral = document.getElementById('header');
    let sectionPerfil = document.getElementById('sectionPerfil');
    let fontMenuLateral = document.querySelectorAll('.dplNone');

    menuLateral.style.width = '15vw';
    sectionPerfil.style.width = '85vw';

    fontMenuLateral.forEach(element => {
        element.style.display = 'initial';
    })    
}

function contrairMenu() {
    var menuLateral = document.getElementById('header');
    let sectionPerfil = document.getElementById('sectionPerfil');
    let fontMenuLateral = document.querySelectorAll('.dplNone')

    menuLateral.style.width = '6vw';
    sectionPerfil.style.width = '94vw';

    fontMenuLateral.forEach(element => {
        element.style.display = 'none';

    })
}