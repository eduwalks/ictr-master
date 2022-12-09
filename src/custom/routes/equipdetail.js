import React from 'react'
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom";
import { NavLink } from "react-bootstrap";
import { Row, Col } from 'react-bootstrap';

import Navigationbar from 'custom/components/navigationbar';
import MainCard from 'components/MainCard';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Chip from '@mui/material/Chip';
import ChartTabs from 'custom/components/tabs/ChartTabs';
import Video from 'custom/video/1.mp4'

function EquipDetail () {

  function createData1(check, time, alertype, division, cont) {
    let rowclass;
    if(check == '경보발생') {
      rowclass='check1';
    } else if(check == '경보확인') {
      rowclass='check2';
    } else if(check == '현장점검') {
      rowclass='check3';
    } else {
      rowclass=''
    }
    return { check, time, alertype, division, cont, rowclass };
  }

  function createData2(result, time, division, inspector) {
    let rowclass;
    if(result == '대기') {
      rowclass='result1';
    } else if(result == '유지보수') {
      rowclass='result2';
    } else if(result == '정상') {
      rowclass='result3';
    } else {
      rowclass=''
    }
  
    return { result, time, division, inspector, rowclass };
  }

  const rows1 = [
    createData1('경보발생', '2022-06-02 00:07', 'IoT경보', '결함발생', '직팽식공조기 (SF) 전동기 이상진동'),
    createData1('현장점검', '2022-06-02 00:07', 'IoT경보', '결함발생', '직팽식공조기 (SF) 전동기 이상진동'),
    createData1('경보발생', '2022-06-02 00:07', 'IoT경보', '결함발생', '직팽식공조기 (SF) 전동기 이상진동'),
    createData1('경보확인', '2022-06-02 00:07', 'IoT경보', '결함발생', '직팽식공조기 (SF) 전동기 이상진동'),
  ];

  const rows2 = [
    createData2('정상', '2022-06-02 00:07', '상시', '홍길동'),
    createData2('유지보수', '2022-06-02 00:07', '일일', '홍길동'),
    createData2('유지보수', '2022-06-02 00:07', '상시', '홍길동'),
    createData2('대기', '', '상시', '')
  ];

  return (
    <div className="monitering">
      <Navigationbar />
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
              <div className='more'>
                <Chip label="경보내역" color="error" />
                <NavLink as={Link} to="/alertlist" className='more_btn'>더보기 +</NavLink>
              </div>
              {/* table */}
              <TableContainer>
                <Table sx={{ minWidth: 800 }} aria-label="simple table" className="base_link">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">상태</TableCell>
                      <TableCell>일시</TableCell>
                      <TableCell align="center">경보유형</TableCell>
                      <TableCell align="center">경보분류</TableCell>
                      <TableCell align="center">내용</TableCell>
                      
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows1.map((row1) => (
                      <TableRow hover key={row1.name}
                        className={row1.rowclass}
                      >
                        <TableCell component="th" scope="row"><Link to="/alertdetail">{row1.time}</Link></TableCell>
                        <TableCell align="center"><Link to="/alertdetail">{row1.check}</Link></TableCell>
                        <TableCell align="center"><Link to="/alertdetail">{row1.alertype}</Link></TableCell>
                        <TableCell align="center"><Link to="/alertdetail">{row1.division}</Link></TableCell>
                        <TableCell align="center"><Link to="/alertdetail">{row1.cont}</Link></TableCell>
                        
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </MainCard>

            <MainCard content={false}>
              <div className='more'>
                <Chip label="현장(상시)점검 내역" color="success" />
                <NavLink as={Link} to="/SpotList" className='more_btn'>더보기 +</NavLink>
              </div>
              {/* table */}
              <TableContainer>
                <Table sx={{ minWidth: 800 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">결과</TableCell>
                      <TableCell>일시</TableCell>
                      <TableCell align="center">구분</TableCell>
                      <TableCell align="center">점검자</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows2.map((row2) => (
                      <TableRow hover key={row2.name}
                        className={row2.rowclass}
                        component={Link} to="/spotdetail"
                      >
                        <TableCell component="th" scope="row">{row2.result}</TableCell>
                        <TableCell align="center">{row2.time}</TableCell>
                        <TableCell align="center">{row2.division}</TableCell>
                        <TableCell align="center">{row2.inspector}</TableCell>
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
    </div>
  )
}

export default EquipDetail;