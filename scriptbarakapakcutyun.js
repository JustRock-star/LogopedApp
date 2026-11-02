document.querySelectorAll('.inputaragutyun').forEach(input => {
    input.addEventListener('change', function () {
        const checked = document.querySelector('.inputaragutyun:checked');
        if (!checked) return;

        const value = Number(checked.value);
        if (value === 1) speed = 3000;
        else if (value === 2) speed = 2000;
        else if (value === 3) speed = 1500;

        scheduleNext();
    });
});

let speed = 3000;
const items = [...document.querySelectorAll('.vankdiv1')];
let currentIndex = 0;
let timerId = null;

function showCurrent() {
    items.forEach((item, index) => {
        item.classList.toggle('active', index === currentIndex);
    });
}

function scheduleNext() {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
        currentIndex = (currentIndex + 1) % items.length;
        showCurrent();
        scheduleNext();
    }, speed);
}

if (items.length) {
    showCurrent();
    scheduleNext();
}
