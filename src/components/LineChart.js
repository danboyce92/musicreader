import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const LineChart = ({ data }) => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
