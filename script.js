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

var createAllErrors = function () {
  var form = $(this),
    errorList = $('ul.errorMessages', form);

  var showAllErrorMessages = function () {
    errorList.empty();

    // Find all invalid fields within the form.
    var invalidFields = form.find(':invalid').each(function (index, node) {
      // Find the field's corresponding label
      var label = $('label[for=' + node.id + '] '),
        // Opera incorrectly does not fill the validationMessage property.
        message = node.validationMessage || 'Invalid value.';

      errorList
        .show()
        .append('<li><span>' + label.html() + '</span> ' + message + '</li>');
    });
  };

  // Support Safari
  form.on('submit', function (event) {
    if (this.checkValidity && !this.checkValidity()) {
      $(this).find(':invalid').first().focus();
      event.preventDefault();
    }
  });

  $('input[type=submit], button:not([type=button])', form).on(
    'click',
    showAllErrorMessages
  );

  $('input', form).on('keypress', function (event) {
    var type = $(this).attr('type');
    if (
      /date|email|month|number|search|tel|text|time|url|week/.test(type) &&
      event.keyCode == 13
    ) {
      showAllErrorMessages();
    }
  });
};

$('form').each(createAllErrors);
