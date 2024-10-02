function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    document.getElementById("quote-text").textContent = `"${randomQuote.text}"`;
    document.getElementById("quote-author").textContent = `- ${randomQuote.author}`;
}

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        generateQuote();
    }
});

document.getElementById("new-quote").addEventListener("click", generateQuote);

