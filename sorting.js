import { randomise } from "./randomise.js";
import { bubbleSort } from "./bubbles.js";

const startBtn = document.getElementById('start-btn');
const sizeSlider = document.getElementById('size-slider');
const minInput = document.getElementById('min-input');
const maxInput = document.getElementById('max-input');

const sizeDisplay = document.getElementById('size-value');

sizeSlider.addEventListener('input', () => {
    sizeDisplay.textContent = sizeSlider.value;
});

startBtn.addEventListener('click', () => {
    const n = parseInt(sizeSlider.value);
    const min = parseInt(minInput.value);
    const max = parseInt(maxInput.value);

    if (n > (max - min + 1)) {
        alert("Range too small for unique numbers");
        return;
    }

    const arr = randomise(n, min, max);
    const sorted = bubbleSort(arr);
    
    console.log("Original:", arr);
    console.log("Sorted:", sorted);
});