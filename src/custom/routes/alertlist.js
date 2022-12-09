import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import Navigationbar from 'custom/components/navigationbar';
import Paging from 'custom/components/table/paging';
import DialogSelect from 'custom/components/search/alertsearch';

function AlertList () {
  function createData(check, date, measure, alertdate, alertype, alertcompo, equipnum, number, part, station, equipcompo, equipname) {
    let rowclass;
    if(check == '경보발생') {
      rowclass='check1';
    } else if(check == '경보확인') {
      rowclass='check2';
    } else if(check == '현장점검') {
      rowclass='check3';
    } else {
      rowclass=''
    }

    return { check, date, measure, alertdate, alertype, alertcompo, equipnum, number, part, station, equipcompo, equipname, rowclass };
  }

  const rows = [
    createData('경보확인','2022-10-13 07:59','','2022-10-13 07:59','진단IoT경보','결함발생','118-R-PAC','1호선','계산','부평구청','직팽식공조기','우 직팽식공조기'),
    createData('현장점검','2022-10-13 07:59','유지보수','2022-10-13 07:59','진단IoT경보','결함발생','118-R-PAC','1호선','계산','부평구청','직팽식공조기','우 직팽식공조기'),
    createData('경보확인','2022-10-13 07:59','','2022-10-13 07:59','진단IoT경보','결함발생','118-R-PAC','1호선','계산','부평구청','직팽식공조기','우 직팽식공조기'),
    createData('경보확인','2022-10-13 07:59','','2022-10-13 07:59','진단IoT경보','결함발생','118-R-PAC','1호선','계산','부평구청','직팽식공조기','우 직팽식공조기'),
    createData('현장점검','2022-10-13 07:59','정상','2022-10-13 07:59','진단IoT경보','결함발생','118-R-PAC','1호선','계산','부평구청','직팽식공조기','우 직팽식공조기'),
    createData('경보발생','','','2022-10-13 07:59','진단IoT경보','결함발생','118-R-PAC','1호선','계산','부평구청','직팽식공조기','우 직팽식공조기'),
    createData('경보발생','','','2022-10-13 07:59','진단IoT경보','결함발생','118-R-PAC','1호선','계산','부평구청','직팽식공조기','우 직팽식공조기'),
    createData('경보발생','','','2022-10-13 07:59','진단IoT경보','결함발생','118-R-PAC','1호선','계산','부평구청','직팽식공조기','우 직팽식공조기')
  ];

  return (
    <div className="monitering">
      <Navigationbar />
      <div className="sub_container">
        <div className='selectbox'>
          <DialogSelect></DialogSelect>
        </div>

        <TableContainer>
          <Table sx={{ minWidth: 1250 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">상태</TableCell>
                <TableCell align="center">경보확인일시</TableCell>
                <TableCell align="center">후속조치</TableCell>
                <TableCell align="center">경보일시</TableCell>
                <TableCell align="center">경보유형</TableCell>
                <TableCell align="center">경보분류</TableCell>
                <TableCell align="center">설비번호</TableCell>
                <TableCell align="center">호선</TableCell>
                <TableCell align="center">파트</TableCell>
                <TableCell align="center">역사명</TableCell>
                <TableCell align="center">설비분류</TableCell>
                <TableCell align="center">설비명</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow hover key={row.name}
                  component={Link} to="/alertdetail"
                  className={row.rowclass}
                >
                  <TableCell align="center">{row.check}</TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell align="center">{row.measure}</TableCell>
                  <TableCell align="center">{row.alertdate}</TableCell>
                  <TableCell align="center">{row.alertype}</TableCell>
                  <TableCell align="center">{row.alertcompo}</TableCell>
                  <TableCell align="center">{row.equipnum}</TableCell>
                  <TableCell align="center">{row.number}</TableCell>
                  <TableCell align="center">{row.part}</TableCell>
                  <TableCell align="center">{row.station}</TableCell>
                  <TableCell align="center">{row.equipcompo}</TableCell>
                  <TableCell align="center">{row.equipname}</TableCell>
                  <TableCell align="center">
                    <span className="material-symbols-outlined">content_paste_search</span>
                    <span className="material-symbols-outlined">build</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Paging />
      </div>
    </div>
  )
}

export default AlertList;