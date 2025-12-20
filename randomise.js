function randomise(n,min,max) {
    
    if (n > max - min + 1) {
        throw new Error("n is larger than the available range");
    }

    const arr = [];
    for (let i = min; i <= max; i++) {
        arr.push(i);
    }

    // Fisher–Yates shuffle
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    
    return arr.slice(0, n);
}
export { randomise };
//console.log(randomise(7,5,50));
