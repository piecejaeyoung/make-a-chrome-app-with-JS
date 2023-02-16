const quotes = [
    {
        quote: "하면 된다.",
        author: "나",
    },
    {
        quote: "지금이 가장 빠르다.",
        author: "나",
    },
    {
        quote: "불가능은 없다.",
        author: "나",
    },
]

const RANDOM = Math.random() * quotes.length;
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = (quotes[Math.floor(RANDOM)]);// Math.round()=반올림, Math.ceil()=올림, Math.floor()=내림.

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;