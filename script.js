// Corações flutuantes
const heartsContainer = document.getElementById('hearts');

function criarCoracao() {
  const heart = document.createElement('span');
  heart.className = 'heart';
  heart.textContent = ['❤', '💗', '💕', '💖', '🌹', '💘'][Math.floor(Math.random() * 6)];
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (14 + Math.random() * 26) + 'px';
  heart.style.animationDuration = (6 + Math.random() * 7) + 's';
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 15000);
}

setInterval(criarCoracao, 500);

// Renderizar todas as frases
const grid = document.getElementById('frasesGrid');

function renderizarFrases() {
  grid.innerHTML = '';
  FRASES.forEach((frase, i) => {
    const card = document.createElement('div');
    card.className = 'card-frase';
    card.innerHTML = '<span class="numero">Frase ' + (i + 1) + '</span><p>' + frase + '</p>';
    grid.appendChild(card);
  });
}

// Frase do momento
let fraseAtual = -1;

function novaFrase(inicial) {
  let idx;
  do {
    idx = Math.floor(Math.random() * FRASES.length);
  } while (idx === fraseAtual && FRASES.length > 1);

  fraseAtual = idx;

  const card = document.getElementById('fraseCard');
  const texto = document.getElementById('fraseTexto');

  card.classList.remove('show');
  setTimeout(() => {
    texto.textContent = FRASES[idx];
    card.classList.add('show');
  }, 300);
}

document.addEventListener('DOMContentLoaded', () => {
  renderizarFrases();
  novaFrase(true);
});