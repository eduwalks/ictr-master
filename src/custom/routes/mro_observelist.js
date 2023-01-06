import React from "react";
import { Link } from "react-router-dom";
import DialogSelect from 'custom/components/search/alertsearch1';

import Navigationbar from "custom/components/navigationbarCe";
import DialogSelectBase from "custom/components/search/mro_search";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paging from 'custom/components/table/paging';

import Alert1 from 'custom/components/pop/alert1';

function MroChecklist () {
  function createData(check, date, registrant, alertdate, alertype, alertcompo, equipnum, number, part, station, equipcompo, equipname) {
    let rowclass;
    let spotdetail;
    
    if(check == '유효') {
      rowclass='condition1';
      spotdetail='/mro_checkdetail';
    } else if(check == '해제') {
      rowclass='condition4';
      spotdetail='/mro_checkdetail';
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
    <>
      <div className="monitering">
        <Navigationbar />
        <div className="main_container">
          <DialogSelectBase />
          <div className="mro_search">
            <ul className='condition' style={{marginTop:"px"}}>
              <li className='sum'>전체: 00</li>
              <li className='bad'>유효: 00</li>
              <li className='communi'>해제: 00</li>
            </ul>
            <DialogSelect />
          </div>

          <TableContainer>
            <Table sx={{ minWidth: 1100 }} aria-label="simple table" className="same_width">
              <TableHead>
                <TableRow>
                  <TableCell className="th" align="center">공기조화설비</TableCell>
                  <TableCell className="th" align="center">급수/급탕설비</TableCell>
                  <TableCell className="th" align="center">소방설비</TableCell>
                  <TableCell className="th" align="center">승강설비</TableCell>
                  <TableCell className="th" align="center">승강장안전문설비</TableCell>
                  <TableCell className="th" align="center">열원 및<br/>냉난방 설비</TableCell>
                  <TableCell className="th" align="center">오/배수 통기 및<br/>우수배수설비</TableCell>
                  <TableCell className="th" align="center">오수정화 및<br/>물 재이용 설비</TableCell>
                  <TableCell className="th" align="center">위생기구설비</TableCell>
                  <TableCell className="th" align="center">환기설비</TableCell>
                  <TableCell className="th" align="center">자동제어설비</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center">870</TableCell>
                  <TableCell align="center">870</TableCell>
                  <TableCell align="center">870</TableCell>
                  <TableCell align="center">870</TableCell>
                  <TableCell align="center">870</TableCell>
                  <TableCell align="center">870</TableCell>
                  <TableCell align="center">870</TableCell>
                  <TableCell align="center">870</TableCell>
                  <TableCell align="center">870</TableCell>
                  <TableCell align="center">870</TableCell>
                  <TableCell align="center">870</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        
          <br/>
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
    </>
  )
}

export default MroChecklist;