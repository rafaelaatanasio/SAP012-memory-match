//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';
// console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);

const App = () => {
  const el = document.createElement('div');

  el.className = 'App';
  el.innerHTML = `<header class="login_header">
  <h1 class="aparecer">The Midnight Memory</h1>
</header>

<section class="login_h2">
  <h2>"Quando aceitei estar onde estava, em vez de desejar estar em outro lugar, tudo melhorou!"</h2>
</section>

<main>
  <form class="login-form">
    <input type="text" id="nameInput" name="nome" placeholder="Seu Nome" class="login-input" required>
    <button type="submit" id="nameButton" class="login-button" disabled>Play</button>
  </form>
</main>

<footer>
  <nav>
    <ul class="social-links">
      <li><a href="https://github.com/rafaelaatanasio" target="_blank">GitHub</a></li>
      <li><a href="https://www.linkedin.com/in/rafaela-atanasio/" target="_blank">LinkedIn</a></li>
    </ul>
  </nav>
</footer>`;

const nomeInput = el.querySelector('.login-input');
const button = el.querySelector('.login-button');
const form = el.querySelector('.login-form');

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

  return el;
};

export default App;
