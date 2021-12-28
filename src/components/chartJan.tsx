import * as React from 'react';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

interface ChartJanProps {}

const ChartJan: React.FC<ChartJanProps> = () => {
	const data = {
		labels: ['HTML & CSS', 'JavaScript', 'React', 'Back-End'],
		datasets: [
			{
				label: 'Skills',
				data: [65, 59, 80, 81],
				backgroundColor: 'rgba(75,192,192,1)',
				borderWidth: 1
			}
		]
	};

	// const myChart = new Chart(ctx, {
	// 	type: 'bar',
	// 	data: {
	// 		labels: ['Red', 'Blue', 'Yellow', 'Green'],
	// 		datasets: [
	// 			{
	// 				label: '# of Votes',
	// 				data: [12, 19, 3, 5],
	// 				backgroundColor: [
	// 					'rgba(255, 99, 132, 0.2)',
	// 					'rgba(54, 162, 235, 0.2)',
	// 					'rgba(153, 102, 255, 0.2)',
	// 					'rgba(255, 159, 64, 0.2)'
	// 				],
	// 				borderColor: [
	// 					'rgba(255, 99, 132, 1)',
	// 					'rgba(54, 162, 235, 1)',
	// 					'rgba(153, 102, 255, 1)',
	// 					'rgba(255, 159, 64, 1)'
	// 				],
	// 				borderWidth: 1
	// 			}
	// 		]
	// 	},
	// 	options: {
	// 		scales: {
	// 			y: {
	// 				beginAtZero: true
	// 			}
	// 		}
	// 	}
	// });

	return (
		<div>
			<Bar
				data={data}
				options={{
					plugins: {
						title: {
							display: true,
							text: 'Cryptocurrency prices'
						},
						legend: {
							display: true,
							position: 'bottom'
						}
					}
				}}
			/>
		</div>
	);
};

export default ChartJan;
