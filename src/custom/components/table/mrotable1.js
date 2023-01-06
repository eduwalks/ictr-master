import * as React from 'react';
import { Link } from "react-router-dom";
import { NavLink } from "react-bootstrap";

// material-ui
import Chip from '@mui/material/Chip';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// project imports
import MainCard from 'components/MainCard';
import Alert1 from 'custom/components/pop/alert1';

// table columns
const columns = [
  { id: 'division', label: '점검구분', minWidth: 170 },
  { id: 'number', label: '호선', minWidth: 100 },
  { id: 'part', label: '파트', minWidth: 100 },
  { id: 'station', label: '역사명', minWidth: 100 },
  { id: 'sort', label: '설비대분류', minWidth: 100 },
  { id: 'equipname', label: '설비명', minWidth: 100 },
  { id: 'equipnum', label: '설비번호', minWidth: 100 },
  { id: 'condition', label: 'IoT상태', minWidth: 100 },
  { id: 'view', label: '', minWidth: 100 }
];

// table data
function createData1(division, number, part, station, sort, equipname, equipnum, condition) {
  let rowclass1;
  if(division == '상시점검') {
    rowclass1='condition1';
  } else if(division == '경과') {
    rowclass1='condition2';
  } else if(division == '임박') {
    rowclass1='condition3';
  } else if(division == '주의관찰') {
    rowclass1='condition4';
  } else {
    rowclass1=''
  }

  let rowclass2;
  if(condition == '불량') {
    rowclass2='condition1';
  } else if(condition == '결함') {
    rowclass2='condition2';
  } else if(condition == '미흡') {
    rowclass2='condition3';
  } else if(condition == '통신') {
    rowclass2='condition4';
  } else {
    rowclass2=''
  }
  return { division, number, part, station, sort, equipname, equipnum, condition, rowclass1, rowclass2 };
}

const rows1 = [
  createData1('상시점검', '1호선', '예술회관', '부평', '공기조화설비', '좌대합실공조시-1', '124-L-AHU01-RF1', '불량'),
  createData1('상시점검', '1호선', '예술회관', '부평', '소방설비', '좌대합실공조시-1', '124-L-AHU01-RF1', '결함'),
  createData1('상시점검', '1호선', '예술회관', '부평', '오/배수 통기 및 우수배수설비', '좌대합실공조시-1', '124-L-AHU01-RF1', '불량'),
  createData1('상시점검', '1호선', '예술회관', '부평', '공기조화설비', '좌대합실공조시-1', '124-L-AHU01-RF1', '불량'),
  createData1('상시점검', '1호선', '예술회관', '부평', '소방설비', '좌대합실공조시-1', '124-L-AHU01-RF1', '결함'),
  createData1('상시점검', '1호선', '예술회관', '부평', '오/배수 통기 및 우수배수설비', '좌대합실공조시-1', '124-L-AHU01-RF1', '불량'),
  createData1('경과', '1호선', '예술회관', '부평', '급수/급탕설비', '좌대합실공조시-1', '124-L-AHU01-RF1', '미흡'),
  createData1('경과', '1호선', '예술회관', '부평', '위생기구설비', '좌대합실공조시-1', '124-L-AHU01-RF1', '미흡'),
  createData1('경과', '1호선', '예술회관', '부평', '급수/급탕설비', '좌대합실공조시-1', '124-L-AHU01-RF1', '미흡'),
  createData1('경과', '1호선', '예술회관', '부평', '위생기구설비', '좌대합실공조시-1', '124-L-AHU01-RF1', '미흡'),
  createData1('임박', '1호선', '예술회관', '부평', '승강설비', '좌대합실공조시-1', '124-L-AHU01-RF1', '통신'),
  createData1('임박', '1호선', '예술회관', '부평', '승강설비', '좌대합실공조시-1', '124-L-AHU01-RF1', '통신'),
  createData1('임박', '1호선', '예술회관', '부평', '승강설비', '좌대합실공조시-1', '124-L-AHU01-RF1', '통신'),
  createData1('임박', '1호선', '예술회관', '부평', '승강설비', '좌대합실공조시-1', '124-L-AHU01-RF1', '통신'),
  createData1('주의관찰', '1호선', '예술회관', '부평', '자동제어설비', '좌대합실공조시-1', '124-L-AHU01-RF1', '미흡'),
  createData1('주의관찰', '1호선', '예술회관', '부평', '자동제어설비', '좌대합실공조시-1', '124-L-AHU01-RF1', '미흡'),
  createData1('주의관찰', '1호선', '예술회관', '부평', '급수/급탕설비', '좌대합실공조시-1', '124-L-AHU01-RF1', '미흡'),
  createData1('주의관찰', '1호선', '예술회관', '부평', '자동제어설비', '좌대합실공조시-1', '124-L-AHU01-RF1', '미흡'),
  createData1('주의관찰', '1호선', '예술회관', '부평', '자동제어설비', '좌대합실공조시-1', '124-L-AHU01-RF1', '미흡')
]

function MroTable1() {
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
          <Chip label="점검 대상 목록" style={{backgroundColor:"#257DDC"}} />
          <NavLink as={Link} to="/mro_equiplist" className='more_btn'>더보기 +</NavLink>
        </div>
        <TableContainer sx={{ maxHeight: 340 }}>
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
                    let className = null; 
                    if(column.id == 'condition') {
                      className = row.rowclass2;
                    }else if(column.id == 'division') {
                      className = row.rowclass1;
                    }
                    if(className != null) {
                      return (
                        <TableCell key={column.id} align={column.align} className={className}>
                          <Link to="/mro_stationstate">
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                          </Link>
                        </TableCell>
                      );
                    } else if(column.id == 'view') {
                      return (
                        <TableCell key={column.id} align="center">
                          <Alert1 />
                        </TableCell>
                      );
                    } else {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <Link to="/mro_stationstate">
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

export default MroTable1;
