import './style.css';

const main = document.querySelector('#min');
let num = 0;

setInterval(update, 1000);

function update() {
  num += 1;
  if (main != null) main.innerHTML = "You've been on this page for " + num + ' seconds!';
  else console.warn('Could not find main element.');
}
