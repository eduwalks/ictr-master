import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import MainCard from 'components/MainCard';
import Chip from '@mui/material/Chip';
import ChartTab1 from '../tabs/ChartTab1';
import ChartTab2 from '../tabs/ChartTab2';
import ChartTab3 from '../tabs/ChartTab3';

class ChartTabCont2 extends Component {
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
          data: [100, 10, 30, 20, 60]
        },
        {
          name: "수직",
          data: [70, 50, 20, 15, 80]
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
          height: 220,
          stacked: true
        },
        xaxis: {
          categories: [2018, 2019, 2020, 2021, 2022]
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        }
      },
      series: [
        {
          name: "수명 지수",
          data: [100, 70, 85, 90, 49]
        },
        {
          name: "예상 수명지수",
          data: [150, 49, 60, 70, 91]
        }
      ]
    };
  }

  render() {
    return (
      <div className="row">
        <div className="chart_tab">
          <div style={{opacity:"30%"}}><ChartTab1 /></div>
          <ChartTab2 />
          <div style={{opacity:"30%",height:"100%"}}><ChartTab3 /></div>
        </div>

        <div className="mixed-chart">
        <MainCard style={{marginTop:"10px"}} content={false}>
            <Chip label="진동량 트렌드 그래프 (전동기)" color="default" />
            <Chart
              options={this.state1.options}
              series={this.state1.series}
              type="line"
              height="250"
            />
          </MainCard>

          <MainCard style={{marginTop:"10px"}} content={false}>
            <Chip label="예상수명" color="default" />
            <Chart
              options={this.state2.options}
              series={this.state2.series}
              type="area"
              height="250"
            />
          </MainCard>
          {/* <MainCard style={{marginTop:"10px"}} content={false}>
            <Chip label="진동량 트렌드 그래프 (송풍기)" color="default" />
            <Chart
              options={this.state1.options}
              series={this.state1.series}
              type="bar"
              height="250"
            />
          </MainCard>

          <MainCard style={{marginTop:"10px"}} content={false}>
            <Chip label="예상수명" color="default" />
            <Chart
              options={this.state2.options}
              series={this.state2.series}
              type="bar"
              height="250"
            />
          </MainCard> */}
        </div>
      </div>
    );
  }
}

export default ChartTabCont2;