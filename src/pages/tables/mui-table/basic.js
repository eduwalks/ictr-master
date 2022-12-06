// material-ui
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// project imports
import MainCard from 'components/MainCard';

// table data
function createData(time, number, part, station, equipname, equipstate, condition) {
  return { time, number, part, station, equipname, equipstate, condition };
}

const rows = [
  createData('2022-06-02 00:00', '1호선', '예술회관', '부평', '좌대합실공조시-1', '송풍기 V벨트 결함', '불량'),
  createData('2022-06-02 00:00', '1호선', '예술회관', '부평', '좌대합실공조시-1', '송풍기 V벨트 결함', '불량'),
  createData('2022-06-02 00:00', '1호선', '예술회관', '부평', '좌대합실공조시-1', '송풍기 V벨트 결함', '불량'),
  createData('2022-06-02 00:00', '1호선', '예술회관', '부평', '좌대합실공조시-1', '송풍기 V벨트 결함', '불량'),
  createData('2022-06-02 00:00', '1호선', '예술회관', '부평', '좌대합실공조시-1', '송풍기 V벨트 결함', '불량'),
  createData('2022-06-02 00:00', '1호선', '예술회관', '부평', '좌대합실공조시-1', '송풍기 V벨트 결함', '불량'),
  createData('2022-06-02 00:00', '1호선', '예술회관', '부평', '좌대합실공조시-1', '송풍기 V벨트 결함', '불량'),
  createData('2022-06-02 00:00', '1호선', '예술회관', '부평', '좌대합실공조시-1', '송풍기 V벨트 결함', '불량')
];

// ==============================|| TABLE - BASIC ||============================== //

export default function TableBasic() {
  return (
    <MainCard content={false} title="설비 상태목록">
      {/* table */}
      <TableContainer>
        <Table sx={{ minWidth: 350 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ pl: 3 }}>점검일</TableCell>
              <TableCell align="center">호선</TableCell>
              <TableCell align="center">파트</TableCell>
              <TableCell align="center">역사명</TableCell>
              <TableCell align="center">설비명</TableCell>
              <TableCell align="center">설비상태</TableCell>
              <TableCell align="center">상태</TableCell>
              <TableCell align="center" sx={{ pr: 3 }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow hover key={row.name}>
                <TableCell sx={{ pl: 3 }} component="th" scope="row">
                  {row.time}
                </TableCell>
                <TableCell align="center">{row.number}</TableCell>
                <TableCell align="center">{row.part}</TableCell>
                <TableCell align="center">{row.station}</TableCell>
                <TableCell align="center">{row.equipname}</TableCell>
                <TableCell align="center">{row.equipstate}</TableCell>
                <TableCell align="center">{row.condition}</TableCell>
                <TableCell sx={{ pr: 3 }} align="center">
                  <span className="material-symbols-outlined">build</span></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainCard>
  );
}
