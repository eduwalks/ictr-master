import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { NavLink } from "react-bootstrap";

// material-ui
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Chip from '@mui/material/Chip';

// project imports
import MainCard from 'components/MainCard';
import Alert from "../pop/alert";
import Alert1 from "../pop/alert1";
import Mro from "../pop/mro";

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

function createData2(time, number, part, station, equipname, alertype, division, cont, check) {
  let rowclass;
  if(check == '경보발생') {
    rowclass='condition1';
  } else if(check == '경보확인') {
    rowclass='condition2';
  } else if(check == '현장점검') {
    rowclass='condition4';
  } else {
    rowclass=''
  }
  return { time, number, part, station, equipname, alertype, division, cont, check, rowclass };
}

function createData3(time, division, number, part, station, sort, equipname, inspector, result) {
  let rowclass;
  if(result == '대기') {
    rowclass='condition1';
  } else if(result == '유지보수') {
    rowclass='condition3';
  } else if(result == '정상') {
    rowclass='condition6';
  } else {
    rowclass=''
  }

  return { time, division, number, part, station, sort, equipname, inspector, result, rowclass };
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
  createData2('2022-06-02 00:07', '1호선', '예술회관', '부평', '좌대합실공조시-1', 'IoT경보', '결함발생', '직팽식공조기 (SF) 전동기 이상진동', '경보발생'),
  createData2('2022-06-02 00:07', '1호선', '예술회관', '부평', '좌대합실공조시-1', 'IoT경보', '결함발생', '직팽식공조기 (SF) 전동기 이상진동', '현장점검'),
  createData2('2022-06-02 00:07', '1호선', '예술회관', '부평', '좌대합실공조시-1', 'IoT경보', '결함발생', '직팽식공조기 (SF) 전동기 이상진동', '경보발생'),
  createData2('2022-06-02 00:07', '1호선', '예술회관', '부평', '좌대합실공조시-1', 'IoT경보', '결함발생', '직팽식공조기 (SF) 전동기 이상진동', '경보확인'),
];

const rows3 = [
  createData3('2022-06-02 00:07', '상시', '1호선', '예술회관', '부평', '공기조화설비', '좌대합실공조시-1', '홍길동', '정상'),
  createData3('2022-06-02 00:07', '일일', '1호선', '예술회관', '부평', '소방설비', '좌대합실공조시-1', '홍길동', '유지보수'),
  createData3('2022-06-02 00:07', '상시', '1호선', '예술회관', '부평', '소방설비', '좌대합실공조시-1', '홍길동', '유지보수'),
  createData3('', '상시', '1호선', '예술회관', '부평', '승강장안전문설비', '좌대합실공조시-1', '', '대기')
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
          <NavLink as={Link} to="/equipList" className='more_btn'>더보기 +</NavLink>
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
                <TableCell align="center">고장신고/점검요청</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows1.map((row1) => (
                <TableRow hover key={row1.name}
                  // component={Link} to="/equipdetail"
                  // onClick={click}
                >
                  <TableCell component="th" scope="row"><Link to="/equipdetail">{row1.time}</Link></TableCell>
                  <TableCell align="center"><Link to="/equipdetail">{row1.number}</Link></TableCell>
                  <TableCell align="center"><Link to="/equipdetail">{row1.part}</Link></TableCell>
                  <TableCell align="center"><Link to="/equipdetail">{row1.station}</Link></TableCell>
                  <TableCell align="center"><Link to="/equipdetail">{row1.equipname}</Link></TableCell>
                  <TableCell align="center"><Link to="/equipdetail">{row1.equipstate}</Link></TableCell>
                  <TableCell align="center" className={row1.rowclass}><Link to="/equipdetail">{row1.condition}</Link></TableCell>
                  {/* <TableCell align="center" onClick="event.stopPropagation();"> */}
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
          <Chip label="경보 내역" color="error" />
          <NavLink as={Link} to="/alertlist" className='more_btn'>더보기 +</NavLink>
        </div>
        {/* table */}
        <TableContainer>
          <Table sx={{ minWidth: 800 }} aria-label="simple table" className="base_link">
            <TableHead>
              <TableRow>
                <TableCell>일시</TableCell>
                <TableCell align="center">호선</TableCell>
                <TableCell align="center">파트</TableCell>
                <TableCell align="center">역사명</TableCell>
                <TableCell align="center">설비명</TableCell>
                <TableCell align="center">경보유형</TableCell>
                <TableCell align="center">경보분류</TableCell>
                <TableCell align="center">내용</TableCell>
                <TableCell align="center">상태</TableCell>
                <TableCell align="center">내용보기</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows2.map((row2) => (
                <TableRow hover key={row2.name}
                >
                  <TableCell component="th" scope="row"><Link to="/alertdetail">{row2.time}</Link></TableCell>
                  <TableCell align="center"><Link to="/alertdetail">{row2.number}</Link></TableCell>
                  <TableCell align="center"><Link to="/alertdetail">{row2.part}</Link></TableCell>
                  <TableCell align="center"><Link to="/alertdetail">{row2.station}</Link></TableCell>
                  <TableCell align="center"><Link to="/alertdetail">{row2.equipname}</Link></TableCell>
                  <TableCell align="center"><Link to="/alertdetail">{row2.alertype}</Link></TableCell>
                  <TableCell align="center"><Link to="/alertdetail">{row2.division}</Link></TableCell>
                  <TableCell align="center"><Link to="/alertdetail">{row2.cont}</Link></TableCell>
                  <TableCell align="center" className={row2.rowclass}><Link to="/alertdetail">{row2.check}</Link></TableCell>
                  <TableCell align="center">
                    <Alert1 />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </MainCard>

      <MainCard content={false}>
        <div className='more'>
          <Chip label="현장(상시)점검 내역" color="success" />
          <NavLink as={Link} to="/SpotList" className='more_btn'>더보기 +</NavLink>
        </div>
        {/* table */}
        <TableContainer>
          <Table sx={{ minWidth: 800 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>일시</TableCell>
                <TableCell align="center">구분</TableCell>
                <TableCell align="center">호선</TableCell>
                <TableCell align="center">파트</TableCell>
                <TableCell align="center">역사명</TableCell>
                <TableCell align="center">설비대분류</TableCell>
                <TableCell align="center">설비명</TableCell>
                <TableCell align="center">점검자</TableCell>
                <TableCell align="center">결과</TableCell>
                <TableCell align="center">내용보기</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows3.map((row3) => (
                <TableRow hover key={row3.name}>
                  <TableCell component="th" scope="row"><Link to="/spotdetail">{row3.time}</Link></TableCell>
                  <TableCell align="center"><Link to="/spotdetail">{row3.division}</Link></TableCell>
                  <TableCell align="center"><Link to="/spotdetail">{row3.number}</Link></TableCell>
                  <TableCell align="center"><Link to="/spotdetail">{row3.part}</Link></TableCell>
                  <TableCell align="center"><Link to="/spotdetail">{row3.station}</Link></TableCell>
                  <TableCell align="center"><Link to="/spotdetail">{row3.sort}</Link></TableCell>
                  <TableCell align="center"><Link to="/spotdetail">{row3.equipname}</Link></TableCell>
                  <TableCell align="center"><Link to="/spotdetail">{row3.inspector}</Link></TableCell>
                  <TableCell align="center" className={row3.rowclass}><Link to="/spotdetail">{row3.result}</Link></TableCell>
                  <TableCell align="center">
                    <Mro />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </MainCard>
    </>
  );
}
