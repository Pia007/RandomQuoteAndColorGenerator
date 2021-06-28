document.addEventListener("DOMContentLoaded", () => {
  
    // DOM 
    const button = document.getElementById("new-quote");
    const quote = document.querySelector("blockquote span");
    const citation = document.querySelector("blockquote p");
    
    // Color Change when page loads
    function colorChange() {
      let newColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = newColor;
        document.getElementById("text").style.color = newColor;
        document.getElementById("author").style.color = newColor;
        document.getElementById("tweet-quote").style.backgroundColor = newColor;
        document.getElementById("twitter").style.color = "white";
        button.style.backgroundColor = newColor;
        button.style.color = "white";
    }
    setTimeout(colorChange, .1);
  
    
    async function nextRandomQuote() {
      // Random quote
      const reply = await fetch("https://api.quotable.io/random");
      const info = await reply.json();
      if (reply.ok) {
        // Update quote and author
        quote.textContent = info.content;
        citation.textContent = info.author;
      } else {
        quote.textContent = "Error! No Information Received!";
        console.log(info);
      }
    };
    
    // Event listener
    button.addEventListener("click", nextRandomQuote);
  
  
    // Populate a new quote when the page loads
    nextRandomQuote();   
});
  
// colorChange is called when button is clicked
function colorChange() {
    let newColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      document.body.style.backgroundColor = newColor;
      document.getElementById("text").style.color = newColor;
      document.getElementById("author").style.color = newColor;
      document.getElementById("tweet-quote").style.backgroundColor = newColor;
      document.getElementById("tweet-quote").style.color = "white";
      document.getElementById("new-quote").style.backgroundColor = newColor;
      document.getElementById("new-quote").style.color = "white";
      document.getElementById("twitter").style.color = "white";
};


