// Toggles Open on custom select wrapper
document
  .querySelector('.custom-select-wrapper')
  .addEventListener('click', () => {
    document.querySelector('.custom-select').classList.toggle('open');
  });

for (const option of document.querySelectorAll('.custom-option')) {
  option.addEventListener('click', () => {
    console.log(this);
    if (!document.classList.contains('selected')) {
      document.parentNode
        .querySelector('.custom-option.selected')
        .classList.remove('selected');
      document.classList.add('selected');
      document
        .closest('.custom-select')
        .querySelector('.custom-select__trigger span').textContent =
        document.textContent;
    }
  });
}

// Allows closing of dropdown list if user clicks outside of dropdown
window.addEventListener('click', (e) => {
  const select = document.querySelector('.custom-select');
  if (!select.contains(e.target)) {
    select.classList.remove('open');
  }
});
