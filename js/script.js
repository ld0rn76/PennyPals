let progress = 0;
const totalProgress = 100; // Total progress percentage
const progressElement = document.getElementById('progress');
const levelElement = document.getElementById('level');

document.getElementById('increaseBtn').addEventListener('click', () => {
    if (progress < totalProgress) {
        progress += 10; // Increase progress by 10%
        updateProgress();
    }
});

function updateProgress() {
    const percentage = (progress / totalProgress) * 100;
    progressElement.style.width = `${percentage}%`;
    levelElement.textContent = Math.floor(progress / 10) + 1; // Update level based on progress
}