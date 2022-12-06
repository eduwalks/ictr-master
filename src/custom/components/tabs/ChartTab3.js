import React from "react";
import ReactApexChart from 'react-apexcharts';
import Vbelt from 'custom/img/vbelt_ico.svg'

const ChartData1 = {
  series: [76],
  options: {
    chart: {
      type: 'radialBar',
      offsetY: -20,
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#e7e7e7",
          strokeWidth: '97%',
          margin: 5, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            color: '#999',
            opacity: 1,
            blur: 2
          }
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            offsetY: -2,
            fontSize: '22px'
          }
        }
      }
    },
    grid: {
      padding: {
        top: -10
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91]
      },
    },
    labels: ['Average Results']
  }
}

const ChartData2 = {
  series: [10],
  options: {
    chart: {
      type: 'radialBar',
      offsetY: -20,
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#e7e7e7",
          strokeWidth: '97%',
          margin: 5, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            color: '#999',
            opacity: 1,
            blur: 2
          }
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            offsetY: -2,
            fontSize: '22px'
          }
        }
      }
    },
    grid: {
      padding: {
        top: -10
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91]
      },
    },
    labels: ['Average Results']
  }
}

export function ChartTab3() {
  return (
    <>
      <div className="chart_tab_box" style={{height:"100%"}}>
        <h5 className="chart_icon"><img src={Vbelt} alt="V 밸트" /><span>V 밸트</span></h5>
        <div className="charttab_box">
          <div>
            <h7>동력전달율</h7><br /><br />
            <ReactApexChart 
              options={ChartData1.options}
              series={ChartData1.series}
              type="radialBar" 
            />
            <h6>정상입니다</h6>
          </div>

          <div>
            <h7>신율</h7><br /><br />
            <ReactApexChart 
              options={ChartData2.options}
              series={ChartData2.series}
              type="radialBar" 
            />
            <h6>정상입니다</h6>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChartTab3;