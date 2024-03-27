
const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']; //array literal

// VARIÁVEIS GLOBAIS PARA COMPARAR AS CARTAS
let firstCard = '';
let secondCard = '';






// VERIFICA SE ACABOU O JOGO DEPOIS DE VIRAR TODAS AS CARTAS
const checkEndGame = () => {
    const disableCards = document.querySelectorAll('.disable-card'); // pegando TODAS as cartas desabilitadas

    if (disableCards.length === 20) { // pegando todo o array e verificando 
  //      clearInterval(this.loop); //vai limpar o loop com essa função clearInterval
        alert(`Parabénssssssss, ${spanPlayer.innertHTML}! Seu tempo foi: ${timer.innerHTML}`); //verificando o tamanho
    }
}




// VERIFICA SE AS CARTAS SÃO IGUAIS COM COMPARAÇÃO DOS ATRIBUTOS
const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if (firstCharacter === secondCharacter) {

        firstCard.firstChild.classList.add('disable-card'); // puxa essa classe do css tbm caso acerte, ficando da forma que configurou, opacidade etc
        secondCard.firstChild.classList.add('disable-card'); // firstChild / primeira filha é as frente da carta, face front

        firstCard = ''; // zerando as cartas depois de clicadas caso erre (se não, só vou conseguir clicar em 2 e acabou)
        secondCard = '';

        checkEndGame(); // função de término de jogo, criei acima

    } else {

        setTimeout(() => { // tempo em milisegundos pra poder desvirar a carta caso erre
            firstCard.classList.remove('reveal-card'); // se errar oculta as cartas removendo a classe 'reveal-card'
            secondCard.classList.remove('reveal-card');

            firstCard = ''; // zerando as cartas depois de clicadas caso erre (se não, só vou conseguir clicar em 2 e acabou)
            secondCard = '';

        }, 600);
    }
}

// REVELANDO E COMPARANDO AS CARTAS
const revealCard = ({ target }) => { //esta sendo as costas da carta face back 

    if (target.parentNode.className.includes('reveal-card')) { // verifica se a carta já foi revelada 'reveal-card'
        return;
    }

    if (firstCard === '') {
        target.parentNode.classList.add('reveal-card'); // elemento pai dessa div target é a carta. PAI = PARENT NODE // add uma nova classe, no caso a reveal do css
        firstCard = target.parentNode; // depois de revelada e salva aqui, primeira carta
    } else if (secondCard === '') { // verificando se está vazia tbm
        target.parentNode.classList.add('reveal-card'); //pai dessa div target é a carta. PAI = PARENT NODE
        secondCard = target.parentNode; // se não for vai ser guardada aqui na segunda carta

        checkCards(); // função que verifica se as cartas são iguais´, criei em cima essa função e o atributo no createCards
    }
}

// CRIANDO ELEMENTO
const createElement = (tag, className) => { //div e classe
    const element = document.createElement(tag);
    element.className = className;
    return element; // assim que retorna é salvo na variável card, front e back
}

// CRIANDO A CARTA, tirando do html
const createCard = (character) => { // parâmetro da carta

    const card = createElement('div', 'card'); //aqui recebe 2 parametros, a função criou a tag/div e a classe que vc quer criar
    const front = createElement('div', 'face front'); //aqui vc coloca a tag/div que vc quer criar
    const back = createElement('div', 'face back'); //aqui vc coloca a tag/div que vc quer criar

    front.style.backgroundImage = `url('./img/${character}.jpg')`; // `` = aqui tou passando uma variável dentro de strings de forma dinâmica $, mexendo no css

    // MONTAR TUDO, DEIXAR JUNTO/filhos
    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character); // atributo novo, data-character [é um atributo que nomeia], e o valor pra ir buscando

    return card;
}

//CRIAR UMA FUNÇÃO PRA GERAR O JOGO / CARREGAR
const loadGame = () => {

    const duplicateCharacteres = [...characters, ...characters]; // operador que espalha / pegar e espalhar os elementos do array dentro desse array

    const shuffledArray = duplicateCharacteres.sort(() => Math.random() - 0.5); // embaralha o método sort com a função math.random de forma aleatória

    shuffledArray.forEach((character) => { // percorre os arrays, no singular pois serão cada um por vez
        const card = createCard(character); // passando o personagem pra cada carta
        grid.appendChild(card); // colocando a carta dentro do grid
    });
}






/* const startTimer = () => {

    this.loop = setInterval(() => { //ESTUDAR SOBRE THISSSS. Tudo dentro do this tá salvo, tá amarmazendo o setinterval
        const currentTime = +timer.innerHTML; //o + convertido para número ou assim tbm rola Number(timer.innerHTML)
        timer.innerHTML = currentTime + 1;
    }, 1000);

} */





window.onload = () => { //executar alguma coisa quando a janela for carregada
    spanPlayer.innerHTML = localStorage.getItem('player'); //valor salvo no localStorage
    //startTimer();
    loadGame(); // embaralha / função que carrega o jogo
}
