function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const bars = document.getElementsByClassName('bar');
export async function selection(arr){
    let sortedArr= [...arr];
    //[34,23,4,23,54,6]
    for(let i=0;i<sortedArr.length;i++){
        let min=i;
        bars[i].classList.add('active');
        await sleep(300);
        for(let j=i+1;j<sortedArr.length;j++)
        {
          if(sortedArr[j]<sortedArr[min])
          {
            min=j;
          }
        }
        if(min!=i)
        {
          bars[min].classList.add('selected');
          await sleep(300);
          [sortedArr[i],sortedArr[min]]=[sortedArr[min],sortedArr[i]];
          const temp = bars[i].style.height;
          bars[i].style.height = bars[min].style.height;
          bars[min].style.height = temp;
          bars[min].classList.remove('selected');
        }
      bars[i].classList.remove('active');
    }
    return sortedArr;
}