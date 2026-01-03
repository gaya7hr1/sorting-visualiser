
export function renderChart(dataArray) {
    const container = document.getElementById('graph-container');
    container.innerHTML = '';

    
    const maxValue = Math.max(...dataArray);

    dataArray.forEach(value => {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        
        const heightPercentage = (value / maxValue) * 100;
        bar.style.height = `${heightPercentage}%`;
        
        bar.title = `Value: ${value}`;
        container.appendChild(bar);
    });
}