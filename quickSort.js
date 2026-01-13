const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const bars = document.getElementsByClassName('bar');

export async function quickSort(low, hi, arr) {
    if (low < hi) {
        let p = await partition(low, hi, arr);

        bars[p].classList.add('active');
        await sleep(200);

        await quickSort(low, p - 1, arr);
        await quickSort(p + 1, hi, arr);

        bars[p].classList.remove('active');
    }
}

async function partition(low, hi, array) {
    let pivot = array[hi];
    let i = low - 1;

    for (let j = low; j < hi; j++) {
        bars[j].classList.add('active');
        await sleep(150);

        if (array[j] < pivot) {
            i++;

            
            [array[i], array[j]] = [array[j], array[i]];
            let temp = bars[i].style.height;
            bars[i].style.height = bars[j].style.height;
            bars[j].style.height = temp;
        }

        bars[j].classList.remove('active');
    }

    [array[i + 1], array[hi]] = [array[hi], array[i + 1]];
    let temp = bars[i + 1].style.height;
    bars[i + 1].style.height = bars[hi].style.height;
    bars[hi].style.height = temp;

    return i + 1;
}
