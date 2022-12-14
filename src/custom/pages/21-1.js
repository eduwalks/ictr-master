import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import DialogSelect from "custom/components/search/mro_station_search1";

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paging from 'custom/components/table/paging';

const theme = createTheme({
  palette: {
    mode: "light",
  }
});

function Page21_1 () {

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
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
                <TableCell className="blue_th" align="center">운용상태</TableCell>
                <TableCell className="blue_th" align="center">최근점검</TableCell>
                <TableCell className="blue_th" align="center">설비번호</TableCell>
                <TableCell className="blue_th" align="center">설비분류</TableCell>
                <TableCell className="blue_th" align="center">설비명</TableCell>
                <TableCell className="blue_th" align="center">위치</TableCell>
                <TableCell className="blue_th" align="center">설비구성부</TableCell>
                <TableCell className="blue_th" align="center">등급</TableCell>
                <TableCell className="blue_th" align="center">게이트웹이</TableCell>
                <TableCell className="blue_th" align="center">IoT결함</TableCell>
                <TableCell className="blue_th" align="center">상태</TableCell>
                <TableCell className="blue_th" align="center"></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell align="center">890</TableCell>
                <TableCell align="center">운용중</TableCell>
                <TableCell align="center">2022-10-13 07:59</TableCell>
                <TableCell align="center">124-L-AHU01-RF1</TableCell>
                <TableCell align="center">대합실공조기</TableCell>
                <TableCell align="center">좌 대합실공조기</TableCell>
                <TableCell align="center">좌측 공조실</TableCell>
                <TableCell align="center">RF1(환기부)</TableCell>
                <TableCell align="center">A</TableCell>
                <TableCell align="center">3C7AAA9223A7</TableCell>
                <TableCell align="center">양호</TableCell>
                <TableCell align="center">상시점검</TableCell>
                <TableCell align="center"><span className="material-symbols-outlined">build</span></TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">889</TableCell>
                <TableCell align="center">운용중</TableCell>
                <TableCell align="center">2022-10-13 07:59</TableCell>
                <TableCell align="center">124-L-AHU01-RF1</TableCell>
                <TableCell align="center">대합실공조기</TableCell>
                <TableCell align="center">좌 대합실공조기</TableCell>
                <TableCell align="center">좌측 공조실</TableCell>
                <TableCell align="center">RF1(환기부)</TableCell>
                <TableCell align="center">A</TableCell>
                <TableCell align="center">3C7AAA9223A7</TableCell>
                <TableCell align="center">보통</TableCell>
                <TableCell align="center">상시점검</TableCell>
                <TableCell align="center"><span className="material-symbols-outlined">build</span></TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">888</TableCell>
                <TableCell align="center">운용중</TableCell>
                <TableCell align="center">2022-10-13 07:59</TableCell>
                <TableCell align="center">124-L-AHU01-RF1</TableCell>
                <TableCell align="center">대합실공조기</TableCell>
                <TableCell align="center">좌 대합실공조기</TableCell>
                <TableCell align="center">좌측 공조실</TableCell>
                <TableCell align="center">RF1(환기부)</TableCell>
                <TableCell align="center">A</TableCell>
                <TableCell align="center">3C7AAA9223A7</TableCell>
                <TableCell align="center">양호</TableCell>
                <TableCell align="center">정상</TableCell>
                <TableCell align="center"><span className="material-symbols-outlined">build</span></TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">887</TableCell>
                <TableCell align="center">운용중</TableCell>
                <TableCell align="center">2022-10-13 07:59</TableCell>
                <TableCell align="center">124-L-AHU01-RF1</TableCell>
                <TableCell align="center">대합실공조기</TableCell>
                <TableCell align="center">좌 대합실공조기</TableCell>
                <TableCell align="center">좌측 공조실</TableCell>
                <TableCell align="center">RF1(환기부)</TableCell>
                <TableCell align="center">A</TableCell>
                <TableCell align="center">3C7AAA9223A7</TableCell>
                <TableCell align="center">양호</TableCell>
                <TableCell align="center">경과</TableCell>
                <TableCell align="center"><span className="material-symbols-outlined">build</span></TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">886</TableCell>
                <TableCell align="center">운용중</TableCell>
                <TableCell align="center">2022-10-13 07:59</TableCell>
                <TableCell align="center">124-L-AHU01-RF1</TableCell>
                <TableCell align="center">대합실공조기</TableCell>
                <TableCell align="center">좌 대합실공조기</TableCell>
                <TableCell align="center">좌측 공조실</TableCell>
                <TableCell align="center">RF1(환기부)</TableCell>
                <TableCell align="center">A</TableCell>
                <TableCell align="center">3C7AAA9223A7</TableCell>
                <TableCell align="center">통신</TableCell>
                <TableCell align="center">임박</TableCell>
                <TableCell align="center"><span className="material-symbols-outlined">build</span></TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">885</TableCell>
                <TableCell align="center">운용중</TableCell>
                <TableCell align="center">2022-10-13 07:59</TableCell>
                <TableCell align="center">124-L-AHU01-RF1</TableCell>
                <TableCell align="center">대합실공조기</TableCell>
                <TableCell align="center">좌 대합실공조기</TableCell>
                <TableCell align="center">좌측 공조실</TableCell>
                <TableCell align="center">RF1(환기부)</TableCell>
                <TableCell align="center">A</TableCell>
                <TableCell align="center">3C7AAA9223A7</TableCell>
                <TableCell align="center">보통</TableCell>
                <TableCell align="center">상시점검</TableCell>
                <TableCell align="center"><span className="material-symbols-outlined">build</span></TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">884</TableCell>
                <TableCell align="center">운용중</TableCell>
                <TableCell align="center">2022-10-13 07:59</TableCell>
                <TableCell align="center">124-L-AHU01-RF1</TableCell>
                <TableCell align="center">대합실공조기</TableCell>
                <TableCell align="center">좌 대합실공조기</TableCell>
                <TableCell align="center">좌측 공조실</TableCell>
                <TableCell align="center">RF1(환기부)</TableCell>
                <TableCell align="center">A</TableCell>
                <TableCell align="center">3C7AAA9223A7</TableCell>
                <TableCell align="center">양호</TableCell>
                <TableCell align="center">경과</TableCell>
                <TableCell align="center"><span className="material-symbols-outlined">build</span></TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">883</TableCell>
                <TableCell align="center">운용중</TableCell>
                <TableCell align="center">2022-10-13 07:59</TableCell>
                <TableCell align="center">124-L-AHU01-RF1</TableCell>
                <TableCell align="center">대합실공조기</TableCell>
                <TableCell align="center">좌 대합실공조기</TableCell>
                <TableCell align="center">좌측 공조실</TableCell>
                <TableCell align="center">RF1(환기부)</TableCell>
                <TableCell align="center">A</TableCell>
                <TableCell align="center">3C7AAA9223A7</TableCell>
                <TableCell align="center">양호</TableCell>
                <TableCell align="center">정상</TableCell>
                <TableCell align="center"><span className="material-symbols-outlined">build</span></TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">882</TableCell>
                <TableCell align="center">운용중</TableCell>
                <TableCell align="center">2022-10-13 07:59</TableCell>
                <TableCell align="center">124-L-AHU01-RF1</TableCell>
                <TableCell align="center">대합실공조기</TableCell>
                <TableCell align="center">좌 대합실공조기</TableCell>
                <TableCell align="center">좌측 공조실</TableCell>
                <TableCell align="center">RF1(환기부)</TableCell>
                <TableCell align="center">A</TableCell>
                <TableCell align="center">3C7AAA9223A7</TableCell>
                <TableCell align="center">통신</TableCell>
                <TableCell align="center">임박</TableCell>
                <TableCell align="center"><span className="material-symbols-outlined">build</span></TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">881</TableCell>
                <TableCell align="center">운용중</TableCell>
                <TableCell align="center">2022-10-13 07:59</TableCell>
                <TableCell align="center">124-L-AHU01-RF1</TableCell>
                <TableCell align="center">대합실공조기</TableCell>
                <TableCell align="center">좌 대합실공조기</TableCell>
                <TableCell align="center">좌측 공조실</TableCell>
                <TableCell align="center">RF1(환기부)</TableCell>
                <TableCell align="center">A</TableCell>
                <TableCell align="center">3C7AAA9223A7</TableCell>
                <TableCell align="center">미흡</TableCell>
                <TableCell align="center">임박</TableCell>
                <TableCell align="center"><span className="material-symbols-outlined">build</span></TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">880</TableCell>
                <TableCell align="center">운용중</TableCell>
                <TableCell align="center">2022-10-13 07:59</TableCell>
                <TableCell align="center">124-L-AHU01-RF1</TableCell>
                <TableCell align="center">대합실공조기</TableCell>
                <TableCell align="center">좌 대합실공조기</TableCell>
                <TableCell align="center">좌측 공조실</TableCell>
                <TableCell align="center">RF1(환기부)</TableCell>
                <TableCell align="center">A</TableCell>
                <TableCell align="center">3C7AAA9223A7</TableCell>
                <TableCell align="center">결함</TableCell>
                <TableCell align="center">정상</TableCell>
                <TableCell align="center"><span className="material-symbols-outlined">build</span></TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">879</TableCell>
                <TableCell align="center">운용중</TableCell>
                <TableCell align="center">2022-10-13 07:59</TableCell>
                <TableCell align="center">124-L-AHU01-RF1</TableCell>
                <TableCell align="center">대합실공조기</TableCell>
                <TableCell align="center">좌 대합실공조기</TableCell>
                <TableCell align="center">좌측 공조실</TableCell>
                <TableCell align="center">RF1(환기부)</TableCell>
                <TableCell align="center">A</TableCell>
                <TableCell align="center">3C7AAA9223A7</TableCell>
                <TableCell align="center">불량</TableCell>
                <TableCell align="center">주의관찰</TableCell>
                <TableCell align="center"><span className="material-symbols-outlined">build</span></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Paging />

      </ThemeProvider>
    </>
  )
}

export default Page21_1;