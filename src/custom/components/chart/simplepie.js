import React from "react";
import ReactApexChart from 'react-apexcharts';

const ChartData = {
  series: [44, 55, 13, 43, 22],
  options: {
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['구동체인', '핸드레일', '인버터', '연결체인', '브레이크'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: '100%'
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  }
}

export function SimplePie() {
  return (
    <>
      <div>
        <ReactApexChart 
          options={ChartData.options}
          series={ChartData.series}
          type="pie" 
        />
      </div>
    </>
  )
}

export default SimplePie;
