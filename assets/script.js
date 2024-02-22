// Criando funções para expanção do menu lateral
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

// Array contendo imagens de publicações inseridas dinamicamente
let publicacoes = [{
    titulo: 'Notebook',
    url: './assets/img/img publicacoes/img_1.jpg'
},
{
    titulo: 'jovem Programando',
    url: './assets/img/img publicacoes/img_2.jpg'
},
{
    titulo: 'Uma xícara de café',
    url: './assets/img/img publicacoes/img_3.jpg'
},
{
    titulo: 'Imagem de Florianópolis',
    url: './assets/img/img publicacoes/img_4.jpg'
},
{
    titulo: 'Ponte Hercílio Luz',
    url: './assets/img/img publicacoes/img_5.jpg'
},
{
    titulo: 'Um código de React.js',
    url: './assets/img/img publicacoes/img_6.jpg'
}
];

// Laço de repetição para inserção de imagens e numero de publicações
let numeroPublicacoes = document.getElementById('numeroPublicacoes');
let idPublicacoes = document.getElementById('publicacoes');

for (let i = 0; i < publicacoes.length; i++){
    let img = document.createElement('img');
    img.src = publicacoes[i].url;
    img.alt = `Publicação ${i+1} - ${publicacoes[i].titulo}`;
    idPublicacoes.appendChild(img);

    numeroPublicacoes.innerHTML = `Publicações: <strong>${i+1}</strong>`
}