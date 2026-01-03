
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const container = document.getElementById('graph-container');
const bars = document.getElementsByClassName('bar');


async function bubbleSort(arr) {
  let sortedArr = [...arr];
  
  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = 0; j < sortedArr.length - i - 1; j++) {
      
      
      bars[j].classList.add('active');
      //bars[j + 1].classList.add('active');
      await sleep(300);

      if (sortedArr[j] > sortedArr[j + 1]) {
        bars[j+1].classList.add('selected');
        await sleep(300);
        [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];

  
        let tempHeight = bars[j].style.height;
        bars[j].style.height = bars[j+1].style.height;
        bars[j+1].style.height = tempHeight;
      }

      
      bars[j].classList.remove('active');
      bars[j + 1].classList.remove('selected');
    }
    console.log(sortedArr);
    
  }
  return sortedArr;
}

export { bubbleSort };