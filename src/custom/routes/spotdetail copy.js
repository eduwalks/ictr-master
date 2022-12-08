import React from 'react'

import MainCard from 'components/MainCard';
import { Row, Col } from 'react-bootstrap';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Chip from '@mui/material/Chip';
import ChartTabCont from 'custom/components/chart/ChartTabCont';

function SpotDetail () {
  function createData1(date, alertype, alertcompo, condition) {
    return { date, alertype, alertcompo, condition };
  }

  const rows1 = [
    createData1('2022-10-13 07:59','IoT경보','결함발생','경보'),
    createData1('2022-10-13 07:59','IoT경보','결함발생','경보'),
    createData1('2022-10-13 07:59','IoT경보','결함발생','경보확인'),
    createData1('2022-10-13 07:59','IoT경보','결함발생','경보확인'),
    createData1('2022-10-13 07:59','IoT경보','결함발생','경보확인'),
    createData1('2022-10-13 07:59','IoT경보','결함발생','경보확인'),
    createData1('2022-10-13 07:59','IoT경보','결함발생','경보확인')

  ];

  function createData2(no, work, measure, materials, repair, productname, worker, analysis, iot, workdate) {
    return { no, work, measure, materials, repair, productname, worker, analysis, iot, workdate };
  }
  
  const rows2 = [
    createData2('1','작업완료','유지보수(교체)','자체','역사환기설비제어부','EOCR','','고장 및 기능장애','','2022-09-23 14:59'),
    createData2('2','작업완료','유지보수(교체)','외주','역사환기설비제어부','EOCR','','고장 및 기능장애','','2022-09-23 14:59'),
    createData2('3','작업완료','유지보수(교체)','외주','역사환기설비제어부','EOCR','','고장 및 기능장애','','2022-09-23 14:59'),
    createData2('4','작업완료','유지보수(교체)','외주','역사환기설비제어부','EOCR','','고장 및 기능장애','','2022-09-23 14:59'),
    createData2('5','작업완료','유지보수(교체)','외주','역사환기설비제어부','EOCR','','고장 및 기능장애','','2022-09-23 14:59'),
    createData2('6','작업완료','단순고장장애','자체','','','','','','2022-09-23 14:59'),
    createData2('7','대기','현장(상시)점검','자체','','','','','','2022-09-23 14:59'),
    createData2('8','대기','현장(상시)점검','자체','','','','','','2022-09-23 14:59')
  ];

  return (
    <div className="sub_container">
      <h5>* 1호선 &gt; 계산 &gt; (124)인천시청 &gt; 대합실공조기 &gt; 좌 대합실공조기(RF1(환기부))</h5>
      <Row>
        <Col sm={8} className="sub_left">
          <MainCard className="center_table" content={false}>
            <Chip label="유지보수 내용" color="success" />
            <TableContainer>
              <Table sx={{ minWidth: 800 }} aria-label="simple table" className="same_width">
                <TableBody>
                  <TableRow>
                    <TableCell className="th" align="center">작업시작</TableCell>
                    <TableCell align="center">2022-09-23 14:59</TableCell>
                    <TableCell className="th" align="center">작업종료</TableCell>
                    <TableCell align="center">2022-09-23 15:59</TableCell>
                    <TableCell className="th" align="center">작업시간</TableCell>
                    <TableCell align="center">60분</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="th" align="center">고장(유지보수)일시</TableCell>
                    <TableCell align="center">2022-09-18 14:59</TableCell>
                    <TableCell className="th" align="center">분석유형</TableCell>
                    <TableCell align="center">유지보수</TableCell>
                    <TableCell className="th" align="center">조치유형</TableCell>
                    <TableCell align="center">유지보수(교체)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="th" align="center">고장(유지보수)원인</TableCell>
                    <TableCell align="center">구조부 기타 이상</TableCell>
                    <TableCell className="th" align="center">활용장비</TableCell>
                    <TableCell align="center">PLC</TableCell>
                    <TableCell className="th" align="center">작업내역</TableCell>
                    <TableCell align="center">신품구매교체</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <TableContainer>
              <Table sx={{ minWidth: 800 }} aria-label="simple table" className="same_width">
                <TableBody>
                  <TableRow>
                    <TableCell className="th" align="center">자재유형</TableCell>
                    <TableCell className="th" align="center">투입자재 대분류</TableCell>
                    <TableCell className="th" align="center">투입자재 중분류</TableCell>
                    <TableCell className="th" align="center">품명</TableCell>
                    <TableCell className="th" align="center">자재규격</TableCell>
                    <TableCell className="th" align="center">수량</TableCell>
                    <TableCell className="th" align="center">주요</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">일반</TableCell>
                    <TableCell align="center">환기설비</TableCell>
                    <TableCell align="center">역사환기설비 제어부</TableCell>
                    <TableCell align="center">EOCR</TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center">1</TableCell>
                    <TableCell align="center">O</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">저장품</TableCell>
                    <TableCell align="center">공기조화설비</TableCell>
                    <TableCell align="center">구동부</TableCell>
                    <TableCell align="center">구동부기타</TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center">1</TableCell>
                    <TableCell align="center"></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <TableContainer>
              <Table sx={{ minWidth: 800 }} aria-label="simple table" className="same_width">
                <TableBody>
                  <TableRow>
                    <TableCell className="th" align="center">보수구분</TableCell>
                    <TableCell align="center">자체</TableCell>
                    <TableCell className="th" align="center">작업자</TableCell>
                    <TableCell align="center">홍길동, 김복동</TableCell>
                    <TableCell className="th" align="center">확인자</TableCell>
                    <TableCell align="center">김길동</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="th" align="center">첨부파일</TableCell>
                    <TableCell colSpan={5} align="center"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="th" align="center">첨부파일</TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell className="th" align="center">상황보고파일</TableCell>
                    <TableCell colSpan={3} align="center"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="th" align="center">비고</TableCell>
                    <TableCell colSpan={5} align="center"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="th" align="center">IoT 경보</TableCell>
                    <TableCell align="center">O</TableCell>
                    <TableCell className="th" align="center">경보일시</TableCell>
                    <TableCell align="center">2022-09-18 14:59</TableCell>
                    <TableCell className="th" align="center">경보분류</TableCell>
                    <TableCell align="center">결함발생</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </MainCard>

          <div className="btn_right">
            <Button variant="contained">조치확인</Button>&nbsp;&nbsp;
            <Button variant="contained">수정</Button>&nbsp;&nbsp;
            <Button variant="contained">삭제</Button>
          </div>

          <MainCard className="center_table" content={false}>
            <Chip label="최근유지보수 내역" color="success" />
            <TableContainer>
              <Table sx={{ minWidth: 900 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">No.</TableCell>
                    <TableCell align="center">작업상태</TableCell>
                    <TableCell align="center">조치유형</TableCell>
                    <TableCell align="center">보수구분</TableCell>
                    <TableCell align="center">투입자재 중분류</TableCell>
                    <TableCell align="center">품명</TableCell>
                    <TableCell align="center">작업자</TableCell>
                    <TableCell align="center">분석유형</TableCell>
                    <TableCell align="center">IoT경보</TableCell>
                    <TableCell align="center">작업시작일시</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {rows2.map((row2) => (
                    <TableRow hover key={row2.name}>
                      <TableCell align="center">{row2.no}</TableCell>
                      <TableCell align="center">{row2.work}</TableCell>
                      <TableCell align="center">{row2.measure}</TableCell>
                      <TableCell align="center">{row2.materials}</TableCell>
                      <TableCell align="center">{row2.repair}</TableCell>
                      <TableCell align="center">{row2.productname}</TableCell>
                      <TableCell align="center">{row2.worker}</TableCell>
                      <TableCell align="center">{row2.analysis}</TableCell>
                      <TableCell align="center">{row2.iot}</TableCell>
                      <TableCell align="center">{row2.workdate}</TableCell>
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
            <Chip label="경보내역" color="error" />
            <TableContainer>
              <Table sx={{ minWidth: 500 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">경보일시</TableCell>
                    <TableCell align="center">경보유형</TableCell>
                    <TableCell align="center">경보분류</TableCell>
                    <TableCell align="center">상태</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows1.map((row1) => (
                    <TableRow hover key={row1.name}>
                      <TableCell align="center">{row1.date}</TableCell>
                      <TableCell align="center">{row1.alertype}</TableCell>
                      <TableCell align="center">{row1.alertcompo}</TableCell>
                      <TableCell align="center">{row1.condition}</TableCell>
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

export default SpotDetail;