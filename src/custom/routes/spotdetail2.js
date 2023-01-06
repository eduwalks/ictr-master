import React from 'react'
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player'

import MainCard from 'components/MainCard';
import { Row, Col } from 'react-bootstrap';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Chip from '@mui/material/Chip';
import Video from 'custom/video/1.mp4'

import Navigationbar from 'custom/components/navigationbar';
import ChartTabCont from 'custom/components/chart/ChartTabCont';
import InSpection from "custom/components/pop/inspection1";
import Paging from 'custom/components/table/paging';

function AlertDetail () {
  function createData1(check, date, measure, alertdate, alertype, alertcompo) {
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

    return { check, date, measure, alertdate, alertype, alertcompo, rowclass };
  }

  const rows1 = [
    createData1('경보확인','2022-10-13 07:59','','2022-10-13 07:59','진단IoT경보','결함발생'),
    createData1('현장점검','2022-10-13 07:59','유지보수','2022-10-13 07:59','진단IoT경보','결함발생'),
    createData1('경보확인','2022-10-13 07:59','','2022-10-13 07:59','진단IoT경보','결함발생'),
    createData1('경보확인','2022-10-13 07:59','','2022-10-13 07:59','진단IoT경보','결함발생'),
    createData1('현장점검','2022-10-13 07:59','정상','2022-10-13 07:59','진단IoT경보','결함발생'),
    createData1('경보발생','','','2022-10-13 07:59','진단IoT경보','결함발생'),
    createData1('경보발생','','','2022-10-13 07:59','진단IoT경보','결함발생'),
    createData1('경보발생','','','2022-10-13 07:59','진단IoT경보','결함발생')
  ];

  function createData2(time, division, inspector, result) {
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
  
    return { time, division, inspector, result, rowclass };
  }
  
  const rows2 = [
    createData2('2022-06-02 00:07', '상시', '홍길동', '정상'),
    createData2('2022-06-02 00:07', '일일', '홍길동', '유지보수'),
    createData2('2022-06-02 00:07', '상시', '홍길동', '유지보수'),
    createData2('', '상시', '', '대기'),
    createData2('2022-06-02 00:07', '상시', '홍길동', '정상'),
    createData2('2022-06-02 00:07', '일일', '홍길동', '유지보수'),
    createData2('2022-06-02 00:07', '상시', '홍길동', '유지보수'),
    createData2('2022-06-02 00:07', '일일', '홍길동', '유지보수'),
    createData2('2022-06-02 00:07', '상시', '홍길동', '유지보수'),
    createData2('', '상시', '', '대기')
  ];

  return (
    <div className="monitering">
      <Navigationbar />
      <div className="sub_container">
        <h5>* 1호선 &gt; 계산 &gt; (124)인천시청 &gt; 대합실공조기 &gt; 좌 대합실공조기(RF1(환기부))</h5>
        <Row>
          <Col sm={8} className="sub_left">
            <MainCard className="center_table" content={false}>
              <div className="stpes">
                <Chip label="경보 및 현장(상시) 점검 내용" color="error" />
                <ul>
                  <li className="step_active"><span>1</span><span>경보발생</span></li>
                  <li>&gt;&gt;&nbsp;</li>
                  <li className="step_active"><span>2</span><span>현장(상시)점검</span></li>
                  <li>&gt;&gt;&nbsp;</li>
                  <li className="step_active"><span>3</span><span>주의관찰</span></li>
                </ul>
              </div>
              <TableContainer>
                <Table sx={{ minWidth: 500 }} aria-label="simple table" className="same_width" style={{borderCollapse:"unset", borderSpacing:"revert"}}>
                  <TableBody>
                    <TableRow>
                      <TableCell className="th" align="center">경보일시</TableCell>
                      <TableCell align="center">2022-09-19 08:02</TableCell>
                      <TableCell className="th" align="center">경보유형</TableCell>
                      <TableCell align="center">진단IoT경보</TableCell>
                      <TableCell className="th" align="center">경보분류</TableCell>
                      <TableCell align="center">결함발생</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="th" align="center">경보내용</TableCell>
                      <TableCell className="pl" colSpan={3} style={{textAlign:"left"}}>
                        회전체 결함(010)
                        <span className="material-symbols-outlined" style={{verticalAlign:"middle"}}>
                          emergency_recording
                        </span><br />
                        축정렬불량(편심)(00011)
                        <span className="material-symbols-outlined" style={{verticalAlign:"middle"}}>
                          emergency_recording
                        </span><br />
                        (전동기/감속기) 베어링 결함(011)
                        <span className="material-symbols-outlined" style={{verticalAlign:"middle"}}>
                          emergency_recording
                        </span><br />
                        외륜 결함(00001)
                        <span className="material-symbols-outlined" style={{verticalAlign:"middle"}}>
                          emergency_recording
                        </span><br />
                        축베어링 결함(100)
                        <span className="material-symbols-outlined" style={{verticalAlign:"middle"}}>
                          emergency_recording
                        </span><br />
                        송풍기 결함(01001)
                        <span className="material-symbols-outlined" style={{verticalAlign:"middle"}}>
                          emergency_recording
                        </span><br />
                        V벨트 결함(101)
                        <span className="material-symbols-outlined" style={{verticalAlign:"middle"}}>
                          emergency_recording
                        </span><br />
                        편심 및 이탈(00011)
                        <span className="material-symbols-outlined" style={{verticalAlign:"middle"}}>
                          emergency_recording
                        </span><br />
                      </TableCell>
                      <TableCell colSpan={2} align="center">
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
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      {/* <TableCell className="th" align="center">경보확인일시</TableCell>
                      <TableCell align="center">2022-09-23 14:59</TableCell>
                      <TableCell className="th" align="center">경보확인자</TableCell>
                      <TableCell align="center">홍길동</TableCell> */}
                      <TableCell className="th" align="center">상태</TableCell>
                      <TableCell colspan="5"><div className="condition1" style={{margin:"unset",marginLeft:"8px"}}>경보발생</div></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="th" align="center">현장확인일시</TableCell>
                      <TableCell align="center">2022-09-23 14:59</TableCell>
                      <TableCell className="th" align="center">현장점검자</TableCell>
                      <TableCell align="center">홍길동</TableCell>
                      <TableCell className="th" align="center">후속조치</TableCell>
                      <TableCell align="center"><div className="condition2">주의관찰</div></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </MainCard>

            <div className="btn_right">
              <InSpection />&nbsp;&nbsp;
              {/* <Button variant="contained">경보확인</Button> */}
            </div>

            <MainCard className="center_table" content={false}>
              <Chip label="주의관찰" color="error" />
              <TableContainer>
                <Table sx={{ minWidth: 500 }} aria-label="simple table" className="same_width" style={{borderCollapse:"unset", borderSpacing:"revert"}}>
                  <TableBody>
                    <TableRow>
                      <TableCell className="th" align="center">주의관찰 시작일</TableCell>
                      <TableCell colSpan={2}align="center">2022-09-19</TableCell>
                      <TableCell className="th" align="center">주의관찰 종료일</TableCell>
                      <TableCell colSpan={2} align="center">2022-12-18</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="th" align="center">주의관찰 내용</TableCell>
                      <TableCell className="pl" colSpan={5} style={{textAlign:"left"}}>
                        특이점 없으나 간헐적 이상진동 발생<br />
                        진동에 대한 주의관찰 빌표
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="th" align="center">등록처리자</TableCell>
                      <TableCell colSpan={3} align="center">홍길동</TableCell>
                      <TableCell className="th" align="center">상태</TableCell>
                      <TableCell align="center"><div className="condition1">정지</div></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="th" align="center">주의관찰 해제일</TableCell>
                      <TableCell colSpan={3} align="center">2022-12-18</TableCell>
                      <TableCell className="th" align="center">해제처리자</TableCell>
                      <TableCell align="center">홍길동</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </MainCard>

            <div className="btn_right">
              <Button variant="contained">수정</Button>&nbsp;&nbsp;
              <Button variant="contained">정지</Button>
            </div>

            <MainCard className="center_table" content={false}>
              <Chip label="경보내역" color="error" />
              <TableContainer>
                <Table sx={{ minWidth: 800 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">상태</TableCell>
                      <TableCell align="center">경보확인일시</TableCell>
                      <TableCell align="center">후속조치</TableCell>
                      <TableCell align="center">경보일시</TableCell>
                      <TableCell align="center">경보유형</TableCell>
                      <TableCell align="center">경보분류</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows1.map((row1) => (
                      <TableRow hover key={row1.name}
                        component={Link} to="/alertdetail"
                        className={row1.rowclass}
                      >
                        <TableCell align="center">{row1.check}</TableCell>
                        <TableCell align="center">{row1.date}</TableCell>
                        <TableCell align="center">{row1.measure}</TableCell>
                        <TableCell align="center">{row1.alertdate}</TableCell>
                        <TableCell align="center">{row1.alertype}</TableCell>
                        <TableCell align="center">{row1.alertcompo}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Paging />
            </MainCard>
          </Col>

          <Col sm={4} className="sub_right">
            <MainCard className="center_table" content={false}>
              <Chip label="설비정보(최근 진단 : 2022-10-13 07:59)" color="primary" />
              <TableContainer>
                <Table sx={{ minWidth: 400 }} aria-label="simple table" className="same_width">
                  <TableBody>
                    <TableRow>
                      <TableCell className="th" align="center">설비번호</TableCell>
                      <TableCell align="center">124-L-AHU01-RF1</TableCell>
                      <TableCell className="th" align="center">설비명</TableCell>
                      <TableCell align="center">좌 대합실공조기</TableCell>
                    </TableRow>
                    <TableRow>
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
                    </TableRow>
                    <TableRow>
                      <TableCell className="th" align="center">등급</TableCell>
                      <TableCell align="center">A</TableCell>
                      <TableCell className="th" align="center">상태</TableCell>
                      <TableCell align="center">Active</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </MainCard>

            <ChartTabCont />

            <MainCard className="center_table" content={false}>
              <TableContainer>
              <Table sx={{ minWidth: 500 }} aria-label="simple table" className="same_width">
                  <TableBody>
                    <TableRow>
                      <TableCell className="th" align="center">진동센서</TableCell>
                      <TableCell align="center">반경</TableCell>
                      <TableCell className="th1" align="center">0.73 mm/s</TableCell>
                      <TableCell align="center">축</TableCell>
                      <TableCell className="th1" align="center">2.31 mm/s</TableCell>
                      <TableCell align="center">수직</TableCell>
                      <TableCell className="th1" align="center">5.6mm/s</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </MainCard>

            <MainCard className="center_table" content={false}>
              <TableContainer>
              <Table sx={{ minWidth: 500 }} aria-label="simple table" className="same_width">
                  <TableBody>
                    <TableRow>
                      <TableCell className="th" align="center">진동센서</TableCell>
                      <TableCell align="center">반경</TableCell>
                      <TableCell className="th1" align="center">0.73 mm/s</TableCell>
                      <TableCell align="center">축</TableCell>
                      <TableCell className="th1" align="center">2.31 mm/s</TableCell>
                      <TableCell align="center">수직</TableCell>
                      <TableCell className="th1" align="center">5.6mm/s</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </MainCard>

            <MainCard className="center_table" content={false}>
              <TableContainer>
                <Table sx={{ minWidth: 500 }} aria-label="simple table" className="same_width">
                  <TableBody>
                    <TableRow>
                      <TableCell className="th" align="center">소음센서</TableCell>
                      <TableCell align="center">신율</TableCell>
                      <TableCell className="th1" align="center">0.00%</TableCell>
                      <TableCell align="center">동력전달률</TableCell>
                      <TableCell className="th1" align="center">92.35%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </MainCard>

            <MainCard className="center_table" content={false}>
            <Chip label="현장(상시)점검 내역" color="success" />
              <TableContainer>
                <Table sx={{ minWidth: 500 }} aria-label="simple table" className="same_width">
                  <TableHead>
                    <TableRow>
                      <TableCell>일시</TableCell>
                      <TableCell align="center">구분</TableCell>
                      <TableCell align="center">점검자</TableCell>
                      <TableCell align="center">결과</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows2.map((row2) => (
                      <TableRow hover key={row2.name}
                        className={row2.rowclass}
                        component={Link} to="/spotdetail"
                      >
                        <TableCell align="center">{row2.time}</TableCell>
                        <TableCell align="center">{row2.division}</TableCell>
                        <TableCell align="center">{row2.inspector}</TableCell>
                        <TableCell component="th" scope="row">{row2.result}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </MainCard>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default AlertDetail;