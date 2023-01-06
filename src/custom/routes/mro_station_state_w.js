import Navigationbar from "custom/components/navigationbarCe";
import sampleImg from "custom/img/sample.png";
import { Row, Col } from 'react-bootstrap';
import MainCard from 'components/MainCard';
import Chip from '@mui/material/Chip';
import IconTabs from "custom/components/tabs/IconTabs";
// import Calendar from 'custom/components/calendar/calendar';
import { Button, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { lazy } from 'react';
import Loadable from 'components/Loadable';

import MroLg from 'custom/components/pop/mro_lg2';
import InSpection from "custom/components/pop/inspection1";
import Watch from "custom/components/pop/watch";

const AppCalendar = Loadable(lazy(() => import('pages/apps/calendar')));

export function MroStationState() {

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

            <IconTabs />    
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MroStationState;