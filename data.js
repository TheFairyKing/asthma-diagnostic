document.addEventListener('DOMContentLoaded', function() {
    // Dummy data for demonstration
    var spirometryData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Spirometry Data',
            data: [75, 80, 85, 90, 95],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    };

    var symptomTrendsData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Symptom Trends',
            data: [3, 4, 5, 6, 7],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    };

    // Get the canvas elements
    var spirometryChartCanvas = document.getElementById('spirometryChart');
    var symptomTrendsChartCanvas = document.getElementById('symptomTrendsChart');

    // Create spirometry chart
    var spirometryChart = new Chart(spirometryChartCanvas, {
        type: 'line',
        data: spirometryData,
        options: {
            responsive: true,
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Month'
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Spirometry Value'
                    }
                }]
            }
        }
    });

    // Create symptom trends chart
    var symptomTrendsChart = new Chart(symptomTrendsChartCanvas, {
        type: 'line',
        data: symptomTrendsData,
        options: {
            responsive: true,
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Month'
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Symptom Count'
                    }
                }]
            }
        }
    });
});