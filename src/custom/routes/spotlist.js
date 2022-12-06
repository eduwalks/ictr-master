import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
// import Paging from 'custom/components/table/paging';
import DialogSelect from 'custom/components/search/spotsearch';

function SpotList () {
  function createData(no, work, equipnum, station, equipcompo, equipname, measure, materials, repair, productname, worker, analysis, iot, workdate) {
    return { no, work, equipnum, station, equipcompo, equipname, measure, materials, repair, productname, worker, analysis, iot, workdate };
  }
  
  const rows = [
    createData('1','작업완료','124-L-AHU01-RF1','부평구청','직팽식공조기','우 직팽식공조기','유지보수(교체)','자체','역사환기설비제어부','EOCR','','고장 및 기능장애','','2022-09-23 14:59'),
    createData('2','작업완료','124-L-AHU01-RF1','부평구청','직팽식공조기','우 직팽식공조기','유지보수(교체)','외주','역사환기설비제어부','EOCR','','고장 및 기능장애','','2022-09-23 14:59'),
    createData('3','작업완료','124-L-AHU01-RF1','부평구청','직팽식공조기','우 직팽식공조기','유지보수(교체)','외주','역사환기설비제어부','EOCR','','고장 및 기능장애','','2022-09-23 14:59'),
    createData('4','작업완료','124-L-AHU01-RF1','부평구청','직팽식공조기','우 직팽식공조기','유지보수(교체)','외주','역사환기설비제어부','EOCR','','고장 및 기능장애','','2022-09-23 14:59'),
    createData('5','작업완료','124-L-AHU01-RF1','부평구청','직팽식공조기','우 직팽식공조기','유지보수(교체)','외주','역사환기설비제어부','EOCR','','고장 및 기능장애','','2022-09-23 14:59'),
    createData('6','작업완료','124-L-AHU01-RF1','부평구청','직팽식공조기','우 직팽식공조기','단순고장장애','자체','','','','','','2022-09-23 14:59'),
    createData('7','대기','124-L-AHU01-RF1','부평구청','직팽식공조기','우 직팽식공조기','현장(상시)점검','자체','','','','','','2022-09-23 14:59'),
    createData('8','대기','124-L-AHU01-RF1','부평구청','직팽식공조기','우 직팽식공조기','현장(상시)점검','자체','','','','','','2022-09-23 14:59')
  ];

  return (
    <div className="sub_container">
      <div className='selectbox'>
        <DialogSelect></DialogSelect>
      </div>

      <TableContainer>
        <Table sx={{ minWidth: 1250 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">No.</TableCell>
              <TableCell align="center">작업상태</TableCell>
              <TableCell align="center">설비번호</TableCell>
              <TableCell align="center">역사명</TableCell>
              <TableCell align="center">설비분류</TableCell>
              <TableCell align="center">설비명</TableCell>
              <TableCell align="center">조치유형</TableCell>
              <TableCell align="center">보수구분</TableCell>
              <TableCell align="center">투입자재 중분류</TableCell>
              <TableCell align="center">품명</TableCell>
              <TableCell align="center">작업자</TableCell>
              <TableCell align="center">분석유형</TableCell>
              <TableCell align="center">IoT경보</TableCell>
              <TableCell align="center">작업시작일시</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow hover key={row.name}
                component={Link} to="/spotdetail"
              >
                <TableCell align="center">{row.no}</TableCell>
                <TableCell align="center">{row.work}</TableCell>
                <TableCell align="center">{row.equipnum}</TableCell>
                <TableCell align="center">{row.station}</TableCell>
                <TableCell align="center">{row.equipcompo}</TableCell>
                <TableCell align="center">{row.equipname}</TableCell>
                <TableCell align="center">{row.measure}</TableCell>
                <TableCell align="center">{row.materials}</TableCell>
                <TableCell align="center">{row.repair}</TableCell>
                <TableCell align="center">{row.productname}</TableCell>
                <TableCell align="center">{row.worker}</TableCell>
                <TableCell align="center">{row.analysis}</TableCell>
                <TableCell align="center">{row.iot}</TableCell>
                <TableCell align="center">{row.workdate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="btn_right"><Button variant="contained">유지보수</Button></div>
    </div>
  )
}

export default SpotList;