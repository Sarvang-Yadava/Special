// Set the date we're counting down to
let countDownDate = new Date("2024-10-15T10:00:00").getTime(); // October 15, 2024, at 10:00 AM

// Update the count down every 1 second
let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s `;

    // If the countdown is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXAM TIME!";
    }
}, 1000);

// Function to display an inspirational message
function showInspirationalMessage() {
    alert("Believe in yourself! Every challenge is an opportunity. You are capable of amazing things!");
}

// Run functions when the page loads
window.onload = function() {
    showInspirationalMessage();
};
