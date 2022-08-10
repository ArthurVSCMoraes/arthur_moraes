function primeira() {
  const emailInput = document.getElementById('emailInput');
  const senhaInput = document.getElementById('senhaInput');
  // console.log(emailInput.value);
  // console.log(senhaInput.value);
  if (emailInput.value === 'tryber@teste.com' && senhaInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
const entrarBtn = document.getElementById('entrarBtn');
entrarBtn.addEventListener('click', primeira);

function segunda() {
  const Agreement = document.getElementById('agreement');
  if (Agreement.checked === true) {
    alert('Muito Obrigado');
  } else {
    alert('Você não concordou com o compartilhamento de dados.');
  }
}
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', segunda);

function terceira() {
  document.getElementById('submit-btn').disabled = false;
}
const agreeBtn = document.getElementById('agreement');
agreeBtn.addEventListener('click', terceira);

function quarta(evento) {
  const textCounter = document.getElementById('counter');
  textCounter.innerHTML = 500 - evento.target.value.length;
}
const textArea = document.getElementById('textarea');
textArea.addEventListener('input', quarta);
