const enviar = document.getElementById('buttonEnter');
const email = document.getElementById('email');
const senha = document.getElementById('password');
function verificaEmail() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}
enviar.addEventListener('click', verificaEmail);
console.log('aaaaa');
