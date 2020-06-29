const deadline = '2020-08-20';

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
        seconds
    };
}




console.log(getTimeRemaining(deadline))


function initializeClock(id, endtime) {
    const clock = document.getElementById(id);

    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');


    //console.log(clock);
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

    updateClock(); // run function once at first to avoid delay
    var timeinterval = setInterval(updateClock, 1000);

}

initializeClock("clockdiv", deadline);




/*

function initializeClock(id, endtime) {
    const clock = document.getElementById(id);




    function updateClock() {
        const t = getTimeRemaining(endtime);
        clock.innerHTML = 'days: ' + t.days + '<br>' +
            'hours: ' + t.hours + '<br>' +
            'minutes: ' + t.minutes + '<br>' +
            'seconds: ' + t.seconds;
        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock(); // run function once at first to avoid delay
    var timeinterval = setInterval(updateClock, 1000);

}

initializeClock('clockdiv', deadline);

*/







