import { Link } from 'react-router-dom';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox } from '@mui/material';

import Navigationbar from 'custom/components/navigationbar';
import Paging from 'custom/components/table/paging';
import DialogSelect from 'custom/components/search/equipsearch';

import Alert1 from 'custom/components/pop/alert1';

function createData(condition, date, number, part, station, equipnum, equipcate, equipname, locate, equipcompo, grade, gate, flaw) {
  let rowclass1;
  if(condition == '정지중') {
    rowclass1='condition1';
  } else if(condition == '운용중') {
    rowclass1='condition6';
  } else {
    rowclass1=''
  }

  let rowclass2;
  if(flaw == '불량') {
    rowclass2='condition1';
  } else if(flaw == '결함') {
    rowclass2='condition2';
  } else if(flaw == '미흡') {
    rowclass2='condition3';
  } else if(flaw == '통신') {
    rowclass2='condition4';
  } else if(flaw == '양호') {
    rowclass2='condition5';
  } else if(flaw == '보통') {
    rowclass2='condition6';
  } else {
    rowclass2=''
  }

  return { condition, date, number, part, station, equipnum, equipcate, equipname, locate, equipcompo, grade, gate, flaw, rowclass1, rowclass2 };
}

const rows = [
  createData('운용중','2022-10-13 07:59','1호선','계산','(124)인천시청','124-L-AHU01-RF1','대합실공조기','좌 대합실공조기','좌측 공조실','RF1(환기부)','A','3C7AAA9223A7','양호'),
  createData('운용중','2022-10-13 07:59','1호선','계산','(124)인천시청','124-L-AHU01-RF1','대합실공조기','좌 대합실공조기','좌측 공조실','RF1(환기부)','A','3C7AAA9223A7','보통'),
  createData('운용중','2022-10-13 07:59','1호선','계산','(124)인천시청','124-L-AHU01-RF1','대합실공조기','좌 대합실공조기','좌측 공조실','RF1(환기부)','A','3C7AAA9223A7','양호'),
  createData('운용중','2022-10-13 07:59','1호선','계산','(124)인천시청','124-L-AHU01-RF1','대합실공조기','좌 대합실공조기','좌측 공조실','RF1(환기부)','A','3C7AAA9223A7','양호'),
  createData('정지중','2022-10-13 07:59','1호선','계산','(124)인천시청','124-L-AHU01-RF1','대합실공조기','좌 대합실공조기','좌측 공조실','RF1(환기부)','A','3C7AAA9223A7','통신'),
  createData('운용중','2022-10-13 07:59','2호선','석남','(124)인천시청','124-L-AHU01-RF1','대합실공조기','좌 대합실공조기','좌측 공조실','RF1(환기부)','A','3C7AAA9223A7','미흡'),
  createData('운용중','2022-10-13 07:59','2호선','석남','(124)인천시청','124-L-AHU01-RF1','대합실공조기','좌 대합실공조기','좌측 공조실','RF1(환기부)','A','3C7AAA9223A7','결함'),
  createData('정지중','2022-10-13 07:59','2호선','석남','(124)인천시청','124-L-AHU01-RF1','대합실공조기','좌 대합실공조기','좌측 공조실','RF1(환기부)','A','3C7AAA9223A7','불량')
];

export function EquipList() {
  return (
    <div className="monitering">
      <Navigationbar />
      <div className="sub_container">
        <div className='selectbox'>
          <DialogSelect></DialogSelect>
        </div>

        <ul className='condition' style={{marginTop:"px"}}>
          <li className='sum'>합계: 00</li>
          <li className='fine'>양호: 00</li>
          <li className='normal'>보통: 00</li>
          <li className='communi'>통신: 00</li>
          <li className='insuff'>미흡: 00</li>
          <li className='error'>결함: 00</li>
          <li className='bad'>불량: 00</li>
        </ul>

        <TableContainer>
          <Table sx={{ minWidth: 1250 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">선택</TableCell>
                <TableCell align="center">상태</TableCell>
                <TableCell align="center">최근진단</TableCell>
                <TableCell align="center">호선</TableCell>
                <TableCell align="center">파트</TableCell>
                <TableCell align="center">역사명</TableCell>
                <TableCell align="center">설비번호</TableCell>
                <TableCell align="center">설비분류</TableCell>
                <TableCell align="center">설비명</TableCell>
                <TableCell align="center">위치</TableCell>
                <TableCell align="center">설비구성부</TableCell>
                <TableCell align="center">등급</TableCell>
                <TableCell align="center">게이트웹이</TableCell>
                <TableCell align="center">결함여부</TableCell>
                <TableCell align="center">고장신고/점검요청</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow hover key={row.name}>
                  <TableCell align="center"><Checkbox size="small" /></TableCell>
                  <TableCell align="center" className={row.rowclass1}><Link to="/equipdetail">{row.condition}</Link></TableCell>
                  <TableCell align="center"><Link to="/equipdetail">{row.date}</Link></TableCell>
                  <TableCell align="center"><Link to="/equipdetail">{row.number}</Link></TableCell>
                  <TableCell align="center"><Link to="/equipdetail">{row.part}</Link></TableCell>
                  <TableCell align="center"><Link to="/equipdetail">{row.station}</Link></TableCell>
                  <TableCell align="center"><Link to="/equipdetail">{row.equipnum}</Link></TableCell>
                  <TableCell align="center"><Link to="/equipdetail">{row.equipcate}</Link></TableCell>
                  <TableCell align="center"><Link to="/equipdetail">{row.equipname}</Link></TableCell>
                  <TableCell align="center"><Link to="/equipdetail">{row.locate}</Link></TableCell>
                  <TableCell align="center"><Link to="/equipdetail">{row.equipcompo}</Link></TableCell>
                  <TableCell align="center"><Link to="/equipdetail">{row.grade}</Link></TableCell>
                  <TableCell align="center"><Link to="/equipdetail">{row.gate}</Link></TableCell>
                  <TableCell align="center" className={row.rowclass2}><Link to="/equipdetail">{row.flaw}</Link></TableCell>
                  <TableCell align="center">
                    <Alert1 />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div className="btn_right"><Button variant="contained">진단 실행</Button></div>
        <Paging />
      </div>
    </div>
  )
}

export default EquipList;