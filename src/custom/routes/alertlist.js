import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import Navigationbar from 'custom/components/navigationbar';
import Paging from 'custom/components/table/paging';
import DialogSelect from 'custom/components/search/alertsearch';

import Alert1 from 'custom/components/pop/alert1';

function AlertList () {
  function createData(check, date, measure, alertdate, alertype, alertcompo, equipnum, number, part, station, equipcompo, equipname) {
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

    return { check, date, measure, alertdate, alertype, alertcompo, equipnum, number, part, station, equipcompo, equipname, rowclass };
  }

  const rows = [
    createData('경보발생','2022-10-13 07:59','','2022-10-13 07:59','진단IoT경보','결함발생','118-R-PAC','1호선','계산','부평구청','직팽식공조기','우 직팽식공조기'),
    createData('경보발생','2022-10-13 07:59','','2022-10-13 07:59','진단IoT경보','결함발생','118-R-PAC','1호선','계산','부평구청','직팽식공조기','우 직팽식공조기'),
    createData('경보발생','2022-10-13 07:59','','2022-10-13 07:59','진단IoT경보','결함발생','118-R-PAC','1호선','계산','부평구청','직팽식공조기','우 직팽식공조기'),
    createData('현장점검','2022-10-13 07:59','유지보수','2022-10-13 07:59','진단IoT경보','결함발생','118-R-PAC','1호선','계산','부평구청','직팽식공조기','우 직팽식공조기'),
    createData('현장점검','2022-10-13 07:59','정상','2022-10-13 07:59','진단IoT경보','결함발생','118-R-PAC','1호선','계산','부평구청','직팽식공조기','우 직팽식공조기'),
    createData('현장점검','','','2022-10-13 07:59','진단IoT경보','결함발생','118-R-PAC','1호선','계산','부평구청','직팽식공조기','우 직팽식공조기'),
    createData('현장점검','','','2022-10-13 07:59','진단IoT경보','결함발생','118-R-PAC','1호선','계산','부평구청','직팽식공조기','우 직팽식공조기'),
    createData('현장점검','','','2022-10-13 07:59','진단IoT경보','결함발생','118-R-PAC','1호선','계산','부평구청','직팽식공조기','우 직팽식공조기')
  ];

  return (
    <div className="monitering">
      <Navigationbar />
      <div className="sub_container">
        <div className='selectbox'>
          <DialogSelect></DialogSelect>
        </div>

        <TableContainer>
          <Table sx={{ minWidth: 1250 }} aria-label="simple table" className="list_table">
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
                <TableCell align="center">경보확인</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow hover key={row.name}
                  // component={Link} to="/alertdetail"
                >
                  <TableCell align="center" className={row.rowclass}><Link to="/spotdetail">{row.check}</Link></TableCell>
                  <TableCell align="center"><Link to="/spotdetail">{row.date}</Link></TableCell>
                  <TableCell align="center"><Link to="/spotdetail">{row.measure}</Link></TableCell>
                  <TableCell align="center"><Link to="/spotdetail">{row.alertdate}</Link></TableCell>
                  <TableCell align="center"><Link to="/spotdetail">{row.alertype}</Link></TableCell>
                  <TableCell align="center"><Link to="/spotdetail">{row.alertcompo}</Link></TableCell>
                  <TableCell align="center"><Link to="/spotdetail">{row.equipnum}</Link></TableCell>
                  <TableCell align="center"><Link to="/spotdetail">{row.number}</Link></TableCell>
                  <TableCell align="center"><Link to="/spotdetail">{row.part}</Link></TableCell>
                  <TableCell align="center"><Link to="/spotdetail">{row.station}</Link></TableCell>
                  <TableCell align="center"><Link to="/spotdetail">{row.equipcompo}</Link></TableCell>
                  <TableCell align="center"><Link to="/spotdetail">{row.equipname}</Link></TableCell>
                  <TableCell align="center">
                    <Alert1 />
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