import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import Navigationbar from 'custom/components/navigationbar';
import Paging from 'custom/components/table/paging';
import DialogSelect from 'custom/components/search/alertsearch1';

import Alert1 from 'custom/components/pop/alert1';

function AlertRespiteList () {
  function createData(check, date, registrant, alertdate, alertype, alertcompo, equipnum, number, part, station, equipcompo, equipname) {
    let rowclass;
    let spotdetail;
    
    if(check == '유효') {
      rowclass='condition1';
      spotdetail='/spotdetail1';
    } else if(check == '해제') {
      rowclass='condition4';
      spotdetail='/spotdetail3';
    } else {
      rowclass=''
      spotdetail='';
    }

    return { check, date, registrant, alertdate, alertype, alertcompo, equipnum, number, part, station, equipcompo, equipname, rowclass, spotdetail };
  }

  const rows = [
    createData('유효','2022-09-19','홍길동','2022-09-19 07:59','진단IoT경보','결함발생','118-R-PAC','1호선','계산','부평구청','직팽식공조기','우 직팽식공조기'),
    createData('유효','2022-09-19','홍길동','2022-09-19 07:59','진단IoT경보','결함발생','118-R-PAC','1호선','계산','부평구청','직팽식공조기','우 직팽식공조기'),
    createData('유효','2022-09-19','홍길동','2022-09-19 07:59','진단IoT경보','결함발생','118-R-PAC','1호선','계산','부평구청','직팽식공조기','우 직팽식공조기'),
    createData('유효','2022-09-19','홍길동','2022-09-19 07:59','진단IoT경보','결함발생','118-R-PAC','1호선','계산','부평구청','직팽식공조기','우 직팽식공조기'),
    createData('유효','2022-09-19','홍길동','2022-09-19 07:59','진단IoT경보','결함발생','118-R-PAC','1호선','계산','부평구청','직팽식공조기','우 직팽식공조기'),
    createData('해제','2022-09-19','홍길동','2022-09-19 07:59','진단IoT경보','결함발생','118-R-PAC','1호선','계산','부평구청','직팽식공조기','우 직팽식공조기'),
    createData('해제','2022-09-19','홍길동','2022-09-19 07:59','진단IoT경보','결함발생','118-R-PAC','1호선','계산','부평구청','직팽식공조기','우 직팽식공조기'),
    createData('해제','2022-09-19','홍길동','2022-09-19 07:59','진단IoT경보','결함발생','118-R-PAC','1호선','계산','부평구청','직팽식공조기','우 직팽식공조기')
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
                <TableCell align="center">경보유예기간</TableCell>
                <TableCell align="center">경보유예 등록자</TableCell>
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
                  // component={Link} to="/alertdetail"
                >
                  <TableCell align="center" className={row.rowclass}><Link to={row.spotdetail}>{row.check}</Link></TableCell>
                  <TableCell align="center"><Link to={row.spotdetail}>{row.date}</Link></TableCell>
                  <TableCell align="center"><Link to={row.spotdetail}>{row.registrant}</Link></TableCell>
                  <TableCell align="center"><Link to={row.spotdetail}>{row.alertdate}</Link></TableCell>
                  <TableCell align="center"><Link to={row.spotdetail}>{row.alertype}</Link></TableCell>
                  <TableCell align="center"><Link to={row.spotdetail}>{row.alertcompo}</Link></TableCell>
                  <TableCell align="center"><Link to={row.spotdetail}>{row.equipnum}</Link></TableCell>
                  <TableCell align="center"><Link to={row.spotdetail}>{row.number}</Link></TableCell>
                  <TableCell align="center"><Link to={row.spotdetail}>{row.part}</Link></TableCell>
                  <TableCell align="center"><Link to={row.spotdetail}>{row.station}</Link></TableCell>
                  <TableCell align="center"><Link to={row.spotdetail}>{row.equipcompo}</Link></TableCell>
                  <TableCell align="center"><Link to={row.spotdetail}>{row.equipname}</Link></TableCell>
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

export default AlertRespiteList;