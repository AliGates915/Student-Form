// import React from 'react';
import ChartComponent from './ChartComponent';
import './ChartData.css';

const ChartData = () => {
    // Sample data and options for the chart
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `Value: ${tooltipItem.raw}`;
                    }
                }
            }
        },
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <div className="Chart">
            <h1 className='chart'>Dashboard Chart.js with React</h1>
            <ChartComponent data={data} options={options} />
        </div>
    );
};

export default ChartData;
