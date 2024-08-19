var hr = document.getElementById('hr');
var mn = document.getElementById('mn');
var sc = document.getElementById('sc');

setInterval(function () {
    var day = new Date();
    var hh = day.getHours() * 30;
    var mm = day.getMinutes() * 6;
    var ss = day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    // digital clock 
    var hour = document.getElementById('hour');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');
    var ampm = document.getElementById('ampm');

    var h = day.getHours();
    var m = day.getMinutes();
    var s = day.getSeconds();

    if(h>=12){
        ampm.innerHTML = "PM";
    }else{
        ampm.innerHTML = "AM";
    }

// convert 24hr to 12hr
    if (h > 12) {
        h = h - 12;
    }

    // add zero before single digit
    if (h < 10) {
        h = "0" + h;
    } else {
        h = h;
    }
    if (m < 10) {
        m = "0" + m;
    } else {
        m = m;
    }
    if (s < 10) {
        s = "0" + s;
    } else {
        s = s;
    }

    hour.innerHTML = h
    minutes.innerHTML = m
    seconds.innerHTML = s
})
