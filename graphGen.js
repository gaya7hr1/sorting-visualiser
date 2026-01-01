// graphgene.js
export function renderChart(dataArray) {
    const container = document.getElementById('graph-container');
    container.innerHTML = '';

    // Calculate max value to scale heights properly
    const maxValue = Math.max(...dataArray);

    dataArray.forEach(value => {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        
        // Calculate height relative to the max value in the array
        const heightPercentage = (value / maxValue) * 100;
        bar.style.height = `${heightPercentage}%`;
        
        bar.title = `Value: ${value}`;
        container.appendChild(bar);
    });
}