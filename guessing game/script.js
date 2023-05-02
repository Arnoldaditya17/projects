let secretnumber = Math.floor(Math.random() * 100) + 1;
let guessinput = document.getElementById("guess");
let message = document.getElementById("message");
function checkguess() {
    let guess = parseInt(guessinput.value);
    if (guess === secretnumber)
    {
        message.innerHTML = "congratulations! you guessed the secret number!";
        message.style.color = "green";
    }
    else if (guess < secretnumber)
    {
        message.innerHTML = "too low,try again.";
        message.style.color = "red";
    }
    else if (guess > secretnumber)
    {
        message.innerHTML = "too high,try again.";
        
        }
}
function resetgame()
{
    secretnumber = Math.floor(Math.random() * 100) + 1;
    guessinput.value = "";
    message.innerHTML = "";
}