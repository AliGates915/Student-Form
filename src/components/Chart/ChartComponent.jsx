import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import Chart from 'chart.js/auto'; // Import Chart.js

const ChartComponent = ({ data, options }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

        // Create the Chart instance
        const myChart = new Chart(ctx, {
            type: 'bar', // Change this to 'line', 'pie', etc., based on your needs
            data: data,
            options: options
        });

        // Cleanup chart instance on component unmount
        return () => {
            myChart.destroy();
        };
    }, [data, options]);

    return <canvas ref={chartRef} />;
};
ChartComponent.propTypes = {
    data: PropTypes.object.isRequired,
    options: PropTypes.object, // student prop is optional
  };

export default ChartComponent;