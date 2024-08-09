setInterval(() => {
    let hourDisplay = document.getElementById('hour-display');
    let minuteDisplay = document.getElementById('minute-display');
    let secondDisplay = document.getElementById('second-display');
    let ampmDisplay = document.getElementById('ampm-display');
  
    let hourCircle = document.getElementById('hour-circle');
    let minuteCircle = document.getElementById('minute-circle');
    let secondCircle = document.getElementById('second-circle');
  
    let hourDot = document.querySelector('.hour-dot');
    let minuteDot = document.querySelector('.minute-dot');
    let secondDot = document.querySelector('.second-dot');
  
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ap = h >= 12 ? 'PM' : 'AM';
  
    if (h > 12) {
      h = h - 12;
    }
  
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
  
    hourDisplay.innerHTML = h + ' Hours';
    minuteDisplay.innerHTML = m + ' Minutes';
    secondDisplay.innerHTML = s + ' Seconds';
    ampmDisplay.innerHTML = ap;
  
    hourCircle.style.strokeDashoffset = 440 - (440 * h) / 12;
    minuteCircle.style.strokeDashoffset = 440 - (440 * m) / 60;
    secondCircle.style.strokeDashoffset = 440 - (440 * s) / 60;
  
    hourDot.style.transform = `rotate(${h * 30}deg)`;
    minuteDot.style.transform = `rotate(${m * 6}deg)`;
    secondDot.style.transform = `rotate(${s * 6}deg)`;
}, 1000);
