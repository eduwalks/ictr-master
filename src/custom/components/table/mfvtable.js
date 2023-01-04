import React from 'react';
import { Link } from "react-router-dom";

//material import
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Motor from 'custom/img/motor.svg';
import Fan from 'custom/img/fan.svg';
import Vbelt from 'custom/img/vbelt.svg';
import Alert1 from 'custom/components/pop/alert1';

function rowClass1(condition) {
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

function rowClass2(circleclass) {
  if(circleclass == 'A') {
    return 'circle1';
  } else if(circleclass == 'B') {
    return 'circle2';
  } else if(circleclass == 'C') {
    return 'circle3';
  } else if(circleclass == 'D') {
    return 'circle4';
  } else {
    return ''
  }
}

// table data
function createData1(equipname, condition1, x1, y1, z1, condition2, x2, y2, z2, condition3) {
  let rowclass1 = rowClass1(condition1);
  let rowclass2 = rowClass1(condition2);
  let rowclass3 = rowClass1(condition3);

  let circleclass1 = rowClass2(x1);
  let circleclass2 = rowClass2(y1);
  let circleclass3 = rowClass2(z1);
  let circleclass4 = rowClass2(x2);
  let circleclass5 = rowClass2(y2);
  let circleclass6 = rowClass2(z2);

  return { equipname, condition1, x1, y1, z1, condition2, x2, y2, z2, condition3, rowclass1, rowclass2, rowclass3, circleclass1, circleclass2, circleclass3, circleclass4, circleclass5, circleclass6 };
}

const rows = [
  createData1('좌 대합실공조기', '미흡', 'A', 'D', 'C', '미흡', 'B', 'B', 'C', '결함'),
  createData1('좌 대합실공조기', '양호', 'D', 'B', 'A', '통신', 'C', 'A', 'B', '미흡'),
  createData1('좌 대합실공조기', '결함', 'A', 'B', 'C', '보통', 'A', 'A', 'D', '양호'),
  createData1('좌 대합실공조기', '미흡', 'B', 'B', 'C', '미흡', 'A', 'C', 'D', '미흡'),
  createData1('좌 대합실공조기', '양호', 'C', 'A', 'D', '보통', 'A', 'B', 'A', '불량'),
  createData1('좌 대합실공조기', '미흡', 'A', 'C', 'B', '결함', 'B', 'D', 'C', '양호'),
  createData1('좌 대합실공조기', '미흡', 'C', 'A', 'A', '결함', 'C', 'C', 'A', '양호'),
  createData1('좌 대합실공조기', '양호', 'C', 'D', 'C', '통신', 'C', 'A', 'B', '미흡'),
  createData1('좌 대합실공조기', '결함', 'D', 'D', 'B', '보통', 'A', 'B', 'A', '양호'),
  createData1('좌 대합실공조기', '미흡', 'A', 'A', 'D', '결함', 'B', 'A', 'C', '양호'),
  createData1('좌 대합실공조기', '통신', 'B', 'C', 'A', '보통', 'C', 'A', 'B', '불량'),
  createData1('좌 대합실공조기', '불량', 'D', 'A', 'C', '통신', 'D', 'C', 'A', '미흡'),
  createData1('좌 대합실공조기', '양호', 'D', 'B', 'B', '통신', 'B', 'B', 'A', '미흡'),
  createData1('좌 대합실공조기', '결함', 'A', 'D', 'B', '보통', 'B', 'D', 'B', '양호'),
  createData1('좌 대합실공조기', '불량', 'A', 'A', 'C', '미흡', 'D', 'D', 'C', '양호'),
  createData1('좌 대합실공조기', '통신', 'A', 'A', 'D', '보통', 'C', 'B', 'C', '불량'),
  createData1('좌 대합실공조기', '미흡', 'C', 'B', 'A', '결함', 'A', 'A', 'A', '양호'),
  createData1('좌 대합실공조기', '미흡', 'B', 'B', 'C', '결함', 'A', 'C', 'A', '양호'),
  createData1('좌 대합실공조기', '양호', 'B', 'D', 'A', '통신', 'C', 'D', 'B', '미흡'),
  createData1('좌 대합실공조기', '결함', 'D', 'B', 'B', '보통', 'B', 'A', 'A', '양호'),
  createData1('좌 대합실공조기', '미흡', 'A', 'C', 'C', '결함', 'A', 'B', 'C', '양호')
]

function MfvTable() {
    return (
        <TableContainer sx={{ maxHeight: 383 }}>
            <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 700 }} className="hov_non list_table2">
                <TableHead style={{top: "0", position:"sticky", zIndex: "1"}}>
                    <TableRow>
                        <TableCell align="center" rowSpan="2" className="inwidth1">설비명</TableCell>
                        <TableCell align="center" colSpan="3">설비상태진단</TableCell>
                        <TableCell align="center" colSpan="3">설비결함진단(고장예측)</TableCell>
                        <TableCell align="center" rowSpan="2" className="inwidth5">고장신고<br/>점검요청</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center" className="inwidth2">전동기(XYZ)</TableCell>
                        <TableCell align="center" className="inwidth2">송풍기(XYZ)</TableCell>
                        <TableCell align="center" className="inwidth2">V벨트</TableCell>
                        <TableCell align="center" className="inwidth4">전동기</TableCell>
                        <TableCell align="center" className="inwidth4">송풍기</TableCell>
                        <TableCell align="center" className="inwidth4">V벨트</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow hover key={row.name}
                    >
                      <TableCell align="center"><Link to="/equipdetail1">{row.equipname}</Link></TableCell>
                      <TableCell align="center" className={row.rowclass1}>
                        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                          <Link to="/equipdetail1"><Button variant="contained"><img src={Motor} alt="전동기" /></Button></Link>
                          <div align="center" className={row.circleclass1}>
                            <Link to="/equipdetail1">
                              <span>{row.x1}</span>
                            </Link>
                          </div>
                          <div align="center" className={row.circleclass2}>
                            <Link to="/equipdetail1">
                              <span>{row.y1}</span>
                            </Link>
                          </div>
                          <div align="center" className={row.circleclass3}>
                            <Link to="/equipdetail1">
                              <span>{row.z1}</span>
                            </Link>
                          </div>
                        </div>
                      </TableCell>

                      <TableCell align="center" className={row.rowclass2} >
                        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                          <Link to="/equipdetail1"><Button variant="contained"><img src={Fan} alt="송풍기" /></Button></Link>
                          <div align="center" className={row.circleclass4}>
                            <Link to="/equipdetail1">
                              <span>{row.x2}</span>
                            </Link>
                          </div>
                          <div align="center" className={row.circleclass5}>
                            <Link to="/equipdetail1">
                              <span>{row.y2}</span>
                            </Link>
                          </div>
                          <div align="center" className={row.circleclass6}>
                            <Link to="/equipdetail1">
                              <span>{row.z2}</span>
                            </Link>
                          </div>
                        </div>
                      </TableCell>

                      <TableCell align="center" className={row.rowclass3}>
                        <Link to="/equipdetail1"><Button variant="contained"><img src={Vbelt} alt="V벨트" /></Button></Link>
                      </TableCell>
                      <TableCell align="center"><Link to="/equipdetail1"><Button style={{padding:"0"}} variant="contained" color="success">정상</Button></Link></TableCell>
                      <TableCell align="center"><Link to="/equipdetail1"><Button style={{padding:"0"}} variant="contained" color="success">정상</Button></Link></TableCell>
                      <TableCell align="center"><Link to="/equipdetail1"><Button style={{padding:"0"}} variant="contained" color="success">정상</Button></Link></TableCell>
                      <TableCell align="center"><Alert1 /></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default MfvTable;