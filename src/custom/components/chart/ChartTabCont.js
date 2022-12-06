import React, { Component } from 'react';
import ChartTab1 from '../tabs/ChartTab1';
import ChartTab2 from '../tabs/ChartTab2';
import ChartTab3 from '../tabs/ChartTab3';

class ChartTabCont extends Component {
  constructor(props) {
    super(props);

    this.state1 = {
      options: {
        chart: {
          height: 220
        },
        xaxis: {
          categories: [2018, 2019, 2020, 2021, 2022]
        },
        markers: {
          size: 5
        }
      },
      series: [
        {
          name: "축",
          data: [30, 40, 45, 50, 49]
        },
        {
          name: "수직",
          data: [100, 20, 70, 15, 40]
        },
        {
          name: "반경",
          data: [50, 10, 20, 70, 91]
        }
      ]
    };

    this.state2 = {
      options: {
        chart: {
          height: 220
        },
        xaxis: {
          categories: [2018, 2019, 2020, 2021, 2022]
        }
      },
      series: [
        {
          name: "수명 지수",
          data: [30, 40, 45, 50, 49]
        },
        {
          name: "예상 수명지수",
          data: [50, 49, 60, 70, 91]
        }
      ]
    };
  }

  render() {
    return (
      <div className="row">
        <div className="chart_tab chart_tab1">
          <ChartTab1 />
          <ChartTab2 />
        </div>
        <div style={{height:"100%"}}><ChartTab3 /></div>
      </div>
    );
  }
}

export default ChartTabCont;