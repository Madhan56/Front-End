const daysContainer = document.getElementById('days');
const monthYear = document.getElementById('month-year');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const eventForm = document.getElementById('event-form');
const eventDate = document.getElementById('event-date');
const eventTitle = document.getElementById('event-title');

let date = new Date();

function getEvents() {
  const events = localStorage.getItem('events');
  return events ? JSON.parse(events) : {};
}

function saveEvent(date, title) {
  const events = getEvents();
  events[date] = title;
  localStorage.setItem('events', JSON.stringify(events));
}

function renderCalendar() {
  daysContainer.innerHTML = '';
  const month = date.getMonth();
  const year = date.getFullYear();
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  const prevLastDate = new Date(year, month, 0).getDate();

  monthYear.innerText = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

  const events = getEvents();

  for (let x = firstDay; x > 0; x--) {
    const day = document.createElement('div');
    day.classList.add('prev-date');
    day.innerText = prevLastDate - x + 1;
    daysContainer.appendChild(day);
  }

  for (let i = 1; i <= lastDate; i++) {
    const day = document.createElement('div');
    day.innerText = i;
    const fullDate = `${year}-${(month + 1).toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`;
    if (events[fullDate]) {
      day.classList.add('event');
      day.title = events[fullDate];
    }
    daysContainer.appendChild(day);
  }
}

prevButton.addEventListener('click', () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

nextButton.addEventListener('click', () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

eventForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const date = eventDate.value;
  const title = eventTitle.value;
  if (date && title) {
    saveEvent(date, title);
    renderCalendar();
    eventForm.reset();
  }
});

renderCalendar();
