document.addEventListener('DOMContentLoaded', function () {
    const progress = document.getElementById('progress');
    const button = document.getElementById('increaseProgress');
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

    if (button) {
        button.addEventListener('click', function () {
            let increment = 10; // Amount to increment on each click

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