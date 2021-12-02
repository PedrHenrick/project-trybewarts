const enviar = document.getElementById('buttonEnter');
const email = document.getElementById('email');
const senha = document.getElementById('password');
const counter = document.getElementById('counter');
const textArea = document.getElementById('textarea');

function verificaEmail() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}
enviar.addEventListener('click', verificaEmail);
console.log('aaaaa');

function counterStrings() {
  const count = textArea.value.length;
  console.log(count);
  const restante = 500 - count;
  counter.innerText = restante;
}

textArea.addEventListener('keyup', counterStrings);
console.log(counter);
