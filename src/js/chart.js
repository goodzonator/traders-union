const ctx = document.getElementById('myChart').getContext('2d');

function createChart(ctx) {
    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['12/23', '01/24', '02/24', '03/24', '04/24', '05/24', '06/24', '07/24', '08/24', '09/24', '10/24', '11/24', '12/24'],
            datasets: [{
                label: 'HISTORICAL',
                data: [20000, 23000, 25000, 27000, 30000, 35000, 50000, 60000, 70000],
                borderColor: '#1873EB',
                backgroundColor: 'rgba(24, 115, 235, 0.25)',
                fill: true,
                tension: 0,
                pointStyle: 'circle',
                pointBackgroundColor: '#1873EB',
                pointBorderColor: '#1873EB',
                pointRadius: 3,
                pointHoverRadius: 6,
                pointHoverBorderWidth: 2
            }, {
                label: 'FORECASTED',
                data: [null, null, null, null, null, null, 60000, 62000, 64000, 63000, 64000, 65000, 66000],
                borderColor: '#9C4FFF',
                backgroundColor: 'rgba(196, 106, 255, 0.2)',
                borderDash: [5, 5],
                tension: 0,
                pointStyle: 'circle',
                pointBackgroundColor: '#9C4FFF',
                pointBorderColor: '#9C4FFF',
                pointRadius: 3,
                pointHoverRadius: 6,
                pointHoverBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    display: true,
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: 'rgba(0, 0, 0, 0.70)',
                        font: {
                            family: '"Open Sans", sans-serif',
                            size: 12,
                            lineHeight: 1.33,
                            weight: '400'
                        },
                        autoSkip: true,
                        maxTicksLimit: 4,
                    },
                    border: {
                        display: false
                    }
                },
                y: {
                    display: true,
                    grid: {
                        display: true
                    },
                    ticks: {
                        color: 'rgba(0, 0, 0, 0.70)',
                        font: {
                            family: '"Open Sans", sans-serif',
                            size: 12,
                            lineHeight: 1.33,
                            weight: '400'
                        },
                        stepSize: 10000,
                        callback: function(value) {
                            return value !== 0 ? value : '';
                        }
                    },
                    border: {
                        display: false
                    },
                    suggestedMin: 20000,
                    suggestedMax: 80000
                }
            }
        }
    });
}

// Инициализация графика
let myChartInstance = createChart(ctx);

// Адаптация графика для мобильных устройств
function adjustChartForMobile(chart) {
    const mobileView = window.matchMedia("(max-width: 768px)");

    function updateConfig() {
        if (mobileView.matches) {
            // Настройки для мобильного вида
            chart.options.scales.x.ticks.maxTicksLimit = 4;
            chart.options.scales.x.ticks.autoSkip = true;
            chart.data.datasets.forEach(dataset => {
                dataset.pointRadius = 2;
                dataset.pointHoverRadius = 4;
            });
            // Установка высоты для мобильных устройств
            ctx.canvas.style.height = '318px';
            chart.update();
        } else {
            // Настройки для десктопа
            chart.options.scales.x.ticks.maxTicksLimit = 12;
            chart.options.scales.x.ticks.autoSkip = false;
            chart.data.datasets.forEach(dataset => {
                dataset.pointRadius = 3;
                dataset.pointHoverRadius = 6;
            });
            // Установка высоты для десктопа
            ctx.canvas.style.height = '318px';
            chart.update();
        }
    }

    mobileView.addEventListener('change', updateConfig);
    updateConfig(); // Инициализация настроек при загрузке страницы
}

adjustChartForMobile(myChartInstance);

// Создание пользовательской легенды
function createCustomLegend(chart) {
    const legendContainer = document.getElementById('custom-legend');
    legendContainer.innerHTML = '';

    chart.data.datasets.forEach((dataset, index) => {
        const legendItem = document.createElement('div');
        legendItem.className = 'chart-legend-item';

        const legendColorBox = document.createElement('div');
        legendColorBox.className = 'chart-legend-box';
        legendColorBox.style.backgroundColor = dataset.label === 'HISTORICAL' ? '#1873EB' : '#9C4FFF';

        const legendText = document.createElement('span');
        legendText.className = 'chart-legend-text';
        legendText.innerText = dataset.label;

        legendItem.appendChild(legendColorBox);
        legendItem.appendChild(legendText);
        legendContainer.appendChild(legendItem);
    });
}

createCustomLegend(myChartInstance);
