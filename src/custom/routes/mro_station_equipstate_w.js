import React from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Navigationbar from "custom/components/navigationbarCe";
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import MroStation1 from 'custom/pages/mro_station1';
import MroStation2 from 'custom/pages/mro_station2';
import MroStation3 from 'custom/pages/mro_station3';

function MroStationEquipstate() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="maintenance">
    <Navigationbar />
    
    <div className="sub_container_ce" style={{backgroundColor:"#fff"}}>
      <div className="mro_search">
        <h5 className="mro_m_left">* 1호선 &gt; 계산 &gt; (124)인천시청</h5>

        <TableContainer className="mro_m_right">
          <Table sx={{ minWidth: 400 }} aria-label="simple table" className="maint_table same_width">
            <TableBody>
              <TableRow>
                <TableCell className="th" align="center">유지관리자</TableCell>
                <TableCell align="center">홍길동</TableCell>
                <TableCell className="th" align="center">소속</TableCell>
                <TableCell align="center">계산파트</TableCell>
                <TableCell className="th" align="center">직급</TableCell>
                <TableCell align="center">과장</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="th" align="center">선임일</TableCell>
                <TableCell align="center">2021-01-01</TableCell>
                <TableCell className="th" align="center">교육이수일</TableCell>
                <TableCell align="center">2020-12-05</TableCell>
                <TableCell className="th" align="center"></TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <Box sx={{ width: '100%', typography: 'body1' }} style={{marginTop:"20px"}}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="설비목록" value="1" />
              <Tab label="점검내역" value="2" />
              <Tab label="유지보수 내역" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1"><MroStation1 /></TabPanel>
          <TabPanel value="2"><MroStation2 /></TabPanel>
          <TabPanel value="3"><MroStation3 /></TabPanel>
        </TabContext>
      </Box>
    </div>
    </div>
  )
}

export default MroStationEquipstate;