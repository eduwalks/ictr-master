import PropTypes from 'prop-types';
import { useState } from 'react';
import { CardContent, Button, Modal, Stack, Box, Tab, Tabs, Table, TableBody, TableCell, TableContainer, TableRow, TextField } from '@mui/material';

import MainCard from 'components/MainCard';
// import InputLabel from '@mui/material/InputLabel';

import TodayIcon from '@mui/icons-material/Today';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DateRangeIcon from '@mui/icons-material/DateRange';
import EventNoteIcon from '@mui/icons-material/EventNote';
import BasicDatePicker from '../picker/DatePicker';

// ==============================|| TAB PANEL ||============================== //

function TabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box sx={{ pt: 2 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number,
  index: PropTypes.number
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

export function MroCheck() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setValue1] = useState(0);
  const handleChange = (event, newValue) => {
    setValue1(newValue);
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        정기점검
      </Button>

      <Modal className="pop_box" open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <MainCard title="정기점검" modal darkTitle content={false}>
 
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} style={{marginLeft:"10px"}}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="일일" icon={<TodayIcon />} iconPosition="start" {...a11yProps(0)} />
                <Tab label="주간" icon={<DateRangeIcon />} iconPosition="start" {...a11yProps(1)} />
                <Tab label="월간" icon={<CalendarMonthIcon />} iconPosition="start" {...a11yProps(2)} />
                <Tab label="분기" icon={<EventNoteIcon />} iconPosition="start" {...a11yProps(3)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <CardContent>
                <TableContainer>
                  <Table sx={{ minWidth: 950}} aria-label="simple table" className="same_width pop_table">
                    <TableBody>
                      <TableRow>
                        <TableCell className="th">호선</TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell className="th">파트</TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell className="th">역사</TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="th">설비대분류</TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell className="th">설비중분류</TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell className="th">설비분류</TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="th">설비명</TableCell>
                        <TableCell colspan="3"><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell className="th">설비번호</TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="th">점검대상일</TableCell>
                        <TableCell className="center"><BasicDatePicker /></TableCell>
                        <TableCell className="th">점검자</TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell className="th">점검일자</TableCell>
                        <TableCell className="center"><BasicDatePicker /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="th th1">점검항목</TableCell>
                        <TableCell colspan="3" className="th th1">점검내용</TableCell>
                        <TableCell className="th th1">점검결과</TableCell>
                        <TableCell className="th th1">비고</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell colspan="3"><TextField id="outlined-basic" sx={{ m: 1, minWidth: '97%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell colspan="3"><TextField id="outlined-basic" sx={{ m: 1, minWidth: '97%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell colspan="3"><TextField id="outlined-basic" sx={{ m: 1, minWidth: '97%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell colspan="3"><TextField id="outlined-basic" sx={{ m: 1, minWidth: '97%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell colspan="3"><TextField id="outlined-basic" sx={{ m: 1, minWidth: '97%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </TabPanel>

            <TabPanel value={value} index={1}>
              <CardContent>
                <TableContainer>
                  <Table sx={{ minWidth: 950}} aria-label="simple table" className="same_width pop_table">
                    <TableBody>
                      <TableRow>
                        <TableCell className="th">호선</TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell className="th">파트</TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell className="th">역사</TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="th">설비대분류</TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell className="th">설비중분류</TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell className="th">설비분류</TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="th">설비명</TableCell>
                        <TableCell colspan="3"><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell className="th">설비번호</TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="th">점검대상일</TableCell>
                        <TableCell className="center"><BasicDatePicker /></TableCell>
                        <TableCell className="th">점검자</TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell className="th">점검일자</TableCell>
                        <TableCell className="center"><BasicDatePicker /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="th th1">점검항목</TableCell>
                        <TableCell colspan="3" className="th th1">점검내용</TableCell>
                        <TableCell className="th th1">점검결과</TableCell>
                        <TableCell className="th th1">비고</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell colspan="3"><TextField id="outlined-basic" sx={{ m: 1, minWidth: '97%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell colspan="3"><TextField id="outlined-basic" sx={{ m: 1, minWidth: '97%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell colspan="3"><TextField id="outlined-basic" sx={{ m: 1, minWidth: '97%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell colspan="3"><TextField id="outlined-basic" sx={{ m: 1, minWidth: '97%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell colspan="3"><TextField id="outlined-basic" sx={{ m: 1, minWidth: '97%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </TabPanel>

            <TabPanel value={value} index={2}>
              <CardContent>
                <TableContainer>
                  <Table sx={{ minWidth: 950}} aria-label="simple table" className="same_width pop_table">
                    <TableBody>
                      <TableRow>
                        <TableCell className="th">호선</TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell className="th">파트</TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell className="th">역사</TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="th">설비대분류</TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell className="th">설비중분류</TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell className="th">설비분류</TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="th">설비명</TableCell>
                        <TableCell colspan="3"><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell className="th">설비번호</TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="th">점검대상일</TableCell>
                        <TableCell className="center"><BasicDatePicker /></TableCell>
                        <TableCell className="th">점검자</TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell className="th">점검일자</TableCell>
                        <TableCell className="center"><BasicDatePicker /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="th th1">점검항목</TableCell>
                        <TableCell colspan="3" className="th th1">점검내용</TableCell>
                        <TableCell className="th th1">점검결과</TableCell>
                        <TableCell className="th th1">비고</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell colspan="3"><TextField id="outlined-basic" sx={{ m: 1, minWidth: '97%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell colspan="3"><TextField id="outlined-basic" sx={{ m: 1, minWidth: '97%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell colspan="3"><TextField id="outlined-basic" sx={{ m: 1, minWidth: '97%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell colspan="3"><TextField id="outlined-basic" sx={{ m: 1, minWidth: '97%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell colspan="3"><TextField id="outlined-basic" sx={{ m: 1, minWidth: '97%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </TabPanel>

            <TabPanel value={value} index={3}>
              <CardContent>
                <TableContainer>
                  <Table sx={{ minWidth: 950}} aria-label="simple table" className="same_width pop_table">
                    <TableBody>
                      <TableRow>
                        <TableCell className="th">호선</TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell className="th">파트</TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell className="th">역사</TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="th">설비대분류</TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell className="th">설비중분류</TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell className="th">설비분류</TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="th">설비명</TableCell>
                        <TableCell colspan="3"><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell className="th">설비번호</TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="th">점검대상일</TableCell>
                        <TableCell className="center"><BasicDatePicker /></TableCell>
                        <TableCell className="th">점검자</TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell className="th">점검일자</TableCell>
                        <TableCell className="center"><BasicDatePicker /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="th th1">점검항목</TableCell>
                        <TableCell colspan="3" className="th th1">점검내용</TableCell>
                        <TableCell className="th th1">점검결과</TableCell>
                        <TableCell className="th th1">비고</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell colspan="3"><TextField id="outlined-basic" sx={{ m: 1, minWidth: '97%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell colspan="3"><TextField id="outlined-basic" sx={{ m: 1, minWidth: '97%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell colspan="3"><TextField id="outlined-basic" sx={{ m: 1, minWidth: '97%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell colspan="3"><TextField id="outlined-basic" sx={{ m: 1, minWidth: '97%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell colspan="3"><TextField id="outlined-basic" sx={{ m: 1, minWidth: '97%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                        <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </TabPanel>
          </Box>

          <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ px: 2.5, py: 2 }}>
            <Button variant="contained" size="small">등록</Button>
            <Button variant="contained" color="success" size="small">수정</Button>
            <Button variant="contained" color="error" size="small">삭제</Button>
            {/* <Button color="error" size="small" onClick={handleClose}>
              취소
            </Button> */}
          </Stack>
        </MainCard>
      </Modal>
    </>
  )
}

export default MroCheck;
