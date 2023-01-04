import * as React from 'react';
import { Link } from "react-router-dom";
import { NavLink } from "react-bootstrap";

// material-ui
import Chip from '@mui/material/Chip';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// project imports
import MainCard from 'components/MainCard';
import Mro from '../pop/mro';

// table columns
const columns = [
  { id: 'time', label: '일시', minWidth: 170 },
  { id: 'division', label: '구분', minWidth: 170 },
  { id: 'sort', label: '설비대분류', minWidth: 100 },
  { id: 'equipname', label: '설비명', minWidth: 100 },
  { id: 'inspector', label: '점검자', minWidth: 100 },
  { id: 'result', label: '결과', minWidth: 100 }
];

// table data
function createData1(time, division, sort, equipname, inspector, result) {
  let rowclass;
  let spotdetail;

  if(result == '대기') {
    rowclass='condition1';
    spotdetail='/partstation';
  } else if(result == '유지보수') {
    rowclass='condition5';
    spotdetail='/spotdetail3';
  } else if(result == '주의관찰') {
    rowclass='condition2';
    spotdetail='/spotdetail2';
  } else if(result == '정상') {
    rowclass='condition6';
    spotdetail='/partstation';
  } else {
    rowclass=''
  }

  return { time, division, sort, equipname, inspector, result, rowclass, spotdetail };
}

const rows1 = [
  createData1('　', '상시', '승강장안전문설비', '좌대합실공조시-1', '　', '대기'),
  createData1('　', '상시', '승강장안전문설비', '좌대합실공조시-1', '　', '대기'),
  createData1('　', '상시', '승강장안전문설비', '좌대합실공조시-1', '　', '대기'),
  createData1('　', '상시', '승강장안전문설비', '좌대합실공조시-1', '　', '대기'),
  createData1('　', '상시', '승강장안전문설비', '좌대합실공조시-1', '　', '대기'),
  createData1('　', '상시', '승강장안전문설비', '좌대합실공조시-1', '　', '대기'),
  createData1('2022-06-02 00:07', '상시', '공기조화설비', '좌대합실공조시-1', '홍길동', '정상'),
  createData1('2022-06-02 00:07', '상시', '공기조화설비', '좌대합실공조시-1', '홍길동', '정상'),
  createData1('2022-06-02 00:07', '상시', '공기조화설비', '좌대합실공조시-1', '홍길동', '정상'),
  createData1('2022-06-02 00:07', '상시', '공기조화설비', '좌대합실공조시-1', '홍길동', '정상'),
  createData1('2022-06-02 00:07', '일일', '소방설비', '좌대합실공조시-1', '홍길동', '주의관찰'),
  createData1('2022-06-02 00:07', '상시', '소방설비', '좌대합실공조시-1', '홍길동', '주의관찰'),
  createData1('2022-06-02 00:07', '일일', '소방설비', '좌대합실공조시-1', '홍길동', '주의관찰'),
  createData1('2022-06-02 00:07', '상시', '소방설비', '좌대합실공조시-1', '홍길동', '주의관찰'),
  createData1('2022-06-02 00:07', '상시', '소방설비', '좌대합실공조시-1', '홍길동', '주의관찰'),
  createData1('2022-06-02 00:07', '일일', '소방설비', '좌대합실공조시-1', '홍길동', '유지보수'),
  createData1('2022-06-02 00:07', '상시', '소방설비', '좌대합실공조시-1', '홍길동', '유지보수'),
  createData1('2022-06-02 00:07', '일일', '소방설비', '좌대합실공조시-1', '홍길동', '유지보수'),
  createData1('2022-06-02 00:07', '상시', '소방설비', '좌대합실공조시-1', '홍길동', '유지보수'),
  createData1('2022-06-02 00:07', '상시', '소방설비', '좌대합실공조시-1', '홍길동', '유지보수')
];

function MainTable33() {
  const [page] = React.useState(0);
  const [rowsPerPage] = React.useState(20);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event?.target?.value);
  //   setPage(0);
  // };

  return (
    <>
      <MainCard content={false}>
        {/* table */}
        <div className='more'>
          <Chip label="현장(상시)점검 내역" color="success" />
          <NavLink as={Link} to="/SpotList" className='more_btn'>더보기 +</NavLink>
        </div>
        <TableContainer sx={{ maxHeight: 197 }}>
          <Table stickyHeader aria-label="sticky table" className="sticky_table list_table2">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell sx={{ minWidth: column.minWidth, position: 'sticky !important' }} key={column.id} align={column.align}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows1.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <TableRow sx={{ py: 3 }} hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    if(column.id == 'result') {
                      return (
                        <TableCell key={column.id} align={column.align} className={row.rowclass}>
                          <Link to={row.spotdetail}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                          </Link>
                        </TableCell>
                      );
                    } else if(column.id == 'view') {
                      return (
                        <TableCell key={column.id} align="center">
                          <Mro />
                        </TableCell>
                      );
                    } else {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <Link to={row.spotdetail}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                          </Link>
                        </TableCell>
                      );
                    }
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <Divider /> */}
        {/* table pagination */}
        {/* <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
      </MainCard>
    </>
  );
}

export default MainTable33;
