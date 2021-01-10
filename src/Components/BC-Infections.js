import React from 'react'
import { Line } from '@reactchartjs/react-chart.js'
import returnInfectionData from '..Data.js'

// fn call that gets labels for days
days = []
// fn call that gets
infectionsperDay = []

const data = {
  labels: days,
  datasets: [
    {
      label: '# of Votes',
      data: infectionsperDay,
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
}

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}

const BCInfectionData = () => (
  <>
    <div className='header'>
      <h1 className='title'>BC-Infection Data</h1>
    </div>
    <Line data={data} options={options} />
  </>
)

export default BCInfectionData