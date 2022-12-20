import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Chip from '@mui/material/Chip';

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
  createData1('전류/전압', 'A/V', '', ''),
  createData1('풍량제어방식', '', '', ''),
  createData1('가습방식', '', '', ''),
  createData1('송풍기 동력', 'kW', '', ''),
  createData1('정압', 'MPa', '', ''),
  createData1('송풍기 회전수(급기/회기)', 'rpm', '', ''),
  createData1('송풍기 풍량', 'm3/h', '', ''),
  createData1('열교환기(코일)능력(가열/냉각)', 'kW', '', ''),
  createData1('냉.온수코일>냉온수온도>입구', '℃', '', ''),
  createData1('냉.온수코일>냉온수온도>출구', '℃', '', ''),
  createData1('냉.온수코일>공기온도>입구>온도', '℃', '', ''),
];

function createData2(data1, data2, data3, data4, data5, data6, data7, data8) {
  let rowclass;
  if(data8 == '대기') {
    rowclass='condition1';
  } else if(data8 == '작업중') {
    rowclass='condition3';
  } else if(data8 == '종료') {
    rowclass='condition5';
  } else if(data8 == '확인') {
    rowclass='condition6';
  } else {
    rowclass=''
  }
  return { data1, data2, data3, data4, data5, data6, data7, data8, rowclass};
}

const rows2 = [
  createData2('2022-06-02 00:00', 'EOCR', '', '유지보수(교체)', '고장 및 기능장애', '2022-07-19', '홍길동', '확인'),
  createData2('2022-06-02 00:00', 'EOCR', 'O', '유지보수(교체)', '고장 및 기능장애', '2022-07-19', '홍길동', '종료'),
  createData2('2022-06-02 00:00', 'EOCR', '', '유지보수(교체)', '고장 및 기능장애', '', '홍길동 외1', '작업중'),
  createData2('2022-06-02 00:00', '', '', '대기', '', '', '', '대기'),
  createData2('2022-06-02 00:00', 'EOCR', '', '유지보수(교체)', '고장 및 기능장애', '', '홍길동', '확인'),
  createData2('2022-06-02 00:00', 'EOCR', 'O', '유지보수(교체)', '고장 및 기능장애', '', '홍길동', '종료'),
  createData2('2022-06-02 00:00', 'EOCR', '', '유지보수(교체)', '고장 및 기능장애', '', '홍길동 외1', '작업중'),
  createData2('2022-06-02 00:00', '', '', '대기', '', '', '', '대기'),
  createData2('2022-06-02 00:00', 'EOCR', '', '유지보수(교체)', '고장 및 기능장애', '', '홍길동', '확인'),
  createData2('2022-06-02 00:00', 'EOCR', 'O', '유지보수(교체)', '고장 및 기능장애', '', '홍길동', '확인'),
  createData2('2022-06-02 00:00', 'EOCR', 'O', '유지보수(교체)', '고장 및 기능장애', '2022-07-19', '홍길동 외3', '종료'),
  createData2('2022-06-02 00:00', 'EOCR', '', '유지보수(교체)', '고장 및 기능장애', '', '홍길동 외1', '작업중'),
  createData2('2022-06-02 00:00', '', '', '대기', '', '2022-07-19', '홍길동 외3', '종료')
];

function createData3(data1, data2, data3, data4) {
  let rowclass;
  if(data4 == '대기') {
    rowclass='condition1';
  } else if(data4 == '주의관찰') {
    rowclass='condition2';
  } else if(data4 == '유지보수') {
    rowclass='condition3';
  } else if(data4 == '정상') {
    rowclass='condition6';
  } else {
    rowclass=''
  }
  return { data1, data2, data3, data4, rowclass };
}

const rows3 = [
  createData3('상시', '2022-06-02 00:00', '홍길동', '정상'),
  createData3('일일', '2022-06-02 00:00', '홍길동', '유지보수'),
  createData3('상시', '2022-06-02 00:00', '홍길동', '정상'),
  createData3('일일', '2022-06-02 00:00', '홍길동', '유지보수'),
  createData3('상시', '2022-06-02 00:00', '홍길동', '유지보수'),
  createData3('상시', '', '', '대기'),
  createData3('상시', '2022-06-02 00:00', '홍길동', '정상'),
  createData3('일일', '2022-06-02 00:00', '홍길동', '유지보수'),
  createData3('상시', '2022-06-02 00:00', '홍길동', '정상'),
  createData3('일일', '2022-06-02 00:00', '홍길동', '주의관찰'),
  createData3('상시', '2022-06-02 00:00', '홍길동', '주의관찰'),
  createData3('상시', '', '', '대기'),
  createData3('상시', '', '', '대기')
];

function createData4(item, state, unit, change_cycle, recent_change, change_rea, forecast_date) {
  return { item, state, unit, change_cycle, recent_change, change_rea, forecast_date };
}

const rows4 = [
  createData4('전류전압', '', '일', '3년', '2022.01.01', '', '2022.01.01'),
  createData4('전류전압', '', '일', '3년', '2022.01.01', '', '2022.01.01'),
  createData4('전류전압', '', '일', '3년', '2022.01.01', '', '2022.01.01'),
  createData4('전류전압', '', '일', '3년', '2022.01.01', '', '2022.01.01'),
  createData4('전류전압', '', '일', '3년', '2022.01.01', '', '2022.01.01')
];

// ==============================|| TABS - ICON ||============================== //

export default function IconTabs() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };

  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };


  return (
    <MainCard className="mobile_top">
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value1} onChange={handleChange1} aria-label="basic tabs example">
            <Tab label="설비현황" icon={<UserOutlined />} iconPosition="start" {...a11yProps(0)} />
            <Tab label="설비이력" icon={<BookOutlined />} iconPosition="start" {...a11yProps(1)} />
            <Tab label="점검이력" icon={<UsergroupAddOutlined />} iconPosition="start" {...a11yProps(2)} />
            {/* <Tab label="Gallery" icon={<FileImageOutlined />} iconPosition="start" {...a11yProps(3)} /> */}
          </Tabs>
        </Box>
        <TabPanel value={value1} index={0}>
          <Typography variant="h6">
            <TableContainer>
              <Table className="same_width" sx={{ minWidth: 800 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className="blue_th" align="center">항목</TableCell>
                    <TableCell className="blue_th" align="center">단위</TableCell>
                    <TableCell className="blue_th" align="center">설계값</TableCell>
                    <TableCell className="blue_th" align="center">비고</TableCell>
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
            
            <br/>
            <Chip label="부품별 고장 예측 관리" color="info" />
            <TableContainer>
              <Table sx={{ minWidth: 800 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className="blue_th" align="center">품목(품명)</TableCell>
                    <TableCell className="blue_th" align="center">상태</TableCell>
                    <TableCell className="blue_th" align="center">단위</TableCell>
                    <TableCell className="blue_th" align="center">교체주기</TableCell>
                    <TableCell className="blue_th" align="center">최근교체일</TableCell>
                    <TableCell className="blue_th" align="center">교체사유</TableCell>
                    <TableCell className="blue_th" align="center">향후교체예상일</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows4.map((row4) => (
                    <TableRow hover key={row4.name}>
                      <TableCell align="center">{row4.item}</TableCell>
                      <TableCell align="center">{row4.state}</TableCell>
                      <TableCell align="center">{row4.unit}</TableCell>
                      <TableCell align="center">{row4.change_cycle}</TableCell>
                      <TableCell align="center">{row4.recent_change}</TableCell>
                      <TableCell align="center">{row4.change_rea}</TableCell>
                      <TableCell align="center">{row4.forecast_date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>  
          </Typography>
        </TabPanel>

        <TabPanel value={value1} index={1}>
          <Typography variant="h6">
            <Row>
              <Chip label="유지보수 주요 투입 자재" color="primary" />
              <Col sm={6}>
                <MainCard>
                  <SimplePie />
                </MainCard>
              </Col>
              
              <Col sm={6} style={{padding:"10px"}}>
                <Tabs value={value2} onChange={handleChange2} aria-label="basic tabs example">
                  <Tab label="1개월" {...a11yProps(0)} />
                  <Tab label="3개월" {...a11yProps(1)} />
                  <Tab label="1년" {...a11yProps(2)} />
                  <Tab label="3년" {...a11yProps(3)} />
                </Tabs>

                <TabPanel value={value2} index={0}>
                  <MainCard className="comment" style={{marginTop:"10px"}}>
                    <div style={{color:"#000"}}>
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
                </TabPanel>

                <TabPanel value={value2} index={1}>
                  <MainCard className="comment" style={{marginTop:"10px"}}>
                    <div style={{color:"#000"}}>
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
                </TabPanel>

                <TabPanel value={value2} index={2}>
                  <MainCard className="comment" style={{marginTop:"10px"}}>
                    <div style={{color:"#000"}}>
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
                </TabPanel>

                <TabPanel value={value2} index={3}>
                  <MainCard className="comment" style={{marginTop:"10px"}}>
                    <div style={{color:"#000"}}>
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
                </TabPanel>
              </Col>
            </Row>
            
            <br />
            <TableContainer>
              <Table className="same_width" sx={{ minWidth: 400 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className="blue_th" align="center">유지보수일</TableCell>
                    <TableCell className="blue_th" align="center">품명</TableCell>
                    <TableCell className="blue_th" align="center">주요부품</TableCell>
                    <TableCell className="blue_th" align="center">구분</TableCell>
                    <TableCell className="blue_th" align="center">분석유형</TableCell>
                    <TableCell className="blue_th" align="center">상황보고</TableCell>
                    <TableCell className="blue_th" align="center">작업자</TableCell>
                    <TableCell className="blue_th" align="center">상태</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows2.map((row2) => (
                    <TableRow hover key={row2.name}
                      className={row2.rowclass}
                    >
                      <TableCell align="center">{row2.data1}</TableCell>
                      <TableCell align="center">{row2.data2}</TableCell>
                      <TableCell align="center">{row2.data3}</TableCell>
                      <TableCell align="center">{row2.data4}</TableCell>
                      <TableCell align="center">{row2.data5}</TableCell>
                      <TableCell align="center">{row2.data6}</TableCell>
                      <TableCell align="center">{row2.data7}</TableCell>
                      <TableCell align="center">{row2.data8}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Typography>
        </TabPanel>

        <TabPanel value={value1} index={2}>
          <Typography variant="h6">
            <TableContainer>
              <Table className="same_width" sx={{ minWidth: 400 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className="blue_th" align="center">점검구분</TableCell>
                    <TableCell className="blue_th" align="center">점검일</TableCell>
                    <TableCell className="blue_th" align="center">점검결과</TableCell>
                    <TableCell className="blue_th" align="center">점검자</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows3.map((row3) => (
                    <TableRow hover key={row3.name}
                      className={row3.rowclass}
                    >
                      <TableCell align="center">{row3.data1}</TableCell>
                      <TableCell align="center">{row3.data2}</TableCell>
                      <TableCell align="center">{row3.data3}</TableCell>
                      <TableCell align="center">{row3.data4}</TableCell>
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
