import { Link } from "react-router-dom";
import { Table, TableHead, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { Row, Col } from 'react-bootstrap';

import Navigationbar from 'custom/components/navigationbar';
import MainCard from 'components/MainCard';
import Chip from '@mui/material/Chip';
import TrainMap from 'custom/components/trainmap';
import MainChart from 'custom/components/chart/mainchart';
import MainTable from 'custom/components/table/maintable';

function Main() {
  return (
    <div className="monitering">
      <Navigationbar />
      <div className="main_container">
        <Row>
          <Col sm={4} className="main_left">
            <div className="map_box">
              <TrainMap />
            </div>
          </Col>
          
          <Col sm={8} className="main_right">
            <div className="cond_status">
              <MainCard content={false}>
                <Chip label="상태 현황" color="primary" />
                <div className="charts_box">
                  <MainChart />
                </div>
              </MainCard>

              <MainCard className="part_status_box" content={false}>
                <Chip label="파트별 상태 현황" color="default" />
                <TableContainer>
                  <Table sx={{ minWidth: 400 }} aria-label="simple table" className="part_status">
                    <TableHead>
                      <TableRow>
                        <TableCell></TableCell>
                        <TableCell className="train1" align="center">계산</TableCell>
                        <TableCell className="train1" align="center">예술회관</TableCell>
                        <TableCell className="train1" align="center">동막</TableCell>
                        <TableCell className="train2" align="center">검암</TableCell>
                        <TableCell className="train2" align="center">가재울</TableCell>
                        <TableCell className="train2" align="center">인천시청</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow  className="bad" component={Link} to="/partstation">
                        <th>불량</th>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                      </TableRow>
                      <TableRow  className="error" component={Link} to="/partstation">
                        <th>결함</th>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                      </TableRow>
                      <TableRow  className="insuff" component={Link} to="/partstation">
                        <th>미흡</th>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                      </TableRow>
                      <TableRow  className="communi" component={Link} to="/partstation">
                        <th>통신</th>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </MainCard>

              <MainCard  content={false} title="">
                <Chip label="구성 현황" color="default" />
                <TableContainer className="table_part">
                  <Table aria-label="simple table">
                    <TableBody>
                      <TableRow>
                        <TableCell>파트</TableCell>
                        <TableCell>6</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>역사</TableCell>
                        <TableCell>6</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>설비(iot)</TableCell>
                        <TableCell>870</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>                          
              </MainCard>
            </div>

            <div className="main_table">
              <MainTable />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Main;
