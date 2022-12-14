import React from "react";
import { Link } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import DialogSelect from 'custom/components/search/mro_station_search3';

import Navigationbar from "custom/components/navigationbarCe";
import DialogSelectBase from "custom/components/search/mro_search";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paging from 'custom/components/table/paging';

const theme = createTheme({
  palette: {
    mode: "light",
  }
});

function createData1(data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, data13, data14, data15) {
  let rowclass;
  if(data15 == '대기') {
    rowclass='condition1';
  } else if(data15 == '작업중') {
    rowclass='condition3';
  } else if(data15 == '종료') {
    rowclass='condition5';
  } else if(data15 == '확인') {
    rowclass='condition6';
  } else {
    rowclass=''
  }
  return { data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, data13, data14, data15, rowclass };
}

const rows = [
  createData1('유지보수(교체)','1호선','계산','(124)인천시청','124-L-AHU01-RF1','2022-06-0200:00','공기조화설비','대합실공조기','좌 대합실공조기','좌측 공조실','EOCR',''
  ,'고장 및 기능장애','홍길동','확인'),
  createData1('유지보수(교체)','1호선','계산','(124)인천시청','124-L-AHU01-RF1','2022-06-0200:00','공기조화설비','대합실공조기','좌 대합실공조기','좌측 공조실','EOCR','O'
  ,'고장 및 기능장애','홍길동','종료'),
  createData1('유지보수(교체)','1호선','계산','(124)인천시청','124-L-AHU01-RF1','2022-06-0200:00','공기조화설비','대합실공조기','좌 대합실공조기','좌측 공조실','EOCR',''
  ,'고장 및 기능장애','홍길동','작업중'),
  createData1('유지보수(교체)','1호선','계산','(124)인천시청','124-L-AHU01-RF1','2022-06-0200:00','공기조화설비','대합실공조기','좌 대합실공조기','좌측 공조실','',''
  ,'','','대기'),
  createData1('유지보수(교체)','1호선','계산','(124)인천시청','124-L-AHU01-RF1','2022-06-0200:00','공기조화설비','대합실공조기','좌 대합실공조기','좌측 공조실','EOCR',''
  ,'고장 및 기능장애','홍길동','확인'),
  createData1('유지보수(교체)','1호선','계산','(124)인천시청','124-L-AHU01-RF1','2022-06-0200:00','공기조화설비','대합실공조기','좌 대합실공조기','좌측 공조실','EOCR','O'
  ,'고장 및 기능장애','홍길동','종료'),
  createData1('유지보수(교체)','1호선','계산','(124)인천시청','124-L-AHU01-RF1','2022-06-0200:00','공기조화설비','대합실공조기','좌 대합실공조기','좌측 공조실','EOCR',''
  ,'고장 및 기능장애','홍길동','작업중'),
  createData1('유지보수(교체)','1호선','계산','(124)인천시청','124-L-AHU01-RF1','2022-06-0200:00','공기조화설비','대합실공조기','좌 대합실공조기','좌측 공조실','',''
  ,'','','대기'),
  createData1('유지보수(교체)','1호선','계산','(124)인천시청','124-L-AHU01-RF1','2022-06-0200:00','공기조화설비','대합실공조기','좌 대합실공조기','좌측 공조실','EOCR',''
  ,'고장 및 기능장애','홍길동','확인'),
  createData1('유지보수(교체)','1호선','계산','(124)인천시청','124-L-AHU01-RF1','2022-06-0200:00','공기조화설비','대합실공조기','좌 대합실공조기','좌측 공조실','EOCR','O'
  ,'고장 및 기능장애','홍길동','확인'),
  createData1('유지보수(교체)','1호선','계산','(124)인천시청','124-L-AHU01-RF1','2022-06-0200:00','공기조화설비','대합실공조기','좌 대합실공조기','좌측 공조실','EOCR',''
  ,'고장 및 기능장애','홍길동','작업중'),
  createData1('유지보수(교체)','1호선','계산','(124)인천시청','124-L-AHU01-RF1','2022-06-0200:00','공기조화설비','대합실공조기','좌 대합실공조기','좌측 공조실','',''
  ,'','','대기')
];

function MroList () {

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="maintenance">
          <Navigationbar />
          <div className="sub_container_ce" style={{backgroundColor:"#fff"}}>
            <DialogSelectBase />
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <ul className='condition' style={{marginTop:"px"}}>
                <li className='sum'>전체: 00</li>
                <li className='normal'>확인: 00</li>
                <li className='fine'>종료: 00</li>
                <li className='insuff'>작업중: 00</li>
                <li className='bad'>대기: 00</li>
              </ul>
              <DialogSelect />
            </div>

            <TableContainer>
              <Table sx={{ minWidth: 400 }} aria-label="simple table" className="maint_table same_width">
                <TableBody>
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
              <Table sx={{ minWidth: 800 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className="blue_th" align="center">구분</TableCell>
                    <TableCell className="blue_th" align="center">호선</TableCell>
                    <TableCell className="blue_th" align="center">파트</TableCell>
                    <TableCell className="blue_th" align="center">역사명</TableCell>
                    <TableCell className="blue_th" align="center">설비번호</TableCell>
                    <TableCell className="blue_th" align="center">유지보수일시</TableCell>
                    <TableCell className="blue_th" align="center">설비대분류</TableCell>
                    <TableCell className="blue_th" align="center">설비분류</TableCell>
                    <TableCell className="blue_th" align="center">설비명</TableCell>
                    <TableCell className="blue_th" align="center">위치</TableCell>
                    <TableCell className="blue_th" align="center">품명</TableCell>
                    <TableCell className="blue_th" align="center">주요부품</TableCell>
                    <TableCell className="blue_th" align="center">분석유형</TableCell>
                    <TableCell className="blue_th" align="center">작업자</TableCell>
                    <TableCell className="blue_th" align="center">작업상태</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow hover key={row.name}
                      className={row.rowclass}
                      // component={Link} to="/equipdetail"
                      // onClick={click}
                    >
                      <TableCell><Link to="/mro_checkdetail">{row.data1}</Link></TableCell>
                      <TableCell><Link to="/mro_checkdetail">{row.data2}</Link></TableCell>
                      <TableCell><Link to="/mro_checkdetail">{row.data3}</Link></TableCell>
                      <TableCell><Link to="/mro_checkdetail">{row.data4}</Link></TableCell>
                      <TableCell><Link to="/mro_checkdetail">{row.data5}</Link></TableCell>
                      <TableCell><Link to="/mro_checkdetail">{row.data6}</Link></TableCell>
                      <TableCell><Link to="/mro_checkdetail">{row.data7}</Link></TableCell>
                      <TableCell><Link to="/mro_checkdetail">{row.data8}</Link></TableCell>
                      <TableCell><Link to="/mro_checkdetail">{row.data9}</Link></TableCell>
                      <TableCell><Link to="/mro_checkdetail">{row.data10}</Link></TableCell>
                      <TableCell><Link to="/mro_checkdetail">{row.data11}</Link></TableCell>
                      <TableCell><Link to="/mro_checkdetail">{row.data12}</Link></TableCell>
                      <TableCell><Link to="/mro_checkdetail">{row.data13}</Link></TableCell>
                      <TableCell><Link to="/mro_checkdetail">{row.data14}</Link></TableCell>
                      <TableCell><Link to="/mro_checkdetail">{row.data15}</Link></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Paging />
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default MroList;