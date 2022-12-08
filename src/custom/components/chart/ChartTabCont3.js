import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import MainCard from 'components/MainCard';
import Chip from '@mui/material/Chip';
import ChartTab1 from '../tabs/ChartTab1';
import ChartTab2 from '../tabs/ChartTab2';
import ChartTab3 from '../tabs/ChartTab3';

class ChartTabCont3 extends Component {
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
        },
        stroke: {
          width: [5, 7],
          curve: 'straight',
          dashArray: [0, 8]
        },
        colors:['#80b5eb', '#E91E63']
      },
      series: [
        {
          name: "신율",
          data: [100, 10, 30, 20, 60]
        },
        {
          name: "임계치",
          data: [60, 60, 60, 60, 60]
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
        },
        markers: {
          size: 5
        },
        stroke: {
          curve: 'smooth',
        },
        colors:['#80b5eb', '#E91E63']
      },
      series: [
        {
          name: "동력전달율",
          data: [10, 30, 20, 40, 20]
        }
      ]
    };
  }

  render() {
    return (
      <div className="row">
        <div className="chart_tab">
          <div style={{opacity:"30%"}}><ChartTab1 /></div>
          <div style={{opacity:"30%"}}><ChartTab2 /></div>
          <div style={{height:"100%"}}><ChartTab3 /></div>
        </div>

        <div className="mixed-chart">
          <MainCard style={{marginTop:"10px"}} content={false}>
            <Chip label="신율 트렌드 그래프 (V벨트)" color="default" />
            <Chart
              options={this.state1.options}
              series={this.state1.series}
              type="line"
              height="250"
            />
          </MainCard>

          <MainCard style={{marginTop:"10px"}} content={false}>
            <Chip label="동력전달율 트렌드 그래프(전동기)" color="default" />
            <Chart
              options={this.state2.options}
              series={this.state2.series}
              type="line"
              height="250"
            />
          </MainCard>
        </div>
      </div>
    );
  }
}

export default ChartTabCont3;