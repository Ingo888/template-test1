const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

const loader = document.getElementById('loader');

let apiQuotes = [];

// Show loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;

}

// Show new Quote
function newQuote() {
    loading();
    // Pick a random quote from apiQuotes array[]
    const quote = apiQuotes[Math.floor(Math.random()* apiQuotes.length)];
    // Check if Author field is blank and replace it with "Unknown" 
    if (!quote.author) {
        authorText.textContent = 'Ingo :-)';
    } else {
        authorText.textContent = quote.author;
    }
    // Check Quote Length to determine styling
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    // Set Quote, Hide Loader
    quoteText.textContent = quote.text;
    complete();
}

// Get Quotes From API - Site: https://quotes-react.netlify.app/  !
async function getQuotes() {
    loading();
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        // console.log(apiQuotes);  web-inspector !
        newQuote();
        console.log('This is a great Masterpiece made by @ingofy ! That`s awesome, enjoy the Quotes everyday and have a lucky day !')
    } catch (error) {
        console.log(error);
        // Catch Error here
        // recursive function here, infinite loop !
        console.log('Oh no, was there really an ERROR ? OMG, not my fault');
        getQuotes();
    }
}

// Tweet Quotes
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQuotes();



/*
// Get Quotes from local storage, from quotes.js
function newQuote() {
    const quote = localQuotes[Math.floor(Math.random()* localQuotes.length)];
    console.log(quote);
}

newQuote();
*/