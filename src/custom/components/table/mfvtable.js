import React from 'react';
import { Link } from "react-router-dom";

//material import
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Motor from 'custom/img/motor.svg';
import Fan from 'custom/img/fan.svg';
import Vbelt from 'custom/img/vbelt.svg';
import Alert1 from 'custom/components/pop/alert1';

function rowClass(condition) {
  if(condition == '불량') {
    return 'icon icon1';
  } else if(condition == '결함') {
    return 'icon icon2';
  } else if(condition == '미흡') {
    return 'icon icon3';
  } else if(condition == '통신') {
    return 'icon icon4';
  } else if(condition == '보통') {
    return 'icon icon5';
  } else if(condition == '양호') {
    return 'icon icon6';
  } else {
    return ''
  }
}
// table data
function createData1(equipname, condition1, condition2, condition3) {
  let rowclass1 = rowClass(condition1);
  let rowclass2 = rowClass(condition2);
  let rowclass3 = rowClass(condition3);
  
  return { equipname, condition1, condition2, condition3, rowclass1, rowclass2, rowclass3 };
}

const rows = [
  createData1('좌 대합실공조기', '미흡', '결함', '양호'),
  createData1('좌 대합실공조기', '통신', '보통', '불량'),
  createData1('좌 대합실공조기', '양호', '통신', '미흡'),
  createData1('좌 대합실공조기', '결함', '보통', '양호'),
  createData1('좌 대합실공조기', '미흡', '미흡', '미흡'),
  createData1('좌 대합실공조기', '양호', '보통', '불량'),
  createData1('좌 대합실공조기', '미흡', '결함', '양호'),
  createData1('좌 대합실공조기', '미흡', '결함', '양호'),
  createData1('좌 대합실공조기', '양호', '통신', '미흡'),
  createData1('좌 대합실공조기', '결함', '보통', '양호')
]

function MfvTable() {
    return (
        <TableContainer sx={{ maxHeight: 323 }}>
            <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 500 }} className="same_width hov_non">
                <TableHead style={{top: "0", position:"sticky", zIndex: "10000"}}>
                    <TableRow>
                        <TableCell align="center" rowSpan="2">설비명</TableCell>
                        <TableCell align="center" colSpan="3">설비상태진단</TableCell>
                        <TableCell align="center" colSpan="3">설비결함진단(고장예측)</TableCell>
                        <TableCell align="center" rowSpan="2">고장신고/점검요청</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">전동기</TableCell>
                        <TableCell align="center">송풍기</TableCell>
                        <TableCell align="center">V벨트</TableCell>
                        <TableCell align="center">전동기</TableCell>
                        <TableCell align="center">송풍기</TableCell>
                        <TableCell align="center">V벨트</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow hover key={row.name}
                    >
                      <TableCell align="center"><Link to="/equipdetail">{row.equipname}</Link></TableCell>
                      <TableCell align="center" className={row.rowclass1}>
                        <Link to="/equipdetail"><Button variant="contained"><img src={Motor} alt="전동기" /></Button></Link>
                      </TableCell>
                      <TableCell align="center" className={row.rowclass2}>
                        <Link to="/equipdetail"><Button variant="contained"><img src={Fan} alt="송풍기" /></Button></Link>
                      </TableCell>
                      <TableCell align="center" className={row.rowclass3}>
                        <Link to="/equipdetail"><Button variant="contained"><img src={Vbelt} alt="V벨트" /></Button></Link>
                      </TableCell>
                      <TableCell align="center"><Link to="/equipdetail"><Button style={{padding:"0"}} variant="contained" color="success">정상</Button></Link></TableCell>
                      <TableCell align="center"><Link to="/equipdetail"><Button style={{padding:"0"}} variant="contained" color="success">정상</Button></Link></TableCell>
                      <TableCell align="center"><Link to="/equipdetail"><Button style={{padding:"0"}} variant="contained" color="success">정상</Button></Link></TableCell>
                      <TableCell align="center"><Alert1 /></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default MfvTable;