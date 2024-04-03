import App from './App.js';

  document.body.appendChild(App());

describe('App', () => {
  it('should render without crashing', () => {
    const el = App();
    expect(el instanceof HTMLElement).toBe(true);
  });
  it('deve desabilitar o botão play se o nome informado tiver menos do que 3 digitos', () => {
    const inputName = document.getElementById('nameInput');
    const button = document.getElementById('nameButton');

    inputName.value = 'an';
    inputName.dispatchEvent(new Event('input', {bubbles:true}));
    expect(button.getAttributeNames().includes('disabled')).toBeTruthy();
  })
});
