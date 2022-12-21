import { Link } from "react-router-dom";
import { NavLink } from "react-bootstrap";
import { Row, Col } from 'react-bootstrap';
import MainCard from 'components/MainCard';
import Chip from '@mui/material/Chip';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import Navigationbar from 'custom/components/navigationbar';
import Motor from 'custom/img/motor.svg'
import Fan from 'custom/img/fan.svg'
import Vbelt from 'custom/img/vbelt.svg'

import Alert1 from "custom/components/pop/alert1";
import Alert2 from "custom/components/pop/alert2";

function PartStation () {
  function createData1(station, sum, state1, state2, state3, state4, state5, state6) {
    return { station, sum, state1, state2, state3, state4, state5, state6 };
  }

  // function createData2(equipname) {
  //   return { equipname };
  // }

  function createData3(time, equipname, alertype, division, cont, check) {
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
    return { time, equipname, alertype, division, cont, check, rowclass };
  }

  function createData4(time, division, sort, equipname, inspector, result) {
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
  
    return { time, division, sort, equipname, inspector, result, rowclass };
  }

  const rows1 = [
    createData1('합계', '0', '0', '0', '0', '0', '0', '0'),
    createData1('박촌', '0', '0', '0', '0', '0', '0', '0'),
    createData1('임학', '0', '0', '0', '0', '0', '0', '0'),
    createData1('계산', '0', '0', '0', '0', '0', '0', '0'),
    createData1('경인교대', '0', '0', '0', '0', '0', '0', '0'),
    createData1('작전', '0', '0', '0', '0', '0', '0', '0'),
    createData1('갈산', '0', '0', '0', '0', '0', '0', '0'),
    createData1('부평구청', '0', '0', '0', '0', '0', '0', '0'),
    createData1('부평시장', '0', '0', '0', '0', '0', '0', '0')
  ];

  // const rows2 = [
  //   createData2('좌 대합실공조기'),
  //   createData2('좌 대합실공조기'),
  //   createData2('좌 대합실공조기'),
  //   createData2('좌 대합실공조기'),
  //   createData2('좌 대합실공조기'),
  //   createData2('좌 대합실공조기'),
  //   createData2('좌 대합실공조기'),
  //   createData2('좌 대합실공조기')
  // ];
  
  const rows3 = [
    createData3('2022-06-02 00:07', '좌대합실공조시-1', 'IoT경보', '결함발생', '직팽식공조기 (SF) 전동기 이상진동', '경보발생'),
    createData3('2022-06-02 00:07', '좌대합실공조시-1', 'IoT경보', '결함발생', '직팽식공조기 (SF) 전동기 이상진동', '현장점검'),
    createData3('2022-06-02 00:07', '좌대합실공조시-1', 'IoT경보', '결함발생', '직팽식공조기 (SF) 전동기 이상진동', '경보발생'),
    createData3('2022-06-02 00:07', '좌대합실공조시-1', 'IoT경보', '결함발생', '직팽식공조기 (SF) 전동기 이상진동', '경보확인')
  ];

  const rows4 = [
    createData4('2022-06-02 00:07', '상시', '공기조화설비', '좌대합실공조시-1', '홍길동', '정상'),
    createData4('2022-06-02 00:07', '일일', '소방설비', '좌대합실공조시-1', '홍길동', '유지보수'),
    createData4('2022-06-02 00:07', '상시', '소방설비', '좌대합실공조시-1', '홍길동', '유지보수'),
    createData4('', '상시', '승강장안전문설비', '좌대합실공조시-1', '', '대기')
  ];

  return (
    <div className="monitering">
      <Navigationbar />
      <div className="sub_container">
        <Row>
          <Col sm={4} className="sub_left">
            <MainCard content={false} /* title="파트별 상태 현황" */>
              <table className="part_status">
                <thead>
                  <th></th>
                  <th className="train1">계산</th>
                  <th className="train1">예술회관</th>
                  <th className="train1">동막</th>
                  <th className="train2">검암</th>
                  <th className="train2">가재울</th>
                  <th className="train2">시청</th>
                </thead>
                <tbody>
                  <tr className="bad">
                    <th>불량</th>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr className="error">
                    <th>결함</th>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr className="insuff">
                    <th>미흡</th>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr className="communi">
                    <th>통신</th>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr className="normal">
                    <th>보통</th>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr className="fine">
                    <th>양호</th>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr className="sum">
                    <th>합계</th>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </MainCard>

            <MainCard style={{marginTop:"10px"}} content={false} /* title="파트별 상태 현황" */>
              {/* table */}
              <TableContainer>
                <Table className="same_cell" sx={{ minWidth: 500 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">역사</TableCell>
                      <TableCell align="center">합계</TableCell>
                      <TableCell align="center">양호</TableCell>
                      <TableCell align="center">보통</TableCell>
                      <TableCell align="center">미흡</TableCell>
                      <TableCell align="center">불량</TableCell>
                      <TableCell align="center">결함</TableCell>
                      <TableCell align="center">통신이상</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows1.map((row1) => (
                      <TableRow hover key={row1.name}>
                        <TableCell component="th" scope="row">{row1.station}</TableCell>
                        <TableCell align="center">{row1.sum}</TableCell>
                        <TableCell align="center">{row1.state1}</TableCell>
                        <TableCell align="center">{row1.state2}</TableCell>
                        <TableCell align="center">{row1.state3}</TableCell>
                        <TableCell align="center">{row1.state4}</TableCell>
                        <TableCell align="center">{row1.state5}</TableCell>
                        <TableCell align="center">{row1.state6}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </MainCard>

            <div className="btn_right"><Alert2 /></div>
          </Col>

          <Col sm={8} className="sub_right">
            <MainCard className="mobile_top" content={false}>
              <Chip label="계산 &gt; (124)인천시청" color="primary" />
              {/* table */}
              <TableContainer>
                <Table className="same_cell part_station" sx={{ minWidth: 800 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell rowspan="2" align="center">설비명</TableCell>
                      <TableCell colSpan="3" align="center">설비상태진단</TableCell>
                      <TableCell colSpan="3" align="center">설비결함진단(고장예측)</TableCell>
                      <TableCell rowspan="2" align="center">고장신고/점검요청</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">전동기</TableCell>
                      <TableCell align="center">송풍기</TableCell>
                      <TableCell align="center">V벨트</TableCell>
                      <TableCell align="center">전동기</TableCell>
                      <TableCell align="center">송풍기</TableCell>
                      <TableCell align="center">V벨트</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow hover>
                      <TableCell component="th" scope="row">좌 대합실공조기</TableCell>
                      <TableCell align="center">
                        <Link to="/equipdetail"><Button className="icon icon1" variant="contained"><img src={Motor} alt="전동기" /></Button></Link>
                      </TableCell>
                      <TableCell align="center">
                        <Link to="/equipdetail"><Button className="icon icon2" variant="contained"><img src={Fan} alt="송풍기" /></Button></Link>
                      </TableCell>
                      <TableCell align="center">
                        <Link to="/equipdetail"><Button className="icon icon3" variant="contained"><img src={Vbelt} alt="V벨트" /></Button></Link>
                      </TableCell>
                      <TableCell align="center"><Link to="/equipdetail"><Button variant="contained" color="success">정상</Button></Link></TableCell>
                      <TableCell align="center"><Link to="/equipdetail"><Button variant="contained" color="success">정상</Button></Link></TableCell>
                      <TableCell align="center"><Link to="/equipdetail"><Button variant="contained" color="success">정상</Button></Link></TableCell>
                      <TableCell align="center"><Alert1 /></TableCell>
                    </TableRow>

                    <TableRow hover>
                      <TableCell component="th" scope="row">좌 대합실공조기</TableCell>
                      <TableCell align="center">
                        <Link to="/equipdetail"><Button className="icon icon4" variant="contained"><img src={Motor} alt="전동기" /></Button></Link>
                      </TableCell>
                      <TableCell align="center">
                        <Link to="/equipdetail"><Button className="icon icon5" variant="contained"><img src={Fan} alt="송풍기" /></Button></Link>
                      </TableCell>
                      <TableCell align="center">
                        <Link to="/equipdetail"><Button className="icon icon6" variant="contained"><img src={Vbelt} alt="V벨트" /></Button></Link>
                      </TableCell>
                      <TableCell align="center"><Link to="/equipdetail"><Button variant="contained" color="success">정상</Button></Link></TableCell>
                      <TableCell align="center"><Link to="/equipdetail"><Button variant="contained" color="success">정상</Button></Link></TableCell>
                      <TableCell align="center"><Link to="/equipdetail"><Button variant="contained" color="success">정상</Button></Link></TableCell>
                      <TableCell align="center"><Alert1 /></TableCell>
                    </TableRow>

                    <TableRow hover>
                      <TableCell component="th" scope="row">좌 대합실공조기</TableCell>
                      <TableCell align="center">
                        <Link to="/equipdetail"><Button className="icon icon3" variant="contained"><img src={Motor} alt="전동기" /></Button></Link>
                      </TableCell>
                      <TableCell align="center">
                        <Link to="/equipdetail"><Button className="icon icon2" variant="contained"><img src={Fan} alt="송풍기" /></Button></Link>
                      </TableCell>
                      <TableCell align="center">
                        <Link to="/equipdetail"><Button className="icon icon5" variant="contained"><img src={Vbelt} alt="V벨트" /></Button></Link>
                      </TableCell>
                      <TableCell align="center"><Link to="/equipdetail"><Button variant="contained" color="success">정상</Button></Link></TableCell>
                      <TableCell align="center"><Link to="/equipdetail"><Button variant="contained" color="success">정상</Button></Link></TableCell>
                      <TableCell align="center"><Link to="/equipdetail"><Button variant="contained" color="success">정상</Button></Link></TableCell>
                      <TableCell align="center"><Alert1 /></TableCell>
                    </TableRow>

                    <TableRow hover>
                      <TableCell component="th" scope="row">좌 대합실공조기</TableCell>
                      <TableCell align="center">
                        <Link to="/equipdetail"><Button className="icon icon4" variant="contained"><img src={Motor} alt="전동기" /></Button></Link>
                      </TableCell>
                      <TableCell align="center">
                        <Link to="/equipdetail"><Button className="icon icon4" variant="contained"><img src={Fan} alt="송풍기" /></Button></Link>
                      </TableCell>
                      <TableCell align="center">
                        <Link to="/equipdetail"><Button className="icon icon4" variant="contained"><img src={Vbelt} alt="V벨트" /></Button></Link>
                      </TableCell>
                      <TableCell align="center"><Link to="/equipdetail"><Button variant="contained" color="success">정상</Button></Link></TableCell>
                      <TableCell align="center"><Link to="/equipdetail"><Button variant="contained" color="success">정상</Button></Link></TableCell>
                      <TableCell align="center"><Link to="/equipdetail"><Button variant="contained" color="success">정상</Button></Link></TableCell>
                      <TableCell align="center"><Alert1 /></TableCell>
                    </TableRow>

                    <TableRow hover>
                      <TableCell component="th" scope="row">좌 대합실공조기</TableCell>
                      <TableCell align="center">
                        <Link to="/equipdetail"><Button className="icon icon6" variant="contained"><img src={Motor} alt="전동기" /></Button></Link>
                      </TableCell>
                      <TableCell align="center">
                        <Link to="/equipdetail"><Button className="icon icon1" icon5 variant="contained"><img src={Fan} alt="송풍기" /></Button></Link>
                      </TableCell>
                      <TableCell align="center">
                        <Link to="/equipdetail"><Button className="icon icon1" variant="contained"><img src={Vbelt} alt="V벨트" /></Button></Link>
                      </TableCell>
                      <TableCell align="center"><Link to="/equipdetail"><Button variant="contained" color="success">정상</Button></Link></TableCell>
                      <TableCell align="center"><Link to="/equipdetail"><Button variant="contained" color="success">정상</Button></Link></TableCell>
                      <TableCell align="center"><Link to="/equipdetail"><Button variant="contained" color="success">정상</Button></Link></TableCell>
                      <TableCell align="center"><Alert1 /></TableCell>
                    </TableRow>

                    <TableRow hover>
                      <TableCell component="th" scope="row">좌 대합실공조기</TableCell>
                      <TableCell align="center">
                        <Link to="/equipdetail"><Button className="icon icon5" variant="contained"><img src={Motor} alt="전동기" /></Button></Link>
                      </TableCell>
                      <TableCell align="center">
                        <Link to="/equipdetail"><Button className="icon icon2" variant="contained"><img src={Fan} alt="송풍기" /></Button></Link>
                      </TableCell>
                      <TableCell align="center">
                        <Link to="/equipdetail"><Button className="icon icon1" variant="contained"><img src={Vbelt} alt="V벨트" /></Button></Link>
                      </TableCell>
                      <TableCell align="center"><Link to="/equipdetail"><Button variant="contained" color="success">정상</Button></Link></TableCell>
                      <TableCell align="center"><Link to="/equipdetail"><Button variant="contained" color="success">정상</Button></Link></TableCell>
                      <TableCell align="center"><Link to="/equipdetail"><Button variant="contained" color="success">정상</Button></Link></TableCell>
                      <TableCell align="center"><Alert1 /></TableCell>
                    </TableRow>

                    <TableRow hover>
                      <TableCell component="th" scope="row">좌 대합실공조기</TableCell>
                      <TableCell align="center">
                        <Link to="/equipdetail"><Button className="icon icon3" variant="contained"><img src={Motor} alt="전동기" /></Button></Link>
                      </TableCell>
                      <TableCell align="center">
                        <Link to="/equipdetail"><Button className="icon icon4" variant="contained"><img src={Fan} alt="송풍기" /></Button></Link>
                      </TableCell>
                      <TableCell align="center">
                        <Link to="/equipdetail"><Button className="icon icon2" variant="contained"><img src={Vbelt} alt="V벨트" /></Button></Link>
                      </TableCell>
                      <TableCell align="center"><Link to="/equipdetail"><Button variant="contained" color="success">정상</Button></Link></TableCell>
                      <TableCell align="center"><Link to="/equipdetail"><Button variant="contained" color="success">정상</Button></Link></TableCell>
                      <TableCell align="center"><Link to="/equipdetail"><Button variant="contained" color="success">정상</Button></Link></TableCell>
                      <TableCell align="center"><Alert1 /></TableCell>
                    </TableRow>

                    <TableRow hover>
                      <TableCell component="th" scope="row">좌 대합실공조기</TableCell>
                      <TableCell align="center">
                        <Link to="/equipdetail"><Button className="icon icon4" variant="contained"><img src={Motor} alt="전동기" /></Button></Link>
                      </TableCell>
                      <TableCell align="center">
                        <Link to="/equipdetail"><Button className="icon icon4" variant="contained"><img src={Fan} alt="송풍기" /></Button></Link>
                      </TableCell>
                      <TableCell align="center">
                        <Link to="/equipdetail"><Button className="icon icon4" variant="contained"><img src={Vbelt} alt="V벨트" /></Button></Link>
                      </TableCell>
                      <TableCell align="center"><Link to="/equipdetail"><Button variant="contained" color="success">정상</Button></Link></TableCell>
                      <TableCell align="center"><Link to="/equipdetail"><Button variant="contained" color="success">정상</Button></Link></TableCell>
                      <TableCell align="center"><Link to="/equipdetail"><Button variant="contained" color="success">정상</Button></Link></TableCell>
                      <TableCell align="center"><Alert1 /></TableCell>
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
                      <TableCell>일시</TableCell>
                      <TableCell align="center">설비명</TableCell>
                      <TableCell align="center">경보유형</TableCell>
                      <TableCell align="center">경보분류</TableCell>
                      <TableCell align="center">내용</TableCell>
                      <TableCell align="center"></TableCell>
                      <TableCell align="center"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows3.map((row3) => (
                      <TableRow hover key={row3.name}
                        className={row3.rowclass}
                      >
                        <TableCell component="th" scope="row"><Link to="/alertdetail">{row3.time}</Link></TableCell>
                        <TableCell align="center"><Link to="/alertdetail">{row3.equipname}</Link></TableCell>
                        <TableCell align="center"><Link to="/alertdetail">{row3.alertype}</Link></TableCell>
                        <TableCell align="center"><Link to="/alertdetail">{row3.division}</Link></TableCell>
                        <TableCell align="center"><Link to="/alertdetail">{row3.cont}</Link></TableCell>
                        <TableCell align="center"><Link to="/alertdetail">{row3.check}</Link></TableCell>
                        <TableCell align="center">
                          {/* <Alert /> */}
                        </TableCell>
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
                      <TableCell>일시</TableCell>
                      <TableCell align="center">구분</TableCell>
                      <TableCell align="center">설비대분류</TableCell>
                      <TableCell align="center">설비명</TableCell>
                      <TableCell align="center">점검자</TableCell>
                      <TableCell align="center">결과</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows4.map((row4) => (
                      <TableRow hover key={row4.name}
                        className={row4.rowclass}
                        component={Link} to="/spotdetail"
                      >
                        <TableCell component="th" scope="row">{row4.time}</TableCell>
                        <TableCell align="center">{row4.division}</TableCell>
                        <TableCell align="center">{row4.sort}</TableCell>
                        <TableCell align="center">{row4.equipname}</TableCell>
                        <TableCell align="center">{row4.inspector}</TableCell>
                        <TableCell align="center">{row4.result}</TableCell>
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

export default PartStation;