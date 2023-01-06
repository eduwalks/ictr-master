import Navigationbar from "custom/components/navigationbarCe";
import sampleImg from "custom/img/sample.png"
import { Row, Col } from 'react-bootstrap';
import MainCard from 'components/MainCard';
import Chip from '@mui/material/Chip';
// import Calendar from 'custom/components/calendar/calendar';
import { Button, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import ReactPlayer from 'react-player'
import Video from 'custom/video/1.mp4'
import { lazy } from 'react';
import Loadable from 'components/Loadable';
import MroLg from 'custom/components/pop/mro_lg2';
import MroCheck from 'custom/components/pop/mro_check';
import InSpection from "custom/components/pop/inspection1";
import Watch from "custom/components/pop/watch";

const AppCalendar = Loadable(lazy(() => import('pages/apps/calendar')));

export function MroCheckDetail1() {

  return (
    <div className="monitering cal">
      <Navigationbar />
      <div className="main_container">
        <h5 style={{marginTop:"10px"}}>* 1호선 &gt; 계산 &gt; (124)인천시청 &gt; 대합실공조기 &gt; 좌 대합실공조기(RF1(환기부))</h5>
        <br/>
        <Row>
          <Col sm={4} className="sub_left">
            <img style={{width:"100%"}} src={sampleImg} alt="" />
            <br/>
            <MainCard className="cal_box" content={false}>
              <Chip label="유지보수/점검 현황" color="primary" />
              <AppCalendar />
            </MainCard>

            <div className="btn_right">
              <InSpection />&nbsp;&nbsp;
              <Watch />&nbsp;&nbsp;
              <MroLg />
            </div>
            <div className="btn_right">
              <MroCheck />&nbsp;&nbsp;
              <Button variant="contained">성능검사</Button>
            </div>
          </Col>

          <Col sm={8} className="sub_right">
            <div className="btn_right"><Button variant="contained">분석보고서</Button></div>
            <MainCard content={false} style={{marginBottom:"10px", marginTop:"10px"}}>
              <TableContainer>
                <Table aria-label="simple table" className="same_width">
                  <TableBody>
                    <TableRow>
                      <TableCell className="th">유지관리자</TableCell>
                      <TableCell>홍길동</TableCell>
                      <TableCell className="th">소속</TableCell>
                      <TableCell>계산파트</TableCell>
                      <TableCell className="th">직급</TableCell>
                      <TableCell>과장</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="th">선임일</TableCell>
                      <TableCell>2021-01-01</TableCell>
                      <TableCell className="th">교육이수일</TableCell>
                      <TableCell>2021-01-01</TableCell>
                      <TableCell className="th"></TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </MainCard>

            <MainCard content={false} style={{marginBottom:"10px"}}>
              <TableContainer>
                <Table aria-label="simple table" className="same_width">
                  <TableBody>
                    <TableRow>
                      <TableCell className="th">설비대분류</TableCell>
                      <TableCell></TableCell>
                      <TableCell className="th">설비중분류</TableCell>
                      <TableCell>공기조화기</TableCell>
                      <TableCell className="th">설비세분류</TableCell>
                      <TableCell>대합실공조기</TableCell>
                      <TableCell className="th">위치</TableCell>
                      <TableCell>좌측공조실</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="th">설비번호</TableCell>
                      <TableCell>124-L-AHU01-RF1</TableCell>
                      <TableCell className="th">모델번호</TableCell>
                      <TableCell></TableCell>
                      <TableCell className="th">제작회사</TableCell>
                      <TableCell>삼화에이스</TableCell>
                      <TableCell className="th">제작일</TableCell>
                      <TableCell>2020-12-01</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </MainCard>

            <MainCard content={false} style={{marginBottom:"10px"}}>
              <TableContainer>
                <Table aria-label="simple table" className="red_table maint_table">
                  <TableBody>
                    <TableRow className='td_red'>
                      <TableCell className="th" style={{width:"150px"}}>주의관찰</TableCell>
                      <TableCell>2022-10-01~2022-12-31</TableCell>
                      <TableCell>
                        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                          <div>유지보수 조치 후 3개월간 주의관찰 필요</div>
                          <div style={{marginRight:"5px"}}><Button variant="contained">주의관찰 해제</Button></div>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </MainCard>

            {/* <MainCard content={false} style={{marginBottom:"10px"}}>
              <TableContainer>
                <Table aria-label="simple table" className="red_table maint_table">
                  <TableBody>
                    <TableRow className='td_red'>
                      <TableCell className="th" style={{width:"150px"}}>경보발생</TableCell>
                      <TableCell style={{width:"200px"}}>2022-10-01~2022-12-31</TableCell>
                      <TableCell className="th" style={{width:"150px"}}>경보유형</TableCell>
                      <TableCell style={{width:"150px"}}>진단IoT경보</TableCell>
                      <TableCell className="th" style={{width:"150px"}}>내용</TableCell>
                      <TableCell>
                        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                          <div style={{marginLeft:"25px"}}>축정렬불량(편심)(00011)…</div>
                          <div style={{marginRight:"5px"}}><Button variant="contained">현장점검</Button></div>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </MainCard> */}

            <MainCard className="center_table" content={false}>
              <Chip label="경보 및 현장(상시) 점검 내용" color="error" />
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
                      <TableCell className="th" align="center">경보확인일시</TableCell>
                      <TableCell align="center">2022-09-23 14:59</TableCell>
                      <TableCell className="th" align="center">경보확인자</TableCell>
                      <TableCell align="center">홍길동</TableCell>
                      <TableCell className="th" align="center">상태</TableCell>
                      <TableCell align="center"><div className="condition4">현장점검</div></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="th" align="center">현장확인일시</TableCell>
                      <TableCell align="center">2022-09-23 14:59</TableCell>
                      <TableCell className="th" align="center">현장점검자</TableCell>
                      <TableCell align="center">홍길동</TableCell>
                      <TableCell className="th" align="center">후속조치</TableCell>
                      <TableCell align="center"><div className="condition3">주의관찰</div></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </MainCard>

            <div className="btn_right">
              <InSpection />&nbsp;&nbsp;
              <Button variant="contained">경보확인</Button>
            </div>

            <MainCard className="center_table" content={false}>
              <Chip label="주의관찰" color="error" />
              <TableContainer>
                <Table sx={{ minWidth: 500 }} aria-label="simple table" className="same_width" style={{borderCollapse:"unset", borderSpacing:"revert"}}>
                  <TableBody>
                    <TableRow>
                      <TableCell className="th" align="center">주의관찰 시작일</TableCell>
                      <TableCell align="center">2022-09-19 08:02</TableCell>
                      <TableCell className="th" align="center">주의관찰 종료일</TableCell>
                      <TableCell align="center">진단IoT경보</TableCell>
                      <TableCell className="th" align="center">주의관찰 기간</TableCell>
                      <TableCell align="center">3개월</TableCell>
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
                      <TableCell className="th" align="center">주의관찰 정지일</TableCell>
                      <TableCell colSpan={3} align="center">2022-09-19 08:02</TableCell>
                      <TableCell className="th" align="center">정지처리자</TableCell>
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
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MroCheckDetail1;