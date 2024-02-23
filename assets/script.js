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


let horaAtual = document.getElementById('horaAtual')

function exibirHoraDataAtual() {
    // Criar um novo objeto Date, que representa a data e hora atuais
    let dataAtual = new Date();

    // Obter os componentes individuais da data e hora
    let dia = dataAtual.getDate();
    let mes = formatarNumeroComZero(dataAtual.getMonth() + 1);
    let ano = dataAtual.getFullYear();
    let hora = formatarNumeroComZero(dataAtual.getHours());
    let minutos = formatarNumeroComZero(dataAtual.getMinutes());
    let segundos = formatarNumeroComZero(dataAtual.getSeconds());

    // Formatar a data e hora conforme necessário
    let dataFormatada = dia + '/' + mes + '/' + ano;
    let horaFormatada = hora + ':' + minutos + ':' + segundos;

    horaAtual.innerHTML = dataFormatada + ' ' + horaFormatada
}

// Adiciona um zero à esquerda se o número for menor que 10
function formatarNumeroComZero(numero) {
    return numero < 10 ? '0' + numero : numero;
}

// Chamar a função para exibir a hora e a data atuais
exibirHoraDataAtual();

// Atualizar a hora e a data a cada segundo
setInterval(exibirHoraDataAtual, 1000);;