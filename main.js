import { randomise } from "./randomise.js";
import { bubbleSort } from "./bubbles.js";
import { renderChart } from "./graphGen.js";
import {insertionSort} from "./insertion.js";

const startBtn = document.getElementById('start-btn');
const sizeSlider = document.getElementById('size-slider');
const minInput = document.getElementById('min-input');
const maxInput = document.getElementById('max-input');
const sizeDisplay = document.getElementById('size-value');
const algo= document.getElementById('algo-select')
const mixBtn = document.getElementById('mix-btn');
sizeSlider.addEventListener('input', () => {
    sizeDisplay.textContent = sizeSlider.value;
});
var arr= [10, 50, 20, 40, 23, 54, 45, 34, 45, 65, 76, 33, 69, 32, 46];
renderChart(arr);
mixBtn.addEventListener('click',() =>{
     const n = parseInt(sizeSlider.value);
    const min = parseInt(minInput.value);
    const max = parseInt(maxInput.value);

    if (n > (max - min + 1)) {
        alert("Range too small for unique numbers");
        return;
    }

    arr = randomise(n, min, max);
    renderChart(arr);
})

startBtn.addEventListener('click', () => {
  
    renderChart(arr);
    console.log(arr);
    if (algo.value=='bubble'){
    setTimeout(() => {
        bubbleSort(arr);
    }, 300); 
    }
    else if(algo.value=='insertion'){
        setTimeout(()=>{
            insertionSort(arr);
        },300);
    }
    else  {
        alert("Please select an algorithm first!");
    }

});