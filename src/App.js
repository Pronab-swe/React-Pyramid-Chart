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
      stacked:false,
      ticks: {
        beginAtZero: true,
        callback: (v) => {
          return v < 0 ? -v : v;
        },
      }
    },
    y:{
      beginAtZero:true,
      stacked:true
    }
  },
  // tooltips: {
  //   // intersect: false,
  //   callbacks: {
  //     labels: (c) => {
  //       const value = Number(c.value);
  //       const positiveOnly = value < 0 ? -value : value;
  //       let retStr = "";
  //       if (c.datasetIndex === 0) {
  //         retStr += `Male: ${positiveOnly.toString()}`;
  //       } else {
  //         retStr += `Female: ${positiveOnly.toString()}`;
  //       }
  //       return retStr;
  //     },
  //   },
  // },
  elements: {
    bar: {
      borderWidth: 2,
      borderRadius:2
    },
  },
  responsive: true,
  plugins: {
    tooltip: {
         callbacks: {
      label: (c) => {
        const value = Number(c.raw);
        const positiveOnly = value < 0 ? -value : value;
        let label = "";
          label += `Total: ${positiveOnly.toString()}`;
        return label;
      },
    },
    },
    legend: {
      position: 'none',
    },
    title: {
      display: true,
      text: 'MOPA Horizontal Bar Chart',
    },
  },
};

const labels = ['Minister', 'SECRETARY', 'SENIOR SECRETARY', 'SECY', 'PRINCIPAL SECY', 'PRINCIPAL SECY', 'CABINET SECY'];
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
      backgroundColor: 'red',
    },
    {
      label: 'Dataset 2',
      data:  dataSet1Form,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor:  'red',
    },
  ],
};

function App() {
  return (
      <Bar options={options} data={data} />
  );
}

export default App;