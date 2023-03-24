import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  LineElement,
  CategoryScale, //x-axis
  LinearScale, //y-axis
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { date, price } from "../Price";

ChartJs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function LineChart() {
  const data = {
    // labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday", ],
    labels: date,
    datasets: [
      {
        label: "Bitcoin Price (USD)",
        // data: [5, 3, 6,9],
        data: price,
        // backgroundColor: '',
        // borderColor: 'black',
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        // pointBorderColor: 'black',
        // fill: true,
        // tension: 0.4
      },
    ],
  };

  const options = {
    responsive: true,
    elements: {
      point: {
        radius: 1,
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options}></Line>
    </div>
  );
}

export default LineChart;
