//selecting all the elements

const stepper = document.getElementById('stepper');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;

    // stop the incrementing if the click is greater than the elements.length;

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    console.log(currentActive);
});

previous.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
});
