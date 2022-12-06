import { Row, Col } from 'react-bootstrap';
import MainCard from 'components/MainCard';
import Chip from '@mui/material/Chip';
import IconTabs from "custom/components/tabs/IconTabs";
// import Calendar from 'custom/components/calendar/calendar';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import ReactPlayer from 'react-player'
import Video from 'custom/video/1.mp4'
import { lazy } from 'react';
import Loadable from 'components/Loadable';

const AppCalendar = Loadable(lazy(() => import('pages/apps/calendar')));

export function Page16() {
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

  return (
    <div className="sub_container">
      <Row>
        <Col sm={4} className="sub_left">
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
          <br/>
          <MainCard className="cal_box" content={false}>
            <Chip label="일일 점검 현황" color="primary" />
            <AppCalendar />
          </MainCard>
        </Col>

        <Col sm={8} className="sub_right">
          <MainCard content={false} style={{marginBottom:"10px"}}>
            <TableContainer>
              <Table aria-label="simple table" className="same_width">
                <TableBody>
                  <TableRow>
                    <TableCell className="th_color">유지관리자</TableCell>
                    <TableCell></TableCell>
                    <TableCell className="th_color">소속</TableCell>
                    <TableCell></TableCell>
                    <TableCell className="th_color">직급</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="th_color">선임일</TableCell>
                    <TableCell></TableCell>
                    <TableCell className="th_color">교육이수일</TableCell>
                    <TableCell></TableCell>
                    <TableCell className="th_color"></TableCell>
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
                    <TableCell className="th_color">설비대분류</TableCell>
                    <TableCell></TableCell>
                    <TableCell className="th_color">설비중분류</TableCell>
                    <TableCell></TableCell>
                    <TableCell className="th_color">설비세분류</TableCell>
                    <TableCell></TableCell>
                    <TableCell className="th_color">위치</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="th_color">설비번호</TableCell>
                    <TableCell></TableCell>
                    <TableCell className="th_color">모델번호</TableCell>
                    <TableCell></TableCell>
                    <TableCell className="th_color">제작회사</TableCell>
                    <TableCell></TableCell>
                    <TableCell className="th_color">제작일</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </MainCard>

          <IconTabs />

          <MainCard className="cal_box" style={{marginTop:"10px"}} content={false}>
            <Chip label="부품별 고장 예측 관리" color="info" />
            <TableContainer>
              <Table sx={{ minWidth: 800 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">품목(품명)</TableCell>
                    <TableCell align="center">상태</TableCell>
                    <TableCell align="center">단위</TableCell>
                    <TableCell align="center">교체주기</TableCell>
                    <TableCell align="center">최근교체일</TableCell>
                    <TableCell align="center">교체사유</TableCell>
                    <TableCell align="center">향후교체예상일</TableCell>
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
          </MainCard>         
        </Col>
      </Row>
    </div>
  );
}

export default Page16;