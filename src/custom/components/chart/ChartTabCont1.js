import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import MainCard from 'components/MainCard';
import Chip from '@mui/material/Chip';
import ChartTab1 from '../tabs/ChartTab1';
import ChartTab2 from '../tabs/ChartTab2';
import ChartTab3 from '../tabs/ChartTab3';

import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';

class ChartTabCont1 extends Component {
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
        <div className="chart_tab">
          <ChartTab1 />
          <div style={{opacity:"30%"}}><ChartTab2 /></div>
          <div style={{opacity:"30%",height:"100%"}}><ChartTab3 /></div>
        </div>

        <MainCard className="center_table" content={false}>
          <TableContainer>
          <Table sx={{ minWidth: 500 }} aria-label="simple table" className="same_width">
              <TableBody>
                <TableRow>
                  <TableCell className="th" align="center">진동센서</TableCell>
                  <TableCell align="center">반경</TableCell>
                  <TableCell className="th1" align="center">0.73 mm/s</TableCell>
                  <TableCell align="center">축</TableCell>
                  <TableCell className="th1" align="center">2.31 mm/s</TableCell>
                  <TableCell align="center">수직</TableCell>
                  <TableCell className="th1" align="center">5.6mm/s</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </MainCard>

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
        </div>
      </div>
    );
  }
}

export default ChartTabCont1;