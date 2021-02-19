// https://andrejgajdos.com/custom-select-dropdown/

/**
 * Functions
 */

const openSelectWrapper = () => {
  document
    .querySelector('.custom-select-wrapper')
    .addEventListener('click', () => {
      document.querySelector('.custom-select').classList.toggle('open');
    });
};

const clickSelect = () => {
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
};

const selectEscapeEvent = () =>
  window.addEventListener('click', (e) => {
    const select = document.querySelector('.custom-select');
    if (!select.contains(e.target)) {
      select.classList.remove('open');
    }
  });

const getTimeRemaining = (endtime) => {
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
};

const initializeClock = (id, endtime) => {
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
};

const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);

/**
 * Function calls
 */

openSelectWrapper();
clickSelect();
initializeClock('clockdiv', deadline);
getTimeRemaining();
selectEscapeEvent();
