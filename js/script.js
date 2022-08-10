const time = document.querySelector('.time');

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;

    const dayDate = document.querySelector('.date');
    function showDate() {
        const date = new Date();
        const options = {month: 'long', day: 'numeric'};
        const currentDate = date.toLocaleDateString('en-US', options);
        dayDate.textContent = currentDate;
      }
      showDate();

    const greeting = document.querySelector('.greeting');
    const hours = date.getHours();
    function getTimeOfDay() {
        const timeOfDay = ["Night", "Morning", "Afternoon", "Evening"];
        greeting.textContent = `Good ${timeOfDay[(Math.trunc(hours/6))]}, `;
        }
        getTimeOfDay();

    setTimeout(showTime, 1000);
  }
showTime();




