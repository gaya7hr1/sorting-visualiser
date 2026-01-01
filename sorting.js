import { randomise } from "./randomise.js";
import { bubbleSort } from "./bubbles.js";
import { renderChart } from "./graphGen.js";

// Initial empty state or placeholder
let array = [10, 50, 20, 40, 23,54,45,34,45,65,76];
renderChart(array);

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
    
    // 1. Render the unsorted array first
    renderChart(arr);

    // 2. Sort the array
    const sorted = bubbleSort(arr);
    
    // 3. Render the sorted array (Eventually you'll want to do this inside the loop for animation)
    setTimeout(() => {
        renderChart(sorted);
    }, 500); 
});