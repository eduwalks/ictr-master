import React from "react";
import ReactApexChart from 'react-apexcharts';
import Fan from 'custom/img/fan_ico.svg'

const ChartData = {
  series: [20, 54, 37, 91],
  options: {
    chart: {
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "10%"
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

export function ChartTab2() {
  return (
    <>
      <div className="chart_tab_box">
        <h5 className="chart_icon"><img src={Fan} alt="송풍기" /><span>송풍기</span></h5>
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

export default ChartTab2;