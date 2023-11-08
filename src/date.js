export const greeter = (function() {
    const greet = document.getElementById("greeting");
    const name = document.getElementById("icon-name");
    const date = new Date();
    const obj = {
        displayGreet: function() {
            let hour = date.getHours();
            let ask = prompt("Hello, what's your name?")
            switch (true) {
                case (hour > 17 || hour < 5):
                    greet.textContent = `Good Evening ${ask}.`;
                    break;

                case (hour >= 12):
                    greet.textContent = `Good Atfernoon ${ask}.`
                    break;

                case (hour < 11 ):
                    greet.textContent = `Good Morning ${ask}.`
                    break;
            }
            name.textContent = ask;
        },
        init: function() {
            this.displayGreet();
        }
    }
    return obj.init();
})();

export const dateTracker = (function() {
    const month = document.getElementById("month");
    const weekday = document.getElementById("weekday");
    const day = document.getElementById("date");
    const date = new Date();
    const obj = {
        displayDay: function() {
            const dayOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            let matchDay = dayOfTheWeek[date.getDay()];
            weekday.textContent = matchDay
        },
        displayMonth: function() {
            const monthOfTheYear = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            let matchMonth = monthOfTheYear[date.getMonth()];
            month.textContent = matchMonth
        },
        displayDayOfMonth: function() {
            day.textContent = date.getDate()
        },
        init: function() {
            this.displayDay();
            this.displayMonth();
            this.displayDayOfMonth();
        }
    }
    return obj.init();
})();