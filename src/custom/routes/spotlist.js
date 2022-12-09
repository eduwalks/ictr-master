import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import Navigationbar from 'custom/components/navigationbar';
import Paging from 'custom/components/table/paging';
import DialogSelect from 'custom/components/search/spotsearch';
// import { result } from 'lodash';

function SpotList () {
  function createData(result, date, division, equipnum, number, part, station, equipcompo1, equipcompo2, equipname, inspector) {
    let rowclass;
    if(result == '대기') {
      rowclass='result1';
    } else if(result == '유지보수') {
      rowclass='result2';
    } else if(result == '정상') {
      rowclass='result3';
    } else if(result == '주의관찰') {
      rowclass='result4';
    } else {
      rowclass=''
    }

    return { result, date, division, equipnum, number, part, station, equipcompo1, equipcompo2, equipname, inspector, rowclass };
  }

  
  const rows = [
    createData('정상','2022-06-0200:00','상시','124-L-AHU01-RF1','1호선','예술회관','부평','공기조화설비','직팽식공조기','좌대합실공조시-1','홍길동'),
    createData('유지보수','2022-06-0200:00','일일','124-L-AHU01-RF1','1호선','예술회관','부평','소방설비','직팽식공조기','좌대합실공조시-1','홍길동'),
    createData('정상','2022-06-0200:00','상시','124-L-AHU01-RF1','1호선','예술회관','부평','공기조화설비','직팽식공조기','좌대합실공조시-1','홍길동'),
    createData('유지보수','2022-06-0200:00','일일','124-L-AHU01-RF1','1호선','예술회관','부평','소방설비','직팽식공조기','좌대합실공조시-1','홍길동'),
    createData('유지보수','2022-06-0200:00','상시','124-L-AHU01-RF1','1호선','예술회관','부평','소방설비','직팽식공조기','좌대합실공조시-1','홍길동'),
    createData('대기','','상시','124-L-AHU01-RF1','1호선','예술회관','부평','승강장안전문설비','직팽식공조기','좌대합실공조시-1',''),
    createData('주의관찰','2022-06-0200:00','일일','124-L-AHU01-RF1','1호선','예술회관','부평','소방설비','직팽식공조기','좌대합실공조시-1','홍길동'),
    createData('주의관찰','2022-06-0200:00','상시','124-L-AHU01-RF1','1호선','예술회관','부평','소방설비','직팽식공조기','좌대합실공조시-1','홍길동'),
    createData('정상','2022-06-0200:00','상시','124-L-AHU01-RF1','1호선','예술회관','부평','공기조화설비','직팽식공조기','좌대합실공조시-1','홍길동'),
    createData('유지보수','2022-06-0200:00','일일','124-L-AHU01-RF1','1호선','예술회관','부평','소방설비','직팽식공조기','좌대합실공조시-1','홍길동'),
    createData('대기','','상시','124-L-AHU01-RF1','1호선','예술회관','부평','승강장안전문설비','직팽식공조기','좌대합실공조시-1',''),
    createData('유지보수','2022-06-0200:00','일일','124-L-AHU01-RF1','1호선','예술회관','부평','소방설비','직팽식공조기','좌대합실공조시-1','홍길동'),
    createData('주의관찰','2022-06-0200:00','일일','124-L-AHU01-RF1','1호선','예술회관','부평','소방설비','직팽식공조기','좌대합실공조시-1','홍길동'),
    createData('대기','','상시','124-L-AHU01-RF1','1호선','예술회관','부평','승강장안전문설비','직팽식공조기','좌대합실공조시-1','')
  ];

  return (
    <div className="monitering">
      <Navigationbar />
      <div className="sub_container">
        <div className='selectbox'>
          <DialogSelect></DialogSelect>
        </div>

        <TableContainer>
          <Table sx={{ minWidth: 1000 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">결과</TableCell>
                <TableCell align="center">일시</TableCell>
                <TableCell align="center">구분</TableCell>
                <TableCell align="center">설비번호</TableCell>
                <TableCell align="center">호선</TableCell>
                <TableCell align="center">파트</TableCell>
                <TableCell align="center">역사명</TableCell>
                <TableCell align="center">설비대분류</TableCell>
                <TableCell align="center">설비분류</TableCell>
                <TableCell align="center">설비명</TableCell>
                <TableCell align="center">점검자</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row) => (
                <TableRow hover key={row.name}
                  component={Link} to="/spotdetail"
                  className={row.rowclass}
                >
                  <TableCell align="center">{row.result}</TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell align="center">{row.division}</TableCell>
                  <TableCell align="center">{row.equipnum}</TableCell>
                  <TableCell align="center">{row.number}</TableCell>
                  <TableCell align="center">{row.part}</TableCell>
                  <TableCell align="center">{row.station}</TableCell>
                  <TableCell align="center">{row.equipcompo1}</TableCell>
                  <TableCell align="center">{row.equipcompo2}</TableCell>
                  <TableCell align="center">{row.equipname}</TableCell>
                  <TableCell align="center">{row.inspector}</TableCell>

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

export default SpotList;