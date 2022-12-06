import React from 'react'
import ReactPlayer from 'react-player'

import MainCard from 'components/MainCard';
import { Row, Col } from 'react-bootstrap';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Chip from '@mui/material/Chip';
import Video from 'custom/video/1.mp4'
import ChartTabCont from 'custom/components/chart/ChartTabCont';

function AlertDetail () {
  function createData1(condition, date, alertype, alertcompo, measure) {
    return { condition, date, alertype, alertcompo, measure };
  }

  const rows1 = [
    createData1('경보확인','2022-10-13 07:59','진단IoT경보','결함발생','현장확인(필요)'),
    createData1('현장확인','2022-10-13 07:59','진단IoT경보','결함발생','현장확인(필요)'),
    createData1('경보확인','2022-10-13 07:59','진단IoT경보','결함발생','현장확인(필요)'),
    createData1('현장확인','2022-10-13 07:59','진단IoT경보','결함발생','현장확인(필요)'),
    createData1('경보확인','2022-10-13 07:59','진단IoT경보','결함발생','현장확인(필요)'),
    createData1('현장확인','2022-10-13 07:59','진단IoT경보','결함발생','현장확인(필요)'),
    createData1('경보확인','2022-10-13 07:59','진단IoT경보','결함발생','현장확인(필요)'),
    createData1('경보','2022-10-13 07:59','진단IoT경보','결함발생','현장확인(필요)'),
    createData1('경보','2022-10-13 07:59','진단IoT경보','결함발생','현장확인(필요)'),
    createData1('경보','2022-10-13 07:59','진단IoT경보','결함발생','현장확인(필요)')
  ];

  function createData2(measure, analysis, workdate) {
    return { measure, analysis, workdate };
  }
  
  const rows2 = [
    createData2('유지보수(교체)','고장 및 기능장애','2022-09-23 14:59'),
    createData2('유지보수(교체)','고장 및 기능장애','2022-09-23 14:59'),
    createData2('유지보수(교체)','고장 및 기능장애','2022-09-23 14:59'),
    createData2('유지보수(교체)','고장 및 기능장애','2022-09-23 14:59'),
    createData2('유지보수(교체)','고장 및 기능장애','2022-09-23 14:59'),
    createData2('유지보수(교체)','고장 및 기능장애','2022-09-23 14:59'),
    createData2('유지보수(교체)','고장 및 기능장애','2022-09-23 14:59')
  ];

  return (
    <div className="sub_container">
      <h5>* 1호선 &gt; 계산 &gt; (124)인천시청 &gt; 대합실공조기 &gt; 좌 대합실공조기(RF1(환기부))</h5>
      <Row>
        <Col sm={8} className="sub_left">
          <MainCard className="center_table" content={false}>
            <Chip label="경보내용" color="error" />
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
                    <TableCell className="th" align="center">경보확인일시</TableCell>
                    <TableCell align="center">2022-09-23 14:59</TableCell>
                    <TableCell className="th" align="center">경보확인자</TableCell>
                    <TableCell align="center">임시사용자</TableCell>
                    <TableCell className="th" align="center">후속조치유형</TableCell>
                    <TableCell align="center">현장확인(필요)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="th" align="center">현장확인일시</TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell className="th" align="center">현장확인자</TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell className="th" align="center">상태</TableCell>
                    <TableCell align="center">경보확인</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="th" align="center">위치</TableCell>
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
                </TableBody>
              </Table>
            </TableContainer>
          </MainCard>

          <div className="btn_right">
            <Button variant="contained">주의관찰</Button>&nbsp;&nbsp;
            <Button variant="contained">유지보수</Button>
          </div>

          <MainCard className="center_table" content={false}>
            <Chip label="경보내역" color="error" />
            <TableContainer>
              <Table sx={{ minWidth: 800 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">상태</TableCell>
                    <TableCell align="center">경보일시</TableCell>
                    <TableCell align="center">경보유형</TableCell>
                    <TableCell align="center">경보분류</TableCell>
                    <TableCell align="center">후속조치유형</TableCell>
                    <TableCell align="center"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows1.map((row1) => (
                    <TableRow hover key={row1.name}>
                      <TableCell align="center">{row1.condition}</TableCell>
                      <TableCell align="center">{row1.date}</TableCell>
                      <TableCell align="center">{row1.alertype}</TableCell>
                      <TableCell align="center">{row1.alertcompo}</TableCell>
                      <TableCell align="center">{row1.measure}</TableCell>
                      <TableCell align="center">
                        <span className="material-symbols-outlined">content_paste_search</span>
                        <span className="material-symbols-outlined">build</span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
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
          <Chip label="최근유지보수 내역" color="success" />
            <TableContainer>
              <Table sx={{ minWidth: 300 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">조치유형</TableCell>
                    <TableCell align="center">분석유형</TableCell>
                    <TableCell align="center">작업시작일시</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {rows2.map((row2) => (
                    <TableRow hover key={row2.name}>
                      <TableCell align="center">{row2.measure}</TableCell>
                      <TableCell align="center">{row2.analysis}</TableCell>
                      <TableCell align="center">{row2.workdate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </MainCard>
        </Col>
      </Row>
    </div>
  )
}

export default AlertDetail;