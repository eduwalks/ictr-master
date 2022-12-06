import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// project import
import { Row, Col } from 'react-bootstrap';
import MainCard from 'components/MainCard';
import SimplePie from '../chart/simplepie';

// assets
import { BookOutlined, /* FileImageOutlined */ UserOutlined, UsergroupAddOutlined } from '@ant-design/icons';

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

function createData1(item, unit, value, note) {
  return { item, unit, value, note };
}

const rows1 = [
  createData1('열교환기(코일)능력(가열/냉각)', 'kw', '', ''),
  createData1('열교환기(코일)능력(가열/냉각)', 'kw', '', ''),
  createData1('열교환기(코일)능력(가열/냉각)', 'kw', '', ''),
  createData1('열교환기(코일)능력(가열/냉각)', 'kw', '', ''),
  createData1('열교환기(코일)능력(가열/냉각)', 'kw', '', ''),
  createData1('열교환기(코일)능력(가열/냉각)', 'kw', '', ''),
  createData1('열교환기(코일)능력(가열/냉각)', 'kw', '', ''),
  createData1('열교환기(코일)능력(가열/냉각)', 'kw', '', ''),
  createData1('열교환기(코일)능력(가열/냉각)', 'kw', '', ''),
  createData1('열교환기(코일)능력(가열/냉각)', 'kw', '', ''),
  createData1('열교환기(코일)능력(가열/냉각)', 'kw', '', ''),
  createData1('열교환기(코일)능력(가열/냉각)', 'kw', '', ''),
  createData1('열교환기(코일)능력(가열/냉각)', 'kw', '', ''),
  createData1('열교환기(코일)능력(가열/냉각)', 'kw', '', ''),
  createData1('열교환기(코일)능력(가열/냉각)', 'kw', '', ''),
];

function createData2(date, namecode, division, analysis) {
  return { date, namecode, division, analysis };
}

const rows2 = [
  createData2('2022-06-02 00:00', '', '유지보수(교체)', '고장 및 기능장애'),
  createData2('2022-06-02 00:00', '', '유지보수(교체)', '고장 및 기능장애'),
  createData2('2022-06-02 00:00', '', '유지보수(교체)', '고장 및 기능장애')
];

function createData3(division, date, result, inspector, note) {
  let rowclass;
  if(division == '일일') {
    rowclass='date1';
  } else if(division == '주간') {
    rowclass='date2';
  } else if(division == '월간') {
    rowclass='date3';
  } else if(division == '분기') {
    rowclass='date4';
  } else {
    rowclass=''
  }
  return { division, date, result, inspector, note, rowclass };
}

const rows3 = [
  createData3('일일', '', '', '', ''),
  createData3('일일', '', '', '', ''),
  createData3('일일', '', '', '', ''),
  createData3('주간', '', '', '', ''),
  createData3('일일', '', '', '', ''),
  createData3('일일', '', '', '', ''),
  createData3('일일', '', '', '', ''),
  createData3('주간', '', '', '', ''),
  createData3('월간', '', '', '', ''),
  createData3('분기', '', '', '', ''),
];

// ==============================|| TABS - ICON ||============================== //

export default function IconTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MainCard className="mobile_top">
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="설비현황" icon={<UserOutlined />} iconPosition="start" {...a11yProps(0)} />
            <Tab label="설비이력" icon={<BookOutlined />} iconPosition="start" {...a11yProps(1)} />
            <Tab label="점검이력" icon={<UsergroupAddOutlined />} iconPosition="start" {...a11yProps(2)} />
            {/* <Tab label="Gallery" icon={<FileImageOutlined />} iconPosition="start" {...a11yProps(3)} /> */}
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Typography variant="h6">
            <TableContainer>
              <Table className="same_width" sx={{ minWidth: 800 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">항목</TableCell>
                    <TableCell align="center">단위</TableCell>
                    <TableCell align="center">설계값</TableCell>
                    <TableCell align="center">비고</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows1.map((row1) => (
                    <TableRow hover key={row1.name}>
                      <TableCell align="center">{row1.item}</TableCell>
                      <TableCell align="center">{row1.unit}</TableCell>
                      <TableCell align="center">{row1.value}</TableCell>
                      <TableCell align="center">{row1.note}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography variant="h6">
            <Row>
              <Col sm={6}>
                <MainCard title="유지보수 주요 투입 자재">
                  <SimplePie />
                  <MainCard className="comment" style={{marginTop:"10px"}}>
                    <div>
                      상선 하행: 지하1층 -&gt; 지하2증(131-ES-01) 유지보수 검토 의견<br />
                      - 상선 하행: 지하1층 -&gt; 지하2층(131-ES-01)(은)는 교체품목 중 뉴얼를러의 교체 빈도가 가장 높습니다.<br />
                      - 스탭체인의 예상교체일은 2033-04-07입니다.<br />
                      - 뉴얼롤러 외에 모터스피드센서, 브레이크, 스탭 의 순으로 교체 빈도가 높습니다.<br />
                      - 예상교체일이 가장 빠른 교체품목은 HR속도검출센서입니다.<br />
                      - 금일(2022-07-31)로 부터 약 829일 후(2024-11-06)에 교체작업을 수행해야 할 것으로 예상됩니다.<br />
                      - HR속도검출센서 외에 모터스피드센서, 스탭처짐스위치, 스탭 의 순으로 예상교체일이 빠릅니다.<br />
                      - [상선 하행: 지하1증 -&gt; 지하2층(131-ES-01)의 HR속도검출센서 상태의 주기적인 모니터링을 수행해주세요.]
                    </div>
                  </MainCard>
                </MainCard>
              </Col>

              <Col sm={6}>
                <MainCard style={{height:"100%"}}>
                  <TableContainer>
                    <Table className="same_width" sx={{ minWidth: 400 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="center">유지보수일</TableCell>
                          <TableCell align="center">품명</TableCell>
                          <TableCell align="center">구분</TableCell>
                          <TableCell align="center">분석유형</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows2.map((row2) => (
                          <TableRow hover key={row2.name}>
                            <TableCell align="center">{row2.date}</TableCell>
                            <TableCell align="center">{row2.namecode}</TableCell>
                            <TableCell align="center">{row2.division}</TableCell>
                            <TableCell align="center">{row2.analysis}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </MainCard>
              </Col>
            </Row>
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography variant="h6">
            <TableContainer>
              <Table className="same_width" sx={{ minWidth: 400 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">점검구분</TableCell>
                    <TableCell align="center">점검일</TableCell>
                    <TableCell align="center">점검결과</TableCell>
                    <TableCell align="center">점검자</TableCell>
                    <TableCell align="center">비고</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows3.map((row3) => (
                    <TableRow hover key={row3.name}
                      className={row3.rowclass}
                    >
                      <TableCell align="center">{row3.division}</TableCell>
                      <TableCell align="center">{row3.date}</TableCell>
                      <TableCell align="center">{row3.result}</TableCell>
                      <TableCell align="center">{row3.inspector}</TableCell>
                      <TableCell align="center">{row3.note}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Typography>
        </TabPanel>
      </Box>
    </MainCard>
  );
}
