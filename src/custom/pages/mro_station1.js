import React from "react";
import { Link } from "react-router-dom";
import DialogSelect from "custom/components/search/mro_station_search1";

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paging from 'custom/components/table/paging';
import Mro from "custom/components/pop/mro";

function createData1(data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12) {
  let rowclass;
  if(data12 == '상시점검') {
    rowclass='condition1';
  } else if(data12 == '경과') {
    rowclass='condition2';
  } else if(data12 == '임박') {
    rowclass='condition3';
  } else if(data12 == '주의관찰') {
    rowclass='condition4';
  } else if(data12 == '정상') {
    rowclass='condition7';
  } else {
    rowclass=''
  }
  return { data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, rowclass };
}

const rows = [
  createData1('890','운용중','2022-06-0200:00','124-L-AHU01-RF1','대합실공조기','좌 대합실공조기','좌측 공조실','RF1(환기부)'
  ,'A','3C7AAA9223A7','양호','상시점검'),
  createData1('890','운용중','2022-06-0200:00','124-L-AHU01-RF1','대합실공조기','좌 대합실공조기','좌측 공조실','RF1(환기부)'
  ,'A','3C7AAA9223A7','양호','상시점검'),
  createData1('890','운용중','2022-06-0200:00','124-L-AHU01-RF1','대합실공조기','좌 대합실공조기','좌측 공조실','RF1(환기부)'
  ,'A','3C7AAA9223A7','양호','정상'),
  createData1('890','운용중','2022-06-0200:00','124-L-AHU01-RF1','대합실공조기','좌 대합실공조기','좌측 공조실','RF1(환기부)'
  ,'A','3C7AAA9223A7','양호','경과'),
  createData1('890','운용중','2022-06-0200:00','124-L-AHU01-RF1','대합실공조기','좌 대합실공조기','좌측 공조실','RF1(환기부)'
  ,'A','3C7AAA9223A7','양호','임박'),
  createData1('890','운용중','2022-06-0200:00','124-L-AHU01-RF1','대합실공조기','좌 대합실공조기','좌측 공조실','RF1(환기부)'
  ,'A','3C7AAA9223A7','양호','상시점검'),
  createData1('890','운용중','2022-06-0200:00','124-L-AHU01-RF1','대합실공조기','좌 대합실공조기','좌측 공조실','RF1(환기부)'
  ,'A','3C7AAA9223A7','양호','경과'),
  createData1('890','운용중','2022-06-0200:00','124-L-AHU01-RF1','대합실공조기','좌 대합실공조기','좌측 공조실','RF1(환기부)'
  ,'A','3C7AAA9223A7','양호','정상'),
  createData1('890','운용중','2022-06-0200:00','124-L-AHU01-RF1','대합실공조기','좌 대합실공조기','좌측 공조실','RF1(환기부)'
  ,'A','3C7AAA9223A7','양호','임박'),
  createData1('890','운용중','2022-06-0200:00','124-L-AHU01-RF1','대합실공조기','좌 대합실공조기','좌측 공조실','RF1(환기부)'
  ,'A','3C7AAA9223A7','양호','임박'),
  createData1('890','운용중','2022-06-0200:00','124-L-AHU01-RF1','대합실공조기','좌 대합실공조기','좌측 공조실','RF1(환기부)'
  ,'A','3C7AAA9223A7','양호','정상'),
  createData1('890','운용중','2022-06-0200:00','124-L-AHU01-RF1','대합실공조기','좌 대합실공조기','좌측 공조실','RF1(환기부)'
  ,'A','3C7AAA9223A7','양호','주의관찰'),
];

function MroStation1 () {

  return (
    <>
      <div className="mro_search">
        <ul className='condition' style={{marginTop:"px"}}>
          <li className='sum'>전체: 00</li>
          <li className='bad'>상시점검: 00</li>
          <li className='error'>경과: 00</li>
          <li className='insuff'>임박: 00</li>
          <li className='communi'>주의관찰: 00</li>
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
        <Table sx={{ minWidth: 1200 }} aria-label="simple table" className="list_table1">
          <TableHead>
            <TableRow>
              <TableCell className="th" align="center">No.</TableCell>
              <TableCell className="th" align="center">운용상태</TableCell>
              <TableCell className="th" align="center">최근점검</TableCell>
              <TableCell className="th" align="center">설비번호</TableCell>
              <TableCell className="th" align="center">설비분류</TableCell>
              <TableCell className="th" align="center">설비명</TableCell>
              <TableCell className="th" align="center">위치</TableCell>
              <TableCell className="th" align="center">설비구성부</TableCell>
              <TableCell className="th" align="center">등급</TableCell>
              <TableCell className="th" align="center">게이트웹이</TableCell>
              <TableCell className="th" align="center">IoT결함</TableCell>
              <TableCell className="th" align="center">상태</TableCell>
              <TableCell className="th" align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow hover key={row.name}
                // component={Link} to="/equipdetail"
                // onClick={click}
              >
                <TableCell><Link to="/mro_stationstate">{row.data1}</Link></TableCell>
                <TableCell><Link to="/mro_stationstate">{row.data2}</Link></TableCell>
                <TableCell><Link to="/mro_stationstate">{row.data3}</Link></TableCell>
                <TableCell><Link to="/mro_stationstate">{row.data4}</Link></TableCell>
                <TableCell><Link to="/mro_stationstate">{row.data5}</Link></TableCell>
                <TableCell><Link to="/mro_stationstate">{row.data6}</Link></TableCell>
                <TableCell><Link to="/mro_stationstate">{row.data7}</Link></TableCell>
                <TableCell><Link to="/mro_stationstate">{row.data8}</Link></TableCell>
                <TableCell><Link to="/mro_stationstate">{row.data9}</Link></TableCell>
                <TableCell><Link to="/mro_stationstate">{row.data10}</Link></TableCell>
                <TableCell><Link to="/mro_stationstate">{row.data11}</Link></TableCell>
                <TableCell className={row.rowclass}><Link to="/mro_stationstate">{row.data12}</Link></TableCell>
                <TableCell align="center"><Mro /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Paging />
    </>
  )
}

export default MroStation1;