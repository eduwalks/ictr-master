import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import DialogSelect from "custom/components/search/mro_station_search2";

import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paging from 'custom/components/table/paging';

const theme = createTheme({
  palette: {
    mode: "light",
  }
});

function Page21_2 () {

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <ul className='condition' style={{marginTop:"px"}}>
            <li className='sum'>전체: 00</li>
            <li className='bad'>대기: 00</li>
            <li className='fine'>유지보수: 00</li>
            <li className='insuff'>주의관찰: 00</li>
            <li className='normal'>정상: 00</li>
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
          <Table sx={{ minWidth: 400 }} aria-label="simple table" className="maint_table">
            <TableHead>
              <TableRow>
                <TableCell className="blue_th" align="center">No.</TableCell>
                <TableCell className="blue_th" align="center">후속조치</TableCell>
                <TableCell className="blue_th" lign="center">일시</TableCell>
                <TableCell className="blue_th" align="center">구분</TableCell>
                <TableCell className="blue_th" align="center">점검자</TableCell>
                <TableCell className="blue_th" align="center">설비번호</TableCell>
                <TableCell className="blue_th" align="center">설비분류</TableCell>
                <TableCell className="blue_th" align="center">설비명</TableCell>
                <TableCell className="blue_th" align="center">위치</TableCell>
                <TableCell className="blue_th" align="center">설비구성부</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell align="center">890</TableCell>
                <TableCell align="center">정상</TableCell>
                <TableCell align="center">2022-06-0200:00</TableCell>
                <TableCell align="center">상시</TableCell>
                <TableCell align="center">홍길동</TableCell>
                <TableCell align="center">124-L-AHU01-RF1</TableCell>
                <TableCell align="center">대합실공조기</TableCell>
                <TableCell align="center">좌 대합실공조기</TableCell>
                <TableCell align="center">좌측 공조실</TableCell>
                <TableCell align="center">RF1(환기부)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">899</TableCell>
                <TableCell align="center">유지보수</TableCell>
                <TableCell align="center">2022-06-0200:00</TableCell>
                <TableCell align="center">일일</TableCell>
                <TableCell align="center">홍길동 외 1</TableCell>
                <TableCell align="center">124-L-AHU01-RF1</TableCell>
                <TableCell align="center">대합실공조기</TableCell>
                <TableCell align="center">좌 대합실공조기</TableCell>
                <TableCell align="center">좌측 공조실</TableCell>
                <TableCell align="center">RF1(환기부)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">897</TableCell>
                <TableCell align="center">정상</TableCell>
                <TableCell align="center">2022-06-0200:00</TableCell>
                <TableCell align="center">상시</TableCell>
                <TableCell align="center">홍길동</TableCell>
                <TableCell align="center">124-L-AHU01-RF1</TableCell>
                <TableCell align="center">대합실공조기</TableCell>
                <TableCell align="center">좌 대합실공조기</TableCell>
                <TableCell align="center">좌측 공조실</TableCell>
                <TableCell align="center">RF1(환기부)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">896</TableCell>
                <TableCell align="center">유지보수</TableCell>
                <TableCell align="center">2022-06-0200:00</TableCell>
                <TableCell align="center">일일</TableCell>
                <TableCell align="center">홍길동</TableCell>
                <TableCell align="center">124-L-AHU01-RF1</TableCell>
                <TableCell align="center">대합실공조기</TableCell>
                <TableCell align="center">좌 대합실공조기</TableCell>
                <TableCell align="center">좌측 공조실</TableCell>
                <TableCell align="center">RF1(환기부)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">895</TableCell>
                <TableCell align="center">유지보수</TableCell>
                <TableCell align="center">2022-06-0200:00</TableCell>
                <TableCell align="center">상시</TableCell>
                <TableCell align="center">홍길동</TableCell>
                <TableCell align="center">124-L-AHU01-RF1</TableCell>
                <TableCell align="center">대합실공조기</TableCell>
                <TableCell align="center">좌 대합실공조기</TableCell>
                <TableCell align="center">좌측 공조실</TableCell>
                <TableCell align="center">RF1(환기부)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">898</TableCell>
                <TableCell align="center">대기</TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center">상시</TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center">124-L-AHU01-RF1</TableCell>
                <TableCell align="center">대합실공조기</TableCell>
                <TableCell align="center">좌 대합실공조기</TableCell>
                <TableCell align="center">좌측 공조실</TableCell>
                <TableCell align="center">RF1(환기부)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">897</TableCell>
                <TableCell align="center">정상</TableCell>
                <TableCell align="center">2022-06-0200:00</TableCell>
                <TableCell align="center">상시</TableCell>
                <TableCell align="center">홍길동</TableCell>
                <TableCell align="center">124-L-AHU01-RF1</TableCell>
                <TableCell align="center">대합실공조기</TableCell>
                <TableCell align="center">좌 대합실공조기</TableCell>
                <TableCell align="center">좌측 공조실</TableCell>
                <TableCell align="center">RF1(환기부)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">896</TableCell>
                <TableCell align="center">유지보수</TableCell>
                <TableCell align="center">2022-06-0200:00</TableCell>
                <TableCell align="center">일일</TableCell>
                <TableCell align="center">홍길동</TableCell>
                <TableCell align="center">124-L-AHU01-RF1</TableCell>
                <TableCell align="center">대합실공조기</TableCell>
                <TableCell align="center">좌 대합실공조기</TableCell>
                <TableCell align="center">좌측 공조실</TableCell>
                <TableCell align="center">RF1(환기부)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">895</TableCell>
                <TableCell align="center">정상</TableCell>
                <TableCell align="center">2022-06-0200:00</TableCell>
                <TableCell align="center">상시</TableCell>
                <TableCell align="center">홍길동</TableCell>
                <TableCell align="center">124-L-AHU01-RF1</TableCell>
                <TableCell align="center">대합실공조기</TableCell>
                <TableCell align="center">좌 대합실공조기</TableCell>
                <TableCell align="center">좌측 공조실</TableCell>
                <TableCell align="center">RF1(환기부)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">894</TableCell>
                <TableCell align="center">주의관찰</TableCell>
                <TableCell align="center">2022-06-0200:00</TableCell>
                <TableCell align="center">일일</TableCell>
                <TableCell align="center">홍길동</TableCell>
                <TableCell align="center">124-L-AHU01-RF1</TableCell>
                <TableCell align="center">대합실공조기</TableCell>
                <TableCell align="center">좌 대합실공조기</TableCell>
                <TableCell align="center">좌측 공조실</TableCell>
                <TableCell align="center">RF1(환기부)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">893</TableCell>
                <TableCell align="center">주의관찰</TableCell>
                <TableCell align="center">2022-06-0200:00</TableCell>
                <TableCell align="center">상시</TableCell>
                <TableCell align="center">홍길동</TableCell>
                <TableCell align="center">124-L-AHU01-RF1</TableCell>
                <TableCell align="center">대합실공조기</TableCell>
                <TableCell align="center">좌 대합실공조기</TableCell>
                <TableCell align="center">좌측 공조실</TableCell>
                <TableCell align="center">RF1(환기부)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">892</TableCell>
                <TableCell align="center">대기</TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center">상시</TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center">124-L-AHU01-RF1</TableCell>
                <TableCell align="center">대합실공조기</TableCell>
                <TableCell align="center">좌 대합실공조기</TableCell>
                <TableCell align="center">좌측 공조실</TableCell>
                <TableCell align="center">RF1(환기부)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">891</TableCell>
                <TableCell align="center">대기</TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center">상시</TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center">124-L-AHU01-RF1</TableCell>
                <TableCell align="center">대합실공조기</TableCell>
                <TableCell align="center">좌 대합실공조기</TableCell>
                <TableCell align="center">좌측 공조실</TableCell>
                <TableCell align="center">RF1(환기부)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Paging />

        <div className="btn_right"><Button variant="contained" color="error">고장/점검 등록</Button></div>

      </ThemeProvider>
    </>
  )
}

export default Page21_2;