const userNotifications = document.getElementsByClassName('notification')
console.log(userNotifications)
for(let notification of userNotifications){
    notification.addEventListener("click", () => {
        notification.style.display = "none"
    })
}

const stockButtons = document.getElementsByClassName('side2');
console.log(stockButtons)
const stockImages = document.querySelectorAll("[id='dropdown']");
console.log(stockImages)
const stockPages = document.getElementsByClassName('stockPage')
console.log(stockPages)
let parity = [0,0,0];
for(let i = 0; i < stockButtons.length; i++){
    stockButtons[i].addEventListener('click', () => { 
        if(parity[i]){
            console.log("click 1");
            stockPages[i].style.display = "none"
            stockImages[i].src = "/img/next.png"
        }
        else{
            console.log("click 2");
            stockPages[i].style.display = "block"
            stockImages[i].src = "/img/undo_dropdown.png"
        }
        parity[i] = (parity[i]+1)%2
    })
}



document.addEventListener('DOMContentLoaded', function () {
    const progress = document.getElementById('progress');
    const videoProgressButton = document.getElementById("video_progress");

    console.log(videoProgressButton)

    const levelText = document.querySelector('.level-number');
    
    let currentWidth = 0; // Example: Initial progress width is 50%
    let currentLevel = 0;  // Initial level

    // Function to update progress bar and level display
    function updateProgress() {
        progress.style.width = currentWidth + '%'; // Reflect the progress bar width
        levelText.textContent = `${currentLevel}`; // Update level text
    }

    // Initial update when page loads to reflect the initial width
    updateProgress();

    if (videoProgressButton) {
        videoProgressButton.addEventListener('click', function () {
            let increment = 50; // Amount to increment on each click

            // Calculate the next width
            let nextWidth = currentWidth + increment;

            // If the next width exceeds 99.9%, the next click will trigger level up
            if (nextWidth > 99.9) {
                currentWidth = 0; // Reset progress
                currentLevel += 1; // Level up
            } else {
                currentWidth = nextWidth;
            }

            // Update the progress bar width and level
            updateProgress();
        });
    }
});