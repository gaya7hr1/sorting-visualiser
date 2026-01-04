const sleep= (ms)=>new Promise(resolve => setTimeout(resolve, ms));
const bars = document.getElementsByClassName('bar');

export async function insertionSort(arr) {
  let sortedArr = [...arr];

  for (let i = 1; i < sortedArr.length; i++) {
    let key = sortedArr[i];
    let j = i - 1;
    let keyHeight = bars[i].style.height;
    bars[i].classList.add('active');
    await sleep(300);
    while (j >= 0 && sortedArr[j] > key) {
      bars[j].classList.add('selected');
      await sleep(300);
      sortedArr[j + 1] = sortedArr[j]; 
      bars[j + 1].style.height = bars[j].style.height;
      bars[j].classList.remove('selected');
      j--;
    }

    sortedArr[j + 1] = key; 
    bars[j + 1].style.height = keyHeight;
    bars[i].classList.remove('active');
  }

  return sortedArr;
}
