import React from 'react';
import { Chart } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  registerables,
} from 'chart.js';

const ChartJan: React.FC = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ...registerables
  );

  const state = {
    labels: ['TypeScript', 'ReactJS', 'Next.js', 'Solidity', 'Back-end'],
    datasets: [
      {
        label: 'My skills',
        data: [95, 85, 80, 40, 50],
        backgroundColor: ['#00ffff', '#00ffff', '#00ffff', '#00ffff'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="h-full laptop:h-5/6 w-full flex items-center justify-center pr-4">
      <Chart
        type="bar"
        data={state}
        options={{
          indexAxis: 'y',
          elements: {
            bar: {
              // borderWidth: 6,
              hoverBackgroundColor: '#6a22f8',
              // borderRadius: 5,
            },
          },
          responsive: true,
          plugins: {
            legend: {
              display: false,
              position: 'right',
              labels: {
                color: '#fff',
                font: {
                  size: 19,
                },
              },
            },
            title: {
              display: false,
              text: 'My skills',
              color: '#fff',
              font: {
                size: 30,
                family: 'JetBrains Mono, monospace',
              },
            },
          },
          scales: {
            yAxes: {
              grid: {
                display: true,
                color: '#212121',
              },
              ticks: {
                color: 'white',
                font: {
                  size: 18,
                  family: 'JetBrains Mono, monospace',
                },
              },
            },
            xAxes: {
              grid: {
                display: true,
                color: '#555',
              },
              ticks: {
                color: 'white',
                font: {
                  size: 18,
                  family: 'JetBrains Mono, monospace',
                },
              },
            },
          },
          // plugins: {
          // 	title: {
          // 		display: true,
          // 		text: 'My skills',
          // 		color: '#fff',
          // 		position: 'top',
          // 		font: {
          // 			weight: 'bold',
          // 			size: 30,
          // 			family: 'JetBrains Mono, monospace',
          // 		},
          // 	},
          // 	legend: {
          // 		display: false,
          // 		position: 'right',
          // 	},
          // },
          // scales: {
          // 	y: {
          // 		beginAtZero: true,
          // 	},
          // },
        }}
      />
    </div>
  );
};

export default ChartJan;
