const enviar = document.getElementById('buttonEnter');
const email = document.getElementById('email');
const senha = document.getElementById('password');
const counter = document.getElementById('counter');
const textArea = document.getElementById('textarea');
const check = document.querySelector('#agreement');
const submit = document.querySelector('#submit-btn');

function verificaEmail() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}
enviar.addEventListener('click', verificaEmail);

function verificaBotao() {
  if (check.checked === true) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
}
check.addEventListener('click', verificaBotao);

function counterStrings() {
  const count = textArea.value.length;
  console.log(count);
  const restante = 500 - count;
  counter.innerText = restante;
}

textArea.addEventListener('keyup', counterStrings);
console.log(counter);
