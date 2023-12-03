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

export const dailyQuote = (function() {
    const quote = document.getElementById("quote");
    const listOfQuotes = [
        "Show them your best self!",
        "The best preparation for tomorrow is doing your best today.",
        "Out of difficulties grow miracles.",
        "Believe you can and you're halfway there.",
        "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        "Change your thoughts and you change your world.",
        "The only journey is the one within.",
        "We know what we are, but know not what we may be.",
        "Life is 10% what happens to you and 90% how you react to it.",
        "I can, therefore I am.",
        "With the new day comes new strength and new thoughts."
    ]
    const obj = {
        randQuotes: function() {
            let list = listOfQuotes[Math.floor(listOfQuotes.length * Math.random())];
            quote.textContent = list;
        },
        init: function() {
            this.randQuotes();
        }
    }
    return obj.init();
})();
