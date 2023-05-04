const quotetext = document.getElementById("quote");
const quoteauthor = document.getElementById("author");
const newquotebutton = document.getElementById("new-quote");
const tweetquotebutton = document.getElementById("tweet-quote");



const quote = [
    {
        text: "abvabjfvasbfvsdbfvdfbnadvfanbdvfadbnvadbnva",
        author: "abdabafaffd"
    },
    {
        text: "jayndfbnabfffbvabjfvasbfvsdbfvdfbnadvfanbdvfadbnvadbnva",
        author: "abdabafaffd"
    },
    {
        text: "adityaaadbajkfbsfbsdfabvabjfvasbfvsdbfvdfbnadvfanbdvfadbnvadbnva",
        author: "abdabafaffd"
    }

];



function getrandomquote(){
    return quote[Math.floor(Math.random()*quote.length)];
}
function displayQuote(){
    const { text, author } = getrandomquote();
    quotetext.textContent = text;
    quoteauthor.textContent = author;
}
function tweetQuote() {
    const tweettext = '${quotetext.textContent}-${quoteauthor.textContent}';
}
newquotebutton.addEventListener("click",displayQuote);



displayQuote();