import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { NavLink } from "react-bootstrap";

// material-ui
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Chip from '@mui/material/Chip';

// project imports
import MainCard from 'components/MainCard';
import InSpection from "../pop/inspection";
import Alert from "../pop/alert";

// table data
function createData1(time, number, part, station, equipname, equipstate, condition) {
  let rowclass;
  if(condition == '불량') {
    rowclass='condition1';
  } else if(condition == '결함') {
    rowclass='condition2';
  } else if(condition == '미흡') {
    rowclass='condition3';
  } else if(condition == '통신') {
    rowclass='condition4';
  } else {
    rowclass=''
  }
  return { time, number, part, station, equipname, equipstate, condition, rowclass };
}

function createData2(time, number, part, station, division, equipname, cont) {
  return { time, number, part, station, division, equipname, cont };
}

function createData3(time, number, part, station, equipname, namecode, division, analysis) {
  return { time, number, part, station, equipname, namecode, division, analysis };
}

const rows1 = [
  createData1('2022-06-02 00:07', '1호선', '예술회관', '부평', '좌대합실공조시-1', '송풍기 V벨트 결함', '불량'),
  createData1('2022-06-02 00:00', '1호선', '예술회관', '부평', '좌대합실공조시-1', '송풍기 V벨트 결함', '불량'),
  createData1('2022-06-02 00:00', '1호선', '예술회관', '부평', '좌대합실공조시-1', '송풍기 V벨트 결함', '결함'),
  createData1('2022-06-02 00:00', '1호선', '예술회관', '부평', '좌대합실공조시-1', '송풍기 V벨트 결함', '결함'),
  createData1('2022-06-02 00:00', '1호선', '예술회관', '부평', '좌대합실공조시-1', '송풍기 V벨트 결함', '미흡'),
  createData1('2022-06-02 00:00', '1호선', '예술회관', '부평', '좌대합실공조시-1', '송풍기 V벨트 결함', '미흡'),
  createData1('2022-06-02 00:00', '1호선', '예술회관', '부평', '좌대합실공조시-1', '송풍기 V벨트 결함', '통신'),
  createData1('2022-06-02 00:00', '1호선', '예술회관', '부평', '좌대합실공조시-1', '송풍기 V벨트 결함', '통신')
];

const rows2 = [
  createData2('2022-06-02 00:07', '1호선', '예술회관', '부평', '결함발생', '좌대합실공조시-1', '직팽식공조기 (SF) 전동기 이상진동'),
  createData2('2022-06-02 00:00', '1호선', '예술회관', '부평', '결함발생', '좌대합실공조시-1', '직팽식공조기 (SF) 전동기 이상진동'),
  createData2('2022-06-02 00:00', '1호선', '예술회관', '부평', '결함발생', '좌대합실공조시-1', '직팽식공조기 (SF) 전동기 이상진동'),
  createData2('2022-06-02 00:00', '1호선', '예술회관', '부평', '결함발생', '좌대합실공조시-1', '직팽식공조기 (SF) 전동기 이상진동'),
  createData2('2022-06-02 00:00', '1호선', '예술회관', '부평', '결함발생', '좌대합실공조시-1', '직팽식공조기 (SF) 전동기 이상진동'),
  createData2('2022-06-02 00:00', '1호선', '예술회관', '부평', '결함발생', '좌대합실공조시-1', '직팽식공조기 (SF) 전동기 이상진동'),
  createData2('2022-06-02 00:00', '1호선', '예술회관', '부평', '결함발생', '좌대합실공조시-1', '직팽식공조기 (SF) 전동기 이상진동'),
  createData2('2022-06-02 00:00', '1호선', '예술회관', '부평', '결함발생', '좌대합실공조시-1', '직팽식공조기 (SF) 전동기 이상진동')
];

const rows3 = [
  createData3('2022-06-02 00:07', '1호선', '예술회관', '부평', '우 직팽식공조기', '', '유지보수(교체)', '고장 및 기능장애'),
  createData3('2022-06-02 00:00', '1호선', '예술회관', '부평', '우 직팽식공조기', '', '유지보수(교체)', '고장 및 기능장애'),
  createData3('2022-06-02 00:00', '1호선', '예술회관', '부평', '우 직팽식공조기', '', '유지보수(교체)', '고장 및 기능장애')
];

// ==============================|| TABLE - BASIC ||============================== //

export default function MainTable1() {

  // const history = useHistory();
  // function click() {
  //     history.push("/equipdetail");
  // }
  
  return (
    <>
      <MainCard content={false}>
        <div className='more'>
          <Chip label="설비 상태목록" color="info" />
          <NavLink as={Link} to="/EquipList" className='more_btn'>더보기 +</NavLink>
        </div>
        {/* table */}
        <TableContainer>
          <Table sx={{ minWidth: 800 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>점검일</TableCell>
                <TableCell align="center">호선</TableCell>
                <TableCell align="center">파트</TableCell>
                <TableCell align="center">역사명</TableCell>
                <TableCell align="center">설비명</TableCell>
                <TableCell align="center">설비상태</TableCell>
                <TableCell align="center">상태</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows1.map((row1) => (
                <TableRow hover key={row1.name}
                  className={row1.rowclass}
                  // component={Link} to="/equipdetail"
                  // onClick={click}
                >
                  <TableCell component="th" scope="row"><Link to="/equipdetail">{row1.time}</Link></TableCell>
                  <TableCell align="center"><Link to="/equipdetail">{row1.number}</Link></TableCell>
                  <TableCell align="center"><Link to="/equipdetail">{row1.part}</Link></TableCell>
                  <TableCell align="center"><Link to="/equipdetail">{row1.station}</Link></TableCell>
                  <TableCell align="center"><Link to="/equipdetail">{row1.equipname}</Link></TableCell>
                  <TableCell align="center"><Link to="/equipdetail">{row1.equipstate}</Link></TableCell>
                  <TableCell align="center"><Link to="/equipdetail">{row1.condition}</Link></TableCell>
                  {/* <TableCell align="center" onClick="event.stopPropagation();"> */}
                  <TableCell align="center">
                    <InSpection />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </MainCard>

      <MainCard content={false}>
        <div className='more'>
          <Chip label="경보 내역" color="error" />
          <NavLink as={Link} to="/alertlist" className='more_btn'>더보기 +</NavLink>
        </div>
        {/* table */}
        <TableContainer>
          <Table sx={{ minWidth: 800 }} aria-label="simple table" className="base_link">
            <TableHead>
              <TableRow>
                <TableCell>점검일</TableCell>
                <TableCell align="center">호선</TableCell>
                <TableCell align="center">파트</TableCell>
                <TableCell align="center">역사명</TableCell>
                <TableCell align="center">설비명</TableCell>
                <TableCell align="center">설비상태</TableCell>
                <TableCell align="center">상태</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows2.map((row2) => (
                <TableRow hover key={row2.name}>
                  <TableCell component="th" scope="row"><Link to="/alertdetail">{row2.time}</Link></TableCell>
                  <TableCell align="center"><Link to="/alertdetail">{row2.number}</Link></TableCell>
                  <TableCell align="center"><Link to="/alertdetail">{row2.part}</Link></TableCell>
                  <TableCell align="center"><Link to="/alertdetail">{row2.station}</Link></TableCell>
                  <TableCell align="center"><Link to="/alertdetail">{row2.division}</Link></TableCell>
                  <TableCell align="center"><Link to="/alertdetail">{row2.equipname}</Link></TableCell>
                  <TableCell align="center"><Link to="/alertdetail">{row2.cont}</Link></TableCell>
                  <TableCell align="center">
                    <Alert />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </MainCard>

      <MainCard content={false}>
        <div className='more'>
          <Chip label="최근유지보수 내역" color="success" />
          <NavLink as={Link} to="/SpotList" className='more_btn'>더보기 +</NavLink>
        </div>
        {/* table */}
        <TableContainer>
          <Table sx={{ minWidth: 800 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>점검일</TableCell>
                <TableCell align="center">호선</TableCell>
                <TableCell align="center">파트</TableCell>
                <TableCell align="center">역사명</TableCell>
                <TableCell align="center">설비명</TableCell>
                <TableCell align="center">품명</TableCell>
                <TableCell align="center">구분</TableCell>
                <TableCell align="center">분석유형</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows3.map((row3) => (
                <TableRow hover key={row3.name}
                component={Link} to="/spotdetail"
                >
                  <TableCell component="th" scope="row">
                    {row3.time}
                  </TableCell>
                  <TableCell align="center">{row3.number}</TableCell>
                  <TableCell align="center">{row3.part}</TableCell>
                  <TableCell align="center">{row3.station}</TableCell>
                  <TableCell align="center">{row3.equipname}</TableCell>
                  <TableCell align="center">{row3.namecode}</TableCell>
                  <TableCell align="center">{row3.division}</TableCell>
                  <TableCell align="center">{row3.analysis}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </MainCard>
    </>
  );
}
