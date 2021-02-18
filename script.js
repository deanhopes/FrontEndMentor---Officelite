// https://andrejgajdos.com/custom-select-dropdown/

document
  .querySelector('.custom-select-wrapper')
  .addEventListener('click', () => {
    document.querySelector('.custom-select').classList.toggle('open');
  });

for (const option of document.querySelectorAll('.custom-option')) {
  option.addEventListener('click', function () {
    if (!this.classList.contains('selected')) {
      this.parentNode
        .querySelector('.custom-option.selected')
        .classList.remove('selected');
      this.classList.add('selected');
      this.closest('.custom-select').querySelector(
        '.custom-select__trigger span'
      ).innerHTML = this.innerHTML;
    }
  });
}

window.addEventListener('click', (e) => {
  const select = document.querySelector('.custom-select');
  if (!select.contains(e.target)) {
    select.classList.remove('open');
  }
});
