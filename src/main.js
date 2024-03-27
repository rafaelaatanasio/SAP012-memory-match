//import App from './components/App.js';

//document.getElementById('root').appendChild(App());

const nomeInput = document.querySelector('.login-input');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form');

const validateInput = ({ target }) => {//o INPUT destruturação de objeto (extrair várias propriedades em uma única linha)
    if (target.value.length > 2) {
        button.removeAttribute('disabled');
        return //posso colocar um else tbm, assim é mais clean
    }
    button.setAttribute('disabled', "");
}

const handleSubmit = (event) => {
    event.preventDefault(); // Evita o comportamento padrão do formulário (envio e carregamento da página)
    localStorage.setItem('player', nomeInput.value); // Método setItem: chave player com o valor / nomeInput.value salva as informações digitadas no input, salvei no localstorage
    location.href = "./game.html";
}

nomeInput.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit); // função handleSubmit, salvar formulário

