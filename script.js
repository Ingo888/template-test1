let apiQuotes = [];

// Get Quotes From API - Site: https://quotes-react.netlify.app/  !
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes[8]);
    } catch (error) {
        // Catch Error here
    }
}

// On Load
getQuotes();