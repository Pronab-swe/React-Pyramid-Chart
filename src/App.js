import './App.css';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y',
  scales:{
    x:{
      stacked:true
    },
    y:{
      beginAtZero:true,
      stacked:true
    }
  },
  elements: {
    bar: {
      borderWidth: 2,
      borderRadius:2
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
};

const labels = ['65+', '56-65', '46-55', '36-45', '26-35', '13-25', '0-12'];
const dataSet1=[4,7,12,14,18,21,25]
const dataSet1Form=[]
dataSet1.forEach((item)=>dataSet1Form.push(item*-1))

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [4,7,12,14,18,21,25],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data:  dataSet1Form,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor:  'rgba(255, 99, 132, 0.5)',
    },
  ],
};

function App() {
  return (
      <Bar options={options} data={data} />
  );
}

export default App;
