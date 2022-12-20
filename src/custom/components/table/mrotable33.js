import * as React from 'react';
import { Link } from "react-router-dom";
import { NavLink } from "react-bootstrap";

// material-ui
import Chip from '@mui/material/Chip';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// project imports
import MainCard from 'components/MainCard';

// table columns
const columns = [
  { id: 'time', label: '일시', minWidth: 170 },
  { id: 'station', label: '역사명', minWidth: 100 },
  { id: 'equipname', label: '설비명', minWidth: 100 },
  { id: 'product', label: '품명', minWidth: 100 },
  { id: 'division', label: '구분', minWidth: 100 },
  { id: 'analysis', label: '분석유형', minWidth: 100 }
];

// table data
function createData1(time,station, equipname, product, division, analysis) {
  return { time, station, equipname, product, division, analysis };
}

const rows1 = [
  createData1('2022-06-02 00:07', '부평', '우 직팽식공조기', 'EOCR', '유지보수(교체)', '고장 및 기능장애'),
  createData1('2022-06-02 00:07', '부평', '우 직팽식공조기', 'EOCR', '유지보수(교체)', '고장 및 기능장애'),
  createData1('2022-06-02 00:07', '부평', '우 직팽식공조기', 'EOCR', '유지보수(교체)', '고장 및 기능장애'),
  createData1('2022-06-02 00:07', '부평', '우 직팽식공조기', 'EOCR', '유지보수(교체)', '고장 및 기능장애'),
  createData1('2022-06-02 00:07', '부평', '우 직팽식공조기', 'EOCR', '유지보수(교체)', '고장 및 기능장애'),
  createData1('2022-06-02 00:07', '부평', '우 직팽식공조기', 'EOCR', '유지보수(교체)', '고장 및 기능장애'),
  createData1('2022-06-02 00:07', '부평', '우 직팽식공조기', 'EOCR', '유지보수(교체)', '고장 및 기능장애'),
  createData1('2022-06-02 00:07', '부평', '우 직팽식공조기', 'EOCR', '유지보수(교체)', '고장 및 기능장애'),
  createData1('2022-06-02 00:07', '부평', '우 직팽식공조기', 'EOCR', '유지보수(교체)', '고장 및 기능장애'),
  createData1('2022-06-02 00:07', '부평', '우 직팽식공조기', 'EOCR', '유지보수(교체)', '고장 및 기능장애'),
  createData1('2022-06-02 00:07', '부평', '우 직팽식공조기', 'EOCR', '유지보수(교체)', '고장 및 기능장애'),
  createData1('2022-06-02 00:07', '부평', '우 직팽식공조기', 'EOCR', '유지보수(교체)', '고장 및 기능장애'),
  createData1('2022-06-02 00:07', '부평', '우 직팽식공조기', 'EOCR', '유지보수(교체)', '고장 및 기능장애'),
  createData1('2022-06-02 00:07', '부평', '우 직팽식공조기', 'EOCR', '유지보수(교체)', '고장 및 기능장애'),
  createData1('2022-06-02 00:07', '부평', '우 직팽식공조기', 'EOCR', '유지보수(교체)', '고장 및 기능장애'),
  createData1('2022-06-02 00:07', '부평', '우 직팽식공조기', 'EOCR', '유지보수(교체)', '고장 및 기능장애'),
  createData1('2022-06-02 00:07', '부평', '우 직팽식공조기', 'EOCR', '유지보수(교체)', '고장 및 기능장애'),
  createData1('2022-06-02 00:07', '부평', '우 직팽식공조기', 'EOCR', '유지보수(교체)', '고장 및 기능장애'),
  createData1('2022-06-02 00:07', '부평', '우 직팽식공조기', 'EOCR', '유지보수(교체)', '고장 및 기능장애'),
  createData1('2022-06-02 00:07', '부평', '우 직팽식공조기', 'EOCR', '유지보수(교체)', '고장 및 기능장애'),
];

function MroTable33() {
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
      <MainCard content={false} style={{marginTop:"10px"}}>
        {/* table */}
        <div className='more'>
          <Chip label="최근 유지보수내역" color="success" />
          <NavLink as={Link} to="/mro_list" className='more_btn'>더보기 +</NavLink>
        </div>
        <TableContainer sx={{ maxHeight: 190 }}>
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

                    return (
                      <TableCell key={column.id} align={column.align} className="sticky_table_td">
                        <Link to="/mro_checkdetail">
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </Link>
                      </TableCell>
                    );
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

export default MroTable33;
