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
        "We know what we are, but know not what we may be."
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
