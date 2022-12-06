import { Link } from 'react-router-dom';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox } from '@mui/material';
import Paging from 'custom/components/table/paging';
import DialogSelect from 'custom/components/search/equipsearch';

function EquipList () {
  function createData(condition, date, number, part, station, equipnum, equipcate, equipname, locate, equipcompo, grade, gate, flaw) {
    return { condition, date, number, part, station, equipnum, equipcate, equipname, locate, equipcompo, grade, gate, flaw };
  }

  const rows = [
    createData('Active','2022-10-13 07:59','1호선','계산','(124)인천시청','124-L-AHU01-RF1','대합실공조기','좌 대합실공조기','좌측 공조실','RF1(환기부)','A','3C7AAA9223A7'),
    createData('Active','2022-10-13 07:59','1호선','계산','(124)인천시청','124-L-AHU01-RF1','대합실공조기','좌 대합실공조기','좌측 공조실','RF1(환기부)','A','3C7AAA9223A7'),
    createData('Active','2022-10-13 07:59','1호선','계산','(124)인천시청','124-L-AHU01-RF1','대합실공조기','좌 대합실공조기','좌측 공조실','RF1(환기부)','A','3C7AAA9223A7'),
    createData('Active','2022-10-13 07:59','1호선','계산','(124)인천시청','124-L-AHU01-RF1','대합실공조기','좌 대합실공조기','좌측 공조실','RF1(환기부)','A','3C7AAA9223A7'),
    createData('Active','2022-10-13 07:59','1호선','계산','(124)인천시청','124-L-AHU01-RF1','대합실공조기','좌 대합실공조기','좌측 공조실','RF1(환기부)','A','3C7AAA9223A7'),
    createData('Active','2022-10-13 07:59','2호선','석남','(124)인천시청','124-L-AHU01-RF1','대합실공조기','좌 대합실공조기','좌측 공조실','RF1(환기부)','A','3C7AAA9223A7'),
    createData('Active','2022-10-13 07:59','2호선','석남','(124)인천시청','124-L-AHU01-RF1','대합실공조기','좌 대합실공조기','좌측 공조실','RF1(환기부)','A','3C7AAA9223A7'),
    createData('Active','2022-10-13 07:59','2호선','석남','(124)인천시청','124-L-AHU01-RF1','대합실공조기','좌 대합실공조기','좌측 공조실','RF1(환기부)','A','3C7AAA9223A7'),
    createData('Active','2022-10-13 07:59','2호선','석남','(124)인천시청','124-L-AHU01-RF1','대합실공조기','좌 대합실공조기','좌측 공조실','RF1(환기부)','A','3C7AAA9223A7'),
    createData('Active','2022-10-13 07:59','2호선','석남','(124)인천시청','124-L-AHU01-RF1','대합실공조기','좌 대합실공조기','좌측 공조실','RF1(환기부)','A','3C7AAA9223A7'),
  ];

  return (
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
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow hover key={row.name}
                component={Link} to="/equipdetail"
              >
                <TableCell align="center"><Checkbox size="small" /></TableCell>
                <TableCell align="center">{row.condition}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">{row.number}</TableCell>
                <TableCell align="center">{row.part}</TableCell>
                <TableCell align="center">{row.station}</TableCell>
                <TableCell align="center">{row.equipnum}</TableCell>
                <TableCell align="center">{row.equipcate}</TableCell>
                <TableCell align="center">{row.equipname}</TableCell>
                <TableCell align="center">{row.locate}</TableCell>
                <TableCell align="center">{row.equipcompo}</TableCell>
                <TableCell align="center">{row.grade}</TableCell>
                <TableCell align="center">{row.gate}</TableCell>
                <TableCell align="center">{row.flaw}</TableCell>
                <TableCell align="center">
                  <span className="material-symbols-outlined">build</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="btn_right"><Button variant="contained">진단 실행</Button></div>
      <Paging />
    </div>
  )
}

export default EquipList;