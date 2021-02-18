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

function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);
