// Initialize charts
var stepsChart = new Chart(document.getElementById('stepsChart'), {
    type: 'line',
    data: {
        labels: ['2024-06-01', '2024-06-02', '2024-06-03'],
        datasets: [{
            label: 'Steps',
            data: [8000, 7500, 9000],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var caloriesChart = new Chart(document.getElementById('caloriesChart'), {
    type: 'line',
    data: {
        labels: ['2024-06-01', '2024-06-02', '2024-06-03'],
        datasets: [{
            label: 'Calories Burned',
            data: [300, 280, 320],
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var sleepChart = new Chart(document.getElementById('sleepChart'), {
    type: 'line',
    data: {
        labels: ['2024-06-01', '2024-06-02', '2024-06-03'],
        datasets: [{
            label: 'Sleep Hours',
            data: [7, 6.5, 8],
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Add data function
function addData() {
    var date = prompt('Enter date (YYYY-MM-DD):');
    var steps = prompt('Enter steps:');
    var calories = prompt('Enter calories burned:');
    var sleep = prompt('Enter sleep hours:');
    
    stepsChart.data.labels.push(date);
    stepsChart.data.datasets[0].data.push(steps);
    stepsChart.update();
    
    caloriesChart.data.labels.push(date);
    caloriesChart.data.datasets[0].data.push(calories);
    caloriesChart.update();
    
    sleepChart.data.labels.push(date);
    sleepChart.data.datasets[0].data.push(sleep);
    sleepChart.update();
}
