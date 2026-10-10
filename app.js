const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const message = document.querySelector('#message');

const moveNoButton = () => {
  const card = document.querySelector('.card');
  const cardRect = card.getBoundingClientRect();
  const buttonRect = noBtn.getBoundingClientRect();
  const maxX = Math.max(0, cardRect.width - buttonRect.width);
  const maxY = Math.max(0, cardRect.height - buttonRect.height);
  const safePadding = 16;

  const x = Math.random() * (maxX - safePadding * 2) + safePadding;
  const y = Math.random() * (maxY - safePadding * 2) + safePadding;

  noBtn.style.position = 'absolute';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
};

noBtn.addEventListener('pointerenter', moveNoButton);
noBtn.addEventListener('pointerdown', moveNoButton);
noBtn.addEventListener('focus', moveNoButton);

yesBtn.addEventListener('click', () => {
  message.hidden = false;
  noBtn.hidden = true;
  yesBtn.textContent = 'Yay!';
});

window.addEventListener('resize', () => {
  noBtn.style.position = 'absolute';
  moveNoButton();
});
