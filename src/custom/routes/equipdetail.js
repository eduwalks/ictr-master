import React from 'react'
import ReactPlayer from 'react-player'

import MainCard from 'components/MainCard';
import { Row, Col } from 'react-bootstrap';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Chip from '@mui/material/Chip';
import ChartTabs from 'custom/components/tabs/ChartTabs';
import Video from 'custom/video/1.mp4'

function EquipDetail () {

  function createData1(time, division, equipcompo, cont, condition) {
    return { time, division, equipcompo, cont, condition };
  }

  function createData2(measure, namecode, maintenance, worker, date, condition) {
    return { measure, namecode, maintenance, worker, date, condition };
  }

  const rows1 = [
    createData1('2022-06-02 00:00', '결함발생', 'RF1(환기부)', '직팽식공조기 (SF) 전동기 이상진동', '경보확인'),
    createData1('2022-06-02 00:00', '결함발생', 'RF1(환기부)', '직팽식공조기 (SF) 전동기 이상진동', '경보확인'),
    createData1('2022-06-02 00:00', '결함발생', 'RF1(환기부)', '직팽식공조기 (SF) 전동기 이상진동', '경보'),
    createData1('2022-06-02 00:00', '결함발생', 'RF1(환기부)', '직팽식공조기 (SF) 전동기 이상진동', '경보')
  ];

  const rows2 = [
    createData2('유지보수(교체)', 'V-BELT', '고장 및 기능장애', '홍길동', '2022-11-01', '완료'),
    createData2('단순고장장애', '', '', '', '2022-11-01', '확인'),
    createData2('현장(상시)점검', '', '', '', '', '대기'),
    createData2('현장(상시)점검', '', '', '', '', '대기')
  ];

  return (
    <div className="sub_container">
      <Row>
        <Col sm={5} className="sub_left">
          <div className='player-wrapper' style={{width:'100%'}}>
            <ReactPlayer
              className='react-player'
              url={Video}
              width='100%'
              height='100%'
              playing={true}
              muted={true}
              loop={true}
            />
          </div>

          <MainCard className="center_table" content={false}>
            <TableContainer>
              <Table sx={{ minWidth: 500 }} aria-label="simple table">
                <TableBody>
                  <TableRow>
                    <TableCell className="th" align="center">설비번호</TableCell>
                    <TableCell align="center">124-L-AHU01-RF1</TableCell>
                    <TableCell className="th" align="center">제작회사</TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell className="th" align="center">제작일</TableCell>
                    <TableCell align="center"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="th" align="center">위치</TableCell>
                    <TableCell align="center">좌측 공조실</TableCell>
                    <TableCell className="th" align="center">게이트웨이</TableCell>
                    <TableCell align="center">3C7AAA9223A7</TableCell>
                    <TableCell className="th" align="center">상태</TableCell>
                    <TableCell align="center">Active</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </MainCard>

          <MainCard className="center_table" content={false}>
            <Chip label="경보내역" color="error" />
            {/* table */}
            <TableContainer>
              <Table sx={{ minWidth: 600 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">일시</TableCell>
                    <TableCell align="center">경보분류</TableCell>
                    <TableCell align="center">설비구성부</TableCell>
                    <TableCell align="center">내용</TableCell>
                    <TableCell align="center">상태</TableCell>
                    <TableCell align="center"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows1.map((row1) => (
                    <TableRow hover key={row1.name}>
                      <TableCell component="th" scope="row">{row1.time}</TableCell>
                      <TableCell align="center">{row1.division}</TableCell>
                      <TableCell align="center">{row1.equipcompo}</TableCell>
                      <TableCell align="center">{row1.cont}</TableCell>
                      <TableCell align="center">{row1.condition}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </MainCard>

          <MainCard content={false}>
            <Chip label="현장(상시)점검 내역" color="success" />
            {/* table */}
            <TableContainer>
              <Table sx={{ minWidth: 600 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">조치유형</TableCell>
                    <TableCell align="center">품명</TableCell>
                    <TableCell align="center">고장(유지보수)원인</TableCell>
                    <TableCell align="center">작업자</TableCell>
                    <TableCell align="center">점검일</TableCell>
                    <TableCell align="center">상태</TableCell>
                    <TableCell align="center"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows2.map((row2) => (
                    <TableRow hover key={row2.name}>
                      <TableCell component="th" scope="row">{row2.measure}</TableCell>
                      <TableCell align="center">{row2.namecode}</TableCell>
                      <TableCell align="center">{row2.maintenance}</TableCell>
                      <TableCell align="center">{row2.worker}</TableCell>
                      <TableCell align="center">{row2.date}</TableCell>
                      <TableCell align="center">{row2.condition}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </MainCard>
        </Col>

        <Col sm={7} className="sub_right">
          <MainCard content={false} className="mobile_top">
            <TableContainer>
              <Table sx={{ minWidth: 500 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">종합등급</TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center">등급</TableCell>
                    <TableCell align="center">결함명</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell rowspan="3" align="center" style={{fontSize:"30px"}}>A</TableCell>
                    <TableCell align="center">전동기</TableCell>
                    <TableCell align="center">A</TableCell>
                    <TableCell rowspan="3" align="center">
                      직팽식공조기 (SF) 전동기 이상진동 
                      <span className="material-symbols-outlined" style={{verticalAlign:"middle"}}>
                        emergency_recording
                      </span><br />
                      직팽식공조기 (SF) 전동기 이상진동
                      <span className="material-symbols-outlined" style={{verticalAlign:"middle"}}>
                        emergency_recording
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">송풍기</TableCell>
                    <TableCell align="center">A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">V밸트</TableCell>
                    <TableCell align="center">A</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </MainCard>

          <ChartTabs />
      
          <Button variant="contained" style={{width:"100%"}}>종합 보고서</Button>
        </Col>
      </Row>
    </div>
  )
}

export default EquipDetail;