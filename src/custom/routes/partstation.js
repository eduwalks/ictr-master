import { Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Chip from '@mui/material/Chip';
import MainCard from 'components/MainCard';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import MainChart from 'custom/components/chart/mainchart';
import MainTable11 from "custom/components/table/maintable11";
import MainTable22 from "custom/components/table/maintable22";
import MainTable33 from "custom/components/table/maintable33";
import Navigationbar from 'custom/components/navigationbar';
import Alert2 from "custom/components/pop/alert2";

function PartStation () {
  function createData1(station, sum, state1, state2, state3, state4, state5, state6) {
    return { station, sum, state1, state2, state3, state4, state5, state6 };
  }

  const rows1 = [
    createData1('합계', '0', '0', '0', '0', '0', '0', '0'),
    createData1('박촌', '0', '0', '0', '0', '0', '0', '0'),
    createData1('임학', '0', '0', '0', '0', '0', '0', '0'),
    createData1('계산', '0', '0', '0', '0', '0', '0', '0'),
    createData1('경인교대', '0', '0', '0', '0', '0', '0', '0'),
    createData1('작전', '0', '0', '0', '0', '0', '0', '0'),
    createData1('갈산', '0', '0', '0', '0', '0', '0', '0'),
    createData1('부평구청', '0', '0', '0', '0', '0', '0', '0'),
    createData1('부평시장', '0', '0', '0', '0', '0', '0', '0')
  ];

  return (
    <div className="monitering">
      <Navigationbar />
      <div className="sub_container">
        <Row>
          <Col sm={4} className="sub_left">
            <Box component="form" className="fieldset">
              <span className="gt">*</span>
              <FormControl sx={{ m: 1, minWidth: 50 }} style={{marginLeft:"0"}}>
                {/* <InputLabel htmlFor="grouped-select">호선</InputLabel> */}
                <Select defaultValue={2} id="grouped-select" className="sub_container_ce_in">
                  {/* <MenuItem value="">None</MenuItem> */}
                  <MenuItem value={1}>1호선</MenuItem>
                  <MenuItem value={2}>2호선</MenuItem>
                </Select>
              </FormControl>
              <span className="gt">&gt;</span>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                {/* <InputLabel htmlFor="grouped-select">파트</InputLabel> */}
                <Select defaultValue={6} id="grouped-select">
                  <MenuItem value={1}>계산</MenuItem>
                  <MenuItem value={2}>예술회관</MenuItem>
                  <MenuItem value={3}>동막</MenuItem>
                  <MenuItem value={4}>검암</MenuItem>
                  <MenuItem value={5}>가재울</MenuItem>
                  <MenuItem value={6}>인천시청</MenuItem>
                </Select>
              </FormControl>
              {/* <Button variant="contained" style={{marginTop:"9px",padding:"8px 15px"}}>
                <span className="material-symbols-outlined">search</span>이동
              </Button> */}
            </Box>

            {/* <MainCard content={false}>
              <table className="part_status">
                <thead>
                  <th></th>
                  <th className="train1"><Link to="/subwaystation">계산</Link></th>
                  <th className="train1"><Link to="/subwaystation">예술회관</Link></th>
                  <th className="train1"><Link to="/subwaystation">동막</Link></th>
                  <th className="train2"><Link to="/subwaystation">검암</Link></th>
                  <th className="train2"><Link to="/subwaystation">가재울</Link></th>
                  <th className="train2"><Link to="/subwaystation">시청</Link></th>
                </thead>
                <tbody>
                  <tr className="bad">
                    <th><Link to="/subwaystation">불량</Link></th>
                    <td><Link to="/subwaystation">0</Link></td>
                    <td><Link to="/subwaystation">0</Link></td>
                    <td><Link to="/subwaystation">0</Link></td>
                    <td><Link to="/subwaystation">0</Link></td>
                    <td><Link to="/subwaystation">0</Link></td>
                    <td><Link to="/subwaystation">0</Link></td>
                  </tr>
                  <tr className="error">
                    <th><Link to="/subwaystation">결함</Link></th>
                    <td><Link to="/subwaystation">0</Link></td>
                    <td><Link to="/subwaystation">0</Link></td>
                    <td><Link to="/subwaystation">0</Link></td>
                    <td><Link to="/subwaystation">0</Link></td>
                    <td><Link to="/subwaystation">0</Link></td>
                    <td><Link to="/subwaystation">0</Link></td>
                  </tr>
                  <tr className="insuff">
                    <th><Link to="/subwaystation">미흡</Link></th>
                    <td><Link to="/subwaystation">0</Link></td>
                    <td><Link to="/subwaystation">0</Link></td>
                    <td><Link to="/subwaystation">0</Link></td>
                    <td><Link to="/subwaystation">0</Link></td>
                    <td><Link to="/subwaystation">0</Link></td>
                    <td><Link to="/subwaystation">0</Link></td>
                  </tr>
                  <tr className="communi">
                    <th><Link to="/subwaystation">통신</Link></th>
                    <td><Link to="/subwaystation">0</Link></td>
                    <td><Link to="/subwaystation">0</Link></td>
                    <td><Link to="/subwaystation">0</Link></td>
                    <td><Link to="/subwaystation">0</Link></td>
                    <td><Link to="/subwaystation">0</Link></td>
                    <td><Link to="/subwaystation">0</Link></td>
                  </tr>
                  <tr className="normal">
                    <th><Link to="/subwaystation">보통</Link></th>
                    <td><Link to="/subwaystation">0</Link></td>
                    <td><Link to="/subwaystation">0</Link></td>
                    <td><Link to="/subwaystation">0</Link></td>
                    <td><Link to="/subwaystation">0</Link></td>
                    <td><Link to="/subwaystation">0</Link></td>
                    <td><Link to="/subwaystation">0</Link></td>
                  </tr>
                  <tr className="fine">
                    <th><Link to="/subwaystation">양호</Link></th>
                    <td><Link to="/subwaystation">0</Link></td>
                    <td><Link to="/subwaystation">0</Link></td>
                    <td><Link to="/subwaystation">0</Link></td>
                    <td><Link to="/subwaystation">0</Link></td>
                    <td><Link to="/subwaystation">0</Link></td>
                    <td><Link to="/subwaystation">0</Link></td>
                  </tr>
                  <tr className="sum">
                    <th><Link to="/subwaystation">합계</Link></th>
                    <td><Link to="/subwaystation">0</Link></td>
                    <td><Link to="/subwaystation">0</Link></td>
                    <td><Link to="/subwaystation">0</Link></td>
                    <td><Link to="/subwaystation">0</Link></td>
                    <td><Link to="/subwaystation">0</Link></td>
                    <td><Link to="/subwaystation">0</Link></td>
                  </tr>
                </tbody>
              </table>
            </MainCard> */}

            <MainCard content={false}>
              <Chip label="상태 현황" color="primary" />
              <div className="charts_box">
                <MainChart />
              </div>
            </MainCard>

            <MainCard style={{marginTop:"10px"}} content={false} /* title="파트별 상태 현황" */>
              {/* table */}
              <TableContainer>
                <Table className="same_cell list_table part_status part_station" sx={{ minWidth: 500 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">역사</TableCell>
                      <TableCell align="center">합계</TableCell>
                      <TableCell className="fine" align="center">양호</TableCell>
                      <TableCell className="normal" align="center">보통</TableCell>
                      <TableCell className="insuff" align="center">미흡</TableCell>
                      <TableCell className="bad" align="center">불량</TableCell>
                      <TableCell className="error" align="center">결함</TableCell>
                      <TableCell className="communi" align="center">통신이상</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows1.map((row1) => (
                      <TableRow hover key={row1.name}>
                        <TableCell className="train1" component="th" scope="row"><Link to="/subwaystation">{row1.station}</Link></TableCell>
                        <TableCell className="sum" align="center"><Link to="/subwaystation">{row1.sum}</Link></TableCell>
                        <TableCell className="fine" align="center"><Link to="/subwaystation">{row1.state1}</Link></TableCell>
                        <TableCell className="normal" align="center"><Link to="/subwaystation">{row1.state2}</Link></TableCell>
                        <TableCell className="insuff" align="center"><Link to="/subwaystation">{row1.state3}</Link></TableCell>
                        <TableCell className="bad" align="center"><Link to="/subwaystation">{row1.state4}</Link></TableCell>
                        <TableCell className="error" align="center"><Link to="/subwaystation">{row1.state5}</Link></TableCell>
                        <TableCell className="communi" align="center"><Link to="/subwaystation">{row1.state6}</Link></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </MainCard>

            <div className="btn_right"><Alert2 /></div>
          </Col>

          <Col sm={8} className="sub_right">
            <MainCard className="mobile_top" content={false}>
              {/* table */}
              <MainTable11></MainTable11>
            </MainCard>

            <MainCard className="center_table" content={false}>
              <MainTable22 />
              {/* table */}
            </MainCard>
            

            <MainCard content={false}>
              <MainTable33 />
            </MainCard>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default PartStation;