const input = document.querySelector('.ninja-input');
const button = document.querySelector('.ninja-button');
const form = document.querySelector('.login-ninja');

const validateInput = ({ target }) => {
  if (target.value.length > 1) {
    button.removeAttribute('disabled');
    return;
  }

  button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
  event.preventDefault();

  localStorage.setItem('player', input.value);
  window.location = '../Jogo/index.html'
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);
