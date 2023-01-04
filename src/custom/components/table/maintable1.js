import * as React from 'react';
import { Link } from "react-router-dom";
import { NavLink } from "react-bootstrap";

// material-ui
import Chip from '@mui/material/Chip';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// project imports
import MainCard from 'components/MainCard';
import Alert from 'custom/components/pop/alert';

// table columns
const columns = [
  { id: 'time', label: '점검일', minWidth: 170 },
  { id: 'number', label: '호선', minWidth: 100 },
  { id: 'part', label: '파트', minWidth: 100 },
  { id: 'station', label: '역사명', minWidth: 100 },
  { id: 'equipname', label: '설비명', minWidth: 100 },
  { id: 'equipstate', label: '설비상태', minWidth: 100 },
  { id: 'condition', label: '상태', minWidth: 100 },
  { id: 'code', label: '고장신고/점검요청', minWidth: 100 }
];

// table data
function createData1(time, number, part, station, equipname, equipstate, condition) {
  let rowclass;
  if(condition == '불량') {
    rowclass='condition1';
  } else if(condition == '결함') {
    rowclass='condition2';
  } else if(condition == '미흡') {
    rowclass='condition3';
  } else if(condition == '통신') {
    rowclass='condition4';
  } else {
    rowclass=''
  }
  return { time, number, part, station, equipname, equipstate, condition, rowclass };
}

const rows1 = [
  createData1('2022-06-02 00:07', '1호선', '예술회관', '부평', '좌대합실공조시-1', '송풍기 V벨트 결함', '불량'),
  createData1('2022-06-02 00:00', '1호선', '예술회관', '부평', '좌대합실공조시-1', '송풍기 V벨트 결함', '불량'),
  createData1('2022-06-02 00:00', '1호선', '예술회관', '부평', '좌대합실공조시-1', '송풍기 V벨트 결함', '불량'),
  createData1('2022-06-02 00:00', '1호선', '예술회관', '부평', '좌대합실공조시-1', '송풍기 V벨트 결함', '불량'),
  createData1('2022-06-02 00:00', '1호선', '예술회관', '부평', '좌대합실공조시-1', '송풍기 V벨트 결함', '결함'),
  createData1('2022-06-02 00:07', '1호선', '예술회관', '부평', '좌대합실공조시-1', '송풍기 V벨트 결함', '결함'),
  createData1('2022-06-02 00:00', '1호선', '예술회관', '부평', '좌대합실공조시-1', '송풍기 V벨트 결함', '결함'),
  createData1('2022-06-02 00:00', '1호선', '예술회관', '부평', '좌대합실공조시-1', '송풍기 V벨트 결함', '결함'),
  createData1('2022-06-02 00:00', '1호선', '예술회관', '부평', '좌대합실공조시-1', '송풍기 V벨트 결함', '미흡'),
  createData1('2022-06-02 00:00', '1호선', '예술회관', '부평', '좌대합실공조시-1', '송풍기 V벨트 결함', '미흡'),
  createData1('2022-06-02 00:07', '1호선', '예술회관', '부평', '좌대합실공조시-1', '송풍기 V벨트 결함', '미흡'),
  createData1('2022-06-02 00:00', '1호선', '예술회관', '부평', '좌대합실공조시-1', '송풍기 V벨트 결함', '미흡'),
  createData1('2022-06-02 00:00', '1호선', '예술회관', '부평', '좌대합실공조시-1', '송풍기 V벨트 결함', '통신'),
  createData1('2022-06-02 00:00', '1호선', '예술회관', '부평', '좌대합실공조시-1', '송풍기 V벨트 결함', '통신'),
  createData1('2022-06-02 00:00', '1호선', '예술회관', '부평', '좌대합실공조시-1', '송풍기 V벨트 결함', '통신'),
  createData1('2022-06-02 00:07', '1호선', '예술회관', '부평', '좌대합실공조시-1', '송풍기 V벨트 결함', '통신'),
  createData1('2022-06-02 00:00', '1호선', '예술회관', '부평', '좌대합실공조시-1', '송풍기 V벨트 결함', '통신'),
  createData1('2022-06-02 00:00', '1호선', '예술회관', '부평', '좌대합실공조시-1', '송풍기 V벨트 결함', '통신'),
  createData1('2022-06-02 00:00', '1호선', '예술회관', '부평', '좌대합실공조시-1', '송풍기 V벨트 결함', '통신'),
  createData1('2022-06-02 00:00', '1호선', '예술회관', '부평', '좌대합실공조시-1', '송풍기 V벨트 결함', '통신')
];

function MainTable1() {
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
          <Chip label="설비 상태목록" color="info" />
          <NavLink as={Link} to="/equipList" className='more_btn'>더보기 +</NavLink>
        </div>
        <TableContainer sx={{ maxHeight: 229 }}>
          <Table stickyHeader aria-label="sticky table" className="sticky_table">
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
                    if(column.id == 'condition') {
                      return (
                        <TableCell key={column.id} align={column.align} className={row.rowclass}>
                          <Link to="/equipdetail">
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                          </Link>
                        </TableCell>
                      );
                    } else if(column.id == 'code') {
                      return (
                        <TableCell key={column.id} align="center">
                          <Alert />
                        </TableCell>
                      );
                    } else {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <Link to="/equipdetail">
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

export default MainTable1;
