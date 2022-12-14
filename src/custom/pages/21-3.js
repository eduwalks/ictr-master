import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import DialogSelect from "custom/components/search/mro_station_search3";

import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paging from 'custom/components/table/paging';

const theme = createTheme({
  palette: {
    mode: "light",
  }
});

function Page21_3 () {

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
          <Table sx={{ minWidth: 400 }} aria-label="simple table" className="maint_table">
            <TableHead>
              <TableRow>
                <TableCell className="blue_th" align="center">구분</TableCell>
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
              <TableRow>
                <TableCell align="center">유지보수(교체)</TableCell>
                <TableCell align="center">124-L-AHU01-RF1</TableCell>
                <TableCell align="center">2022-06-0200:00</TableCell>
                <TableCell align="center">공기조화설비</TableCell>
                <TableCell align="center">대합실공조기</TableCell>
                <TableCell align="center">좌 대합실공조기</TableCell>
                <TableCell align="center">좌측 공조실</TableCell>
                <TableCell align="center">EOCR</TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center">고장 및 기능장애</TableCell>
                <TableCell align="center">홍길동</TableCell>
                <TableCell align="center">확인</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">유지보수(교체)</TableCell>
                <TableCell align="center">124-L-AHU01-RF1</TableCell>
                <TableCell align="center">2022-06-0200:00</TableCell>
                <TableCell align="center">공기조화설비</TableCell>
                <TableCell align="center">대합실공조기</TableCell>
                <TableCell align="center">좌 대합실공조기</TableCell>
                <TableCell align="center">좌측 공조실</TableCell>
                <TableCell align="center">EOCR</TableCell>
                <TableCell align="center">O</TableCell>
                <TableCell align="center">고장 및 기능장애</TableCell>
                <TableCell align="center">홍길동</TableCell>
                <TableCell align="center">종료</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">유지보수(교체)</TableCell>
                <TableCell align="center">124-L-AHU01-RF1</TableCell>
                <TableCell align="center">2022-06-0200:00</TableCell>
                <TableCell align="center">공기조화설비</TableCell>
                <TableCell align="center">대합실공조기</TableCell>
                <TableCell align="center">좌 대합실공조기</TableCell>
                <TableCell align="center">좌측 공조실</TableCell>
                <TableCell align="center">EOCR</TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center">고장 및 기능장애</TableCell>
                <TableCell align="center">홍길동 외1</TableCell>
                <TableCell align="center">작업중</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">대기</TableCell>
                <TableCell align="center">124-L-AHU01-RF1</TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center">공기조화설비</TableCell>
                <TableCell align="center">대합실공조기</TableCell>
                <TableCell align="center">좌 대합실공조기</TableCell>
                <TableCell align="center">좌측 공조실</TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center">대기</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">유지보수(교체)</TableCell>
                <TableCell align="center">124-L-AHU01-RF1</TableCell>
                <TableCell align="center">2022-06-0200:00</TableCell>
                <TableCell align="center">공기조화설비</TableCell>
                <TableCell align="center">대합실공조기</TableCell>
                <TableCell align="center">좌 대합실공조기</TableCell>
                <TableCell align="center">좌측 공조실</TableCell>
                <TableCell align="center">EOCR</TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center">고장 및 기능장애</TableCell>
                <TableCell align="center">홍길동</TableCell>
                <TableCell align="center">확인</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">유지보수(교체)</TableCell>
                <TableCell align="center">124-L-AHU01-RF1</TableCell>
                <TableCell align="center">2022-06-0200:00</TableCell>
                <TableCell align="center">공기조화설비</TableCell>
                <TableCell align="center">대합실공조기</TableCell>
                <TableCell align="center">좌 대합실공조기</TableCell>
                <TableCell align="center">좌측 공조실</TableCell>
                <TableCell align="center">EOCR</TableCell>
                <TableCell align="center">O</TableCell>
                <TableCell align="center">고장 및 기능장애</TableCell>
                <TableCell align="center">홍길동</TableCell>
                <TableCell align="center">종료</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">유지보수(교체)</TableCell>
                <TableCell align="center">124-L-AHU01-RF1</TableCell>
                <TableCell align="center">2022-06-0200:00</TableCell>
                <TableCell align="center">공기조화설비</TableCell>
                <TableCell align="center">대합실공조기</TableCell>
                <TableCell align="center">좌 대합실공조기</TableCell>
                <TableCell align="center">좌측 공조실</TableCell>
                <TableCell align="center">EOCR</TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center">고장 및 기능장애</TableCell>
                <TableCell align="center">홍길동</TableCell>
                <TableCell align="center">작업중</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">대기</TableCell>
                <TableCell align="center">124-L-AHU01-RF1</TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center">공기조화설비</TableCell>
                <TableCell align="center">대합실공조기</TableCell>
                <TableCell align="center">좌 대합실공조기</TableCell>
                <TableCell align="center">좌측 공조실</TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center">대기</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">유지보수(교체)</TableCell>
                <TableCell align="center">124-L-AHU01-RF1</TableCell>
                <TableCell align="center">2022-06-0200:00</TableCell>
                <TableCell align="center">공기조화설비</TableCell>
                <TableCell align="center">대합실공조기</TableCell>
                <TableCell align="center">좌 대합실공조기</TableCell>
                <TableCell align="center">좌측 공조실</TableCell>
                <TableCell align="center">EOCR</TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center">고장 및 기능장애</TableCell>
                <TableCell align="center">홍길동</TableCell>
                <TableCell align="center">확인</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">유지보수(교체)</TableCell>
                <TableCell align="center">124-L-AHU01-RF1</TableCell>
                <TableCell align="center">2022-06-0200:00</TableCell>
                <TableCell align="center">공기조화설비</TableCell>
                <TableCell align="center">대합실공조기</TableCell>
                <TableCell align="center">좌 대합실공조기</TableCell>
                <TableCell align="center">좌측 공조실</TableCell>
                <TableCell align="center">EOCR</TableCell>
                <TableCell align="center">O</TableCell>
                <TableCell align="center">고장 및 기능장애</TableCell>
                <TableCell align="center">홍길동</TableCell>
                <TableCell align="center">확인</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">유지보수(교체)</TableCell>
                <TableCell align="center">124-L-AHU01-RF1</TableCell>
                <TableCell align="center">2022-06-0200:00</TableCell>
                <TableCell align="center">공기조화설비</TableCell>
                <TableCell align="center">대합실공조기</TableCell>
                <TableCell align="center">좌 대합실공조기</TableCell>
                <TableCell align="center">좌측 공조실</TableCell>
                <TableCell align="center">EOCR</TableCell>
                <TableCell align="center">O</TableCell>
                <TableCell align="center">고장 및 기능장애</TableCell>
                <TableCell align="center">홍길동 외3</TableCell>
                <TableCell align="center">종료</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">유지보수(교체)</TableCell>
                <TableCell align="center">124-L-AHU01-RF1</TableCell>
                <TableCell align="center">2022-06-0200:00</TableCell>
                <TableCell align="center">공기조화설비</TableCell>
                <TableCell align="center">대합실공조기</TableCell>
                <TableCell align="center">좌 대합실공조기</TableCell>
                <TableCell align="center">좌측 공조실</TableCell>
                <TableCell align="center">EOCR</TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center">고장 및 기능장애</TableCell>
                <TableCell align="center">홍길동</TableCell>
                <TableCell align="center">작업중</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">대기</TableCell>
                <TableCell align="center">124-L-AHU01-RF1</TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center">공기조화설비</TableCell>
                <TableCell align="center">대합실공조기</TableCell>
                <TableCell align="center">좌 대합실공조기</TableCell>
                <TableCell align="center">좌측 공조실</TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center">대기</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <div className="btn_right"><Button variant="contained" color="error">고장/점검 등록</Button></div>
        <Paging />

      </ThemeProvider>
    </>
  )
}

export default Page21_3;