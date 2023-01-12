import { Row, Col } from 'react-bootstrap';
import MainCard from 'components/MainCard';
import Chip from '@mui/material/Chip';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import MainChart from 'custom/components/chart/mainchart';
import MainTable22 from "custom/components/table/maintable22";
import MainTable333 from "custom/components/table/maintable333";
import Navigationbar from 'custom/components/navigationbar';
// import Alert2 from "custom/components/pop/alert2";
import MfvTable from "custom/components/table/mfvtable";

function SubwayStation () {
  // function createData1(station, sum, state1, state2, state3, state4, state5, state6) {
  //   return { station, sum, state1, state2, state3, state4, state5, state6 };
  // }

  // const rows1 = [
  //   createData1('합계', '0', '0', '0', '0', '0', '0', '0'),
  //   createData1('박촌', '0', '0', '0', '0', '0', '0', '0'),
  //   createData1('임학', '0', '0', '0', '0', '0', '0', '0'),
  //   createData1('계산', '0', '0', '0', '0', '0', '0', '0'),
  //   createData1('경인교대', '0', '0', '0', '0', '0', '0', '0'),
  //   createData1('작전', '0', '0', '0', '0', '0', '0', '0'),
  //   createData1('갈산', '0', '0', '0', '0', '0', '0', '0'),
  //   createData1('부평구청', '0', '0', '0', '0', '0', '0', '0'),
  //   createData1('부평시장', '0', '0', '0', '0', '0', '0', '0')
  // ];

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
                  <th className="train1">계산</th>
                  <th className="train1">예술회관</th>
                  <th className="train1">동막</th>
                  <th className="train2">검암</th>
                  <th className="train2">가재울</th>
                  <th className="train2">시청</th>
                </thead>
                <tbody>
                  <tr className="bad">
                    <th>불량</th>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr className="error">
                    <th>결함</th>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr className="insuff">
                    <th>미흡</th>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr className="communi">
                    <th>통신</th>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr className="normal">
                    <th>보통</th>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr className="fine">
                    <th>양호</th>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr className="sum">
                    <th>합계</th>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
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

            <MainCard content={false} style={{marginTop:"10px"}}>
              <MainTable333 />
            </MainCard>

            {/* <div className="btn_right"><Alert2 /></div> */}
          </Col>

          <Col sm={8} className="sub_right">
            <MainCard className="mobile_top" content={false}>
              {/* <Chip label="계산 &gt; (124)인천시청" color="primary" /> */}
              {/* table */}
              <MfvTable />
            </MainCard>

            <MainCard className="center_table" content={false}>
              <MainTable22 />
              {/* table */}
            </MainCard>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default SubwayStation;