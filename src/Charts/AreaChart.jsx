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
  Filler,
} from "chart.js";
import { date, price } from "../Price";

ChartJs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function AreaChart() {
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
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        // pointBorderColor: 'black',
        fill: true,
        // tension: 0.4
      },
    ],
  };

  // const options = {
  //   responsive: true,
  //   elements: {
  //     point: {
  //       radius: 1,
  //     },
  //   },
  //   plugins: {
  //     legend: {
  //       position: "top",
  //     },
  //     title: {
  //       display: true,
  //       text: "Chart.js Area Chart",
  //     },
  //   },
  // };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Area Chart",
      },
    },
    elements: {
      point: {
        radius: 1,
      },
    },

    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    }
  };

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
}

export default AreaChart;
