// https://andrejgajdos.com/custom-select-dropdown/
// Toggles Open on custom select wrapper
// selects document
document
  //selects the custom-select-wrapper class
  .querySelector('.custom-select-wrapper')
  //adds an eventlistener for click onto custom-select-wrapper class
  .addEventListener('click', () => {
    // on click it runs the below function
    document.querySelector('.custom-select').classList.toggle('open');
    // the function selects the custom-select class and toggles open
  });

// for each option of the custom-option class
for (const option of document.querySelectorAll('.custom-option')) {
  // add the click event listener
  option.addEventListener('click', () => {
    // check if document class does NOT contain 'selected'
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
