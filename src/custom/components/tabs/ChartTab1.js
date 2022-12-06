import React from "react";
import ReactApexChart from 'react-apexcharts';
import Motor from 'custom/img/motor_ico.svg'

const ChartData = {
  series: [20, 54, 37, 91],
  options: {
    chart: {
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "5%"
        },
        dataLabels: {
          total: {
            show: false,
            label: '양호상태'
          }
        }
      }
    },
    labels: ["불량"]
  },
}

export function ChartTab1() {
  return (
    <>
      <div className="chart_tab_box">
        <h5 className="chart_icon"><img src={Motor} alt="전동기" /><span>전동기</span></h5>
        <ReactApexChart 
          options={ChartData.options}
          series={ChartData.series}
          type="radialBar" 
          style={{marginTop:"-10px"}}
        />
        <h6>양호상태</h6>
      </div>
    </>
  )
}

export default ChartTab1;