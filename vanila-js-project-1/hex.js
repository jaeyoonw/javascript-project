const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.querySelector('.btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
  document.body.style.backgroundColor = getRandomNumber();
  color.textContent = getRandomNumber();
});

function getRandomNumber() {
  let randomStr = "#";
  for (let i = 0; i < 6; ++i) {
    let randomNum = Math.floor(Math.random() * 16); // 0 ~ 15의 정수
    randomStr += hex[randomNum];
  }
  return randomStr;
 }