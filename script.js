//selecting all the elements

const stepper = document.getElementById('stepper');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

// click button event handler
next.addEventListener('click', () => {
    currentActive++;
    // stop the incrementing if the click is greater than the elements.length;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    updateDom();
});

previous.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
    updateDom();
});

//updating the DOM. taking the circles and lopp to check if are less than the current active in order to put the active class.
function updateDom() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');
    console.log(actives.length, circles.length);
    stepper.style.width =
        ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    // ON/OFF currentActive: if its > 1 or <1 disabled buttons. Else enable
    if (currentActive === 1) {
        previous.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        previous.disabled = false;
        next.disabled = false;
    }
}
