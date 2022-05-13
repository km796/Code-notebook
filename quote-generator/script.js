// Get Quotes from API
const quoteContainer = document.getElementById('quote-generator')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')

let apiQuotes = []


// Show new quote 

function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    // Check if author field is blank and replace it with 'unknown'
    if (!quote.author) {
        authorText.textContent = 'Unknown'
    } else {
        authorText.textContent = quote.author
    }
    // Check quote length to determine style 
    if (quote.text.length > 50) {
        quoteText.classList.add('long-quote')
    } else {
        quoteText.classList.remove('long-quote')
    }

    quoteText.textContent = quote.text
}

async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes'
    try {
        const response = await fetch(apiUrl)
        apiQuotes = await response.json()
        newQuote()
    } catch (error) {

    }
}

// On Load
getQuotes()