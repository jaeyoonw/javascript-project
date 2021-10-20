const btns = document.querySelectorAll('.btn');
const value = document.querySelector('#value');
let count = 0;

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    // console.log(e.currentTarget);
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
      value.style.color = 'red';
    } else if (styles.contains("reset")) {
      count = 0;
      value.style.color = '#222';
    } else if (styles.contains("increase")) {
      count++;
      value.style.color = 'green';
    }
    // 이때 count의 type은 number 이지만 textContent가 값을 string으로 반환해주기 때문에 string이 된다.
    value.textContent = count;
  });
});

