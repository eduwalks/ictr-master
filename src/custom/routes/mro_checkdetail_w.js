import Navigationbar from "custom/components/navigationbarCe";
import sampleImg from "custom/img/sample.png"
import { Row, Col } from 'react-bootstrap';
import MainCard from 'components/MainCard';
import Chip from '@mui/material/Chip';
// import Calendar from 'custom/components/calendar/calendar';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import ReactPlayer from 'react-player'
import Video from 'custom/video/1.mp4'
import { lazy } from 'react';
import Loadable from 'components/Loadable';
import MroLg from 'custom/components/pop/mro_lg2';
import InSpection from "custom/components/pop/inspection_lg1";
import Watch from "custom/components/pop/watch";

const AppCalendar = Loadable(lazy(() => import('pages/apps/calendar')));

export function MroCheckDetail() {

  return (
    <div className="maintenance">
      <Navigationbar />
      <div className="sub_container_ce" style={{backgroundColor:"#fff"}}>
        <h5 style={{color:"#000",marginTop:"10px"}}>* 1호선 &gt; 계산 &gt; (124)인천시청 &gt; 대합실공조기 &gt; 좌 대합실공조기(RF1(환기부))</h5>
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
              <Button variant="contained">정기점검</Button>&nbsp;&nbsp;
              <Button variant="contained">성능검사</Button>
            </div>
          </Col>

          <Col sm={8} className="sub_right">
            <div className="btn_right"><Button variant="contained">분석보고서</Button></div>
            <MainCard content={false} style={{marginBottom:"10px", marginTop:"10px"}}>
              <TableContainer>
                <Table aria-label="simple table" className="maint_table same_width">
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
                <Table aria-label="simple table" className="maint_table same_width">
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

            <MainCard content={false} style={{marginBottom:"10px"}}>
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
                          <div style={{marginRight:"5px"}}><Button variant="contained">경보확인</Button></div>
                        </div>
                      </TableCell>
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
                      <TableCell className="th" style={{width:"150px"}}>현장(상기)점검</TableCell>
                      <TableCell>
                        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                          <div style={{marginLeft:"25px"}}>대기 중</div>
                          <div style={{marginRight:"5px"}}><Button variant="contained">점검확인</Button></div>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </MainCard>

            <MainCard className="center_table" content={false}>
              <Chip label="경보 및 현장(상시) 점검 내용" color="error" />
              <TableContainer>
                <Table sx={{ minWidth: 500 }} aria-label="simple table" className="maint_table same_width" style={{borderCollapse:"unset", borderSpacing:"revert"}}>
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
                      <TableCell align="center"><div className="condition5">유지보수</div></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </MainCard>

            <div className="btn_right">
              <Button variant="contained">현장(상시)점검</Button>&nbsp;&nbsp;
              <Button variant="contained">경보확인</Button>
            </div>

            <MainCard className="center_table" content={false}>
              <Chip label="주의관찰" color="error" />
              <TableContainer>
                <Table sx={{ minWidth: 500 }} aria-label="simple table" className="maint_table same_width" style={{borderCollapse:"unset", borderSpacing:"revert"}}>
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

            <MainCard className="center_table" content={false}>
              <Chip label="유지보수" color="success" />
              <TableContainer>
                <Table sx={{ minWidth: 500 }} aria-label="simple table" className="maint_table same_width" style={{borderCollapse:"unset", borderSpacing:"revert"}}>
                  <TableBody>
                    <TableRow>
                      <TableCell className="th" align="center">설비구성부</TableCell>
                      <TableCell align="center">SF1</TableCell>
                      <TableCell className="th" align="center">보수구분</TableCell>
                      <TableCell align="center">외주</TableCell>
                      <TableCell className="th" align="center">분석유형</TableCell>
                      <TableCell align="center">고장 및 기능 장애</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="th" align="center">고장(유지보수)발생일</TableCell>
                      <TableCell align="center">2022-11-30</TableCell>
                      <TableCell className="th" align="center">고장(유지보수)발생시간</TableCell>
                      <TableCell align="center">13:11:03</TableCell>
                      <TableCell className="th" align="center">고장(유지보수)원인</TableCell>
                      <TableCell align="center">전동기 베어링 이상</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="th" align="center">작업시작일</TableCell>
                      <TableCell align="center">2022-12-01</TableCell>
                      <TableCell className="th" align="center">작업시작시간</TableCell>
                      <TableCell align="center">09:12:00</TableCell>
                      <TableCell className="th" align="center">활용장비</TableCell>
                      <TableCell align="center">일반</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="th" align="center">작업종료일</TableCell>
                      <TableCell align="center">2022-12-01</TableCell>
                      <TableCell className="th" align="center">작업종료시간</TableCell>
                      <TableCell align="center">12:03:00</TableCell>
                      <TableCell className="th" align="center">조치유형</TableCell>
                      <TableCell align="center">유지보수(교체)</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="th" align="center">작업자</TableCell>
                      <TableCell colSpan={3} align="center">홍길동, 이기동, 김복동</TableCell>
                      <TableCell className="th" align="center">작업상태</TableCell>
                      <TableCell align="center">완료</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="th" align="center">작업내용</TableCell>
                      <TableCell className="pl" colSpan={5} style={{textAlign:"left"}}>
                        전동기 반부하 베어링 교체
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="th" align="center">투입자재</TableCell>
                      <TableCell className="pl" colSpan={5} style={{textAlign:"left",padding:"0"}}>
                        <Table sx={{ minWidth: 800 }} aria-label="maint_table simple table">
                          <TableHead>
                            <TableRow>
                              <TableCell className="th" align="center">자재유형</TableCell>
                              <TableCell className="th" align="center">자재대분류</TableCell>
                              <TableCell className="th" align="center">자재중분류</TableCell>
                              <TableCell className="th" align="center">품명</TableCell>
                              <TableCell className="th" align="center">규격</TableCell>
                              <TableCell className="th" align="center">수량</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow>
                              <TableCell align="center">일반</TableCell>
                              <TableCell align="center">환기설비</TableCell>
                              <TableCell align="center">역사환기설비 제어부</TableCell>
                              <TableCell align="center">EOCR</TableCell>
                              <TableCell align="center"></TableCell>
                              <TableCell align="center">1</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell align="center">저장품</TableCell>
                              <TableCell align="center">기타</TableCell>
                              <TableCell align="center">기타</TableCell>
                              <TableCell align="center">그외장치</TableCell>
                              <TableCell align="center"></TableCell>
                              <TableCell align="center">1</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="th" align="center">첨부파일</TableCell>
                      <TableCell className="pl" colSpan={5} style={{textAlign:"left"}}>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="th" align="center">비고</TableCell>
                      <TableCell className="pl" colSpan={5} style={{textAlign:"left"}}>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="th" align="center">비용</TableCell>
                      <TableCell align="center">&#8361; 170,000</TableCell>
                      <TableCell className="th" align="center">확인여부</TableCell>
                      <TableCell align="center">O</TableCell>
                      <TableCell className="th" align="center">확인자</TableCell>
                      <TableCell align="center">홍대장</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="th" align="center">상황보고일</TableCell>
                      <TableCell align="center"></TableCell>
                      <TableCell className="th" align="center">상황보고파일</TableCell>
                      <TableCell colSpan={3} align="center"></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </MainCard>

            <div className="btn_right">
              <Button variant="contained">수정</Button>&nbsp;&nbsp;
              <Button variant="contained">유지보수확인</Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MroCheckDetail;