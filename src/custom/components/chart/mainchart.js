import React from "react";
import ReactApexChart from 'react-apexcharts';

const ChartData1 = {
  series: [35],
  options: {
    chart: {
      type: 'radialBar',
    },
    colors: ["#e6202e"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "52%",
          background: "#fff"
        },
        track: {
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15
          }
        },
        dataLabels: {
          name: {
            offsetY: -5,
            color: "#000",
            fontSize: "15px"
          },
          value: {
            offsetY: 0,
            color: "red",
            fontSize: "18px",
            show: true
          }
        }
      }
    },
    // fill: {
    //   type: "gradient",
    //   gradient: {
    //     shade: "dark",
    //     type: "vertical",
    //     gradientToColors: ["#f6d17a"],
    //     stops: [0, 100]
    //   }
    // },
    // stroke: {
    //   lineCap: "round"
    // },
    labels: ["불량"]
  },
}

const ChartData2 = {
  series: [55],
  options: {
    chart: {
      type: 'radialBar',
    },
    colors: ["#ef710b"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "52%",
          background: "#fff"
        },
        track: {
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15
          }
        },
        dataLabels: {
          name: {
            offsetY: -5,
            color: "#000",
            fontSize: "15px"
          },
          value: {
            offsetY: 0,
            color: "#ef710b",
            fontSize: "18px",
            show: true
          }
        }
      }
    },
    // fill: {
    //   type: "gradient",
    //   gradient: {
    //     shade: "dark",
    //     type: "vertical",
    //     gradientToColors: ["#f6d17a"],
    //     stops: [0, 100]
    //   }
    // },
    // stroke: {
    //   lineCap: "round"
    // },
    labels: ["결함"]
  },
}

const ChartData3 = {
  series: [75],
  options: {
    chart: {
      type: 'radialBar',
    },
    colors: ["#E6C748"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "52%",
          background: "#fff"
        },
        track: {
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15
          }
        },
        dataLabels: {
          name: {
            offsetY: -5,
            color: "#000",
            fontSize: "15px"
          },
          value: {
            offsetY: 0,
            color: "#E6C748",
            fontSize: "18px",
            show: true
          }
        }
      }
    },
    // fill: {
    //   type: "gradient",
    //   gradient: {
    //     shade: "dark",
    //     type: "vertical",
    //     gradientToColors: ["#cadd8a"],
    //     stops: [0, 100]
    //   }
    // },
    // stroke: {
    //   lineCap: "round"
    // },
    labels: ["미흡"]
  },
}

const ChartData4 = {
  series: [90],
  options: {
    chart: {
      type: 'radialBar',
    },
    colors: ["#B2B2B2"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "52%",
          background: "#fff"
        },
        track: {
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15
          }
        },
        dataLabels: {
          name: {
            offsetY: -5,
            color: "#000",
            fontSize: "15px"
          },
          value: {
            offsetY: 0,
            color: "#B2B2B2",
            fontSize: "18px",
            show: true
          }
        }
      }
    },
    // fill: {
    //   type: "gradient",
    //   gradient: {
    //     shade: "dark",
    //     type: "vertical",
    //     gradientToColors: ["#888c90"],
    //     stops: [0, 100]
    //   }
    // },
    // stroke: {
    //   lineCap: "round"
    // },
    labels: ["통신이상"]
  },
}


export function MainChart() {
  return (
    <>
      <div>
        <ReactApexChart 
          options={ChartData1.options}
          series={ChartData1.series}
          type="radialBar" 
        />
      </div>

      <div>
        <ReactApexChart 
          options={ChartData2.options}
          series={ChartData2.series}
          type="radialBar" 
        />
      </div>

      <div>
        <ReactApexChart 
          options={ChartData3.options}
          series={ChartData3.series}
          type="radialBar" 
        />
      </div>

      <div>
        <ReactApexChart 
          options={ChartData4.options}
          series={ChartData4.series}
          type="radialBar" 
        />
      </div>
    </>
  )
}

export default MainChart;
