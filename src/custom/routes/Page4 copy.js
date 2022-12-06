import { Row, Col } from 'react-bootstrap';
import MainCard from 'components/MainCard';
import Chip from '@mui/material/Chip';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Motor from 'custom/img/motor.svg'
import Fan from 'custom/img/fan.svg'
import Vbelt from 'custom/img/vbelt.svg'

function Page1 () {
  function createData1(station, sum, state1, state2, state3, state4, state5, state6) {
    return { station, sum, state1, state2, state3, state4, state5, state6 };
  }

  function createData2(equipname) {
    return { equipname };
  }

  function createData3(time, type, division, equipname, cont) {
    return { time, type, division, equipname, cont };
  }

  function createData4(time, number, part, station, equipname, namecode, division, analysis) {
    return { time, number, part, station, equipname, namecode, division, analysis };
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

  const rows2 = [
    createData2('좌 대합실공조기'),
    createData2('좌 대합실공조기'),
    createData2('좌 대합실공조기'),
    createData2('좌 대합실공조기'),
    createData2('좌 대합실공조기'),
    createData2('좌 대합실공조기'),
    createData2('좌 대합실공조기'),
    createData2('좌 대합실공조기')
  ];
  
  const rows3 = [
    createData3('2022-06-02 00:00', '진단IoT경보', '결함발생', '좌대합실공조시-1', '직팽식공조기 (SF) 전동기 이상진동'),
    createData3('2022-06-02 00:00', '진단IoT경보', '결함발생', '좌대합실공조시-1', '직팽식공조기 (SF) 전동기 이상진동'),
    createData3('2022-06-02 00:00', '진단IoT경보', '결함발생', '좌대합실공조시-1', '직팽식공조기 (SF) 전동기 이상진동'),
    createData3('2022-06-02 00:00', '진단IoT경보', '결함발생', '좌대합실공조시-1', '직팽식공조기 (SF) 전동기 이상진동')
  ];

  const rows4 = [
    createData4('2022-06-02 00:00', '1호선', '예술회관', '부평', '우 직팽식공조기', '', '유지보수(교체)', '고장 및 기능장애'),
    createData4('2022-06-02 00:00', '1호선', '예술회관', '부평', '우 직팽식공조기', '', '유지보수(교체)', '고장 및 기능장애'),
    createData4('2022-06-02 00:00', '1호선', '예술회관', '부평', '우 직팽식공조기', '', '유지보수(교체)', '고장 및 기능장애')
  ];

  return (
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
        </Col>

        <Col sm={8} className="sub_right">
          <MainCard className="mobile_top" content={false}>
            <Chip label="계산 &gt; (124)인천시청" color="primary" />
            {/* table */}
            <TableContainer>
              <Table className="same_cell" sx={{ minWidth: 800 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell rowspan="2" align="center">설비명</TableCell>
                    <TableCell colSpan="3" align="center">설비상태진단</TableCell>
                    <TableCell colSpan="3" align="center">설비결함진단(고장예측)</TableCell>
                    <TableCell rowspan="2" align="center">IoT경보이력</TableCell>
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
                  {rows2.map((row2) => (
                    <TableRow hover key={row2.name}>
                      <TableCell component="th" scope="row">{row2.equipname}</TableCell>
                      <TableCell align="center">
                        <Button className="icon" variant="contained" color="secondary"><img src={Motor} alt="전동기" /></Button>
                      </TableCell>
                      <TableCell align="center">
                        <Button className="icon" variant="contained" color="secondary"><img src={Fan} alt="송풍기" /></Button>
                      </TableCell>
                      <TableCell align="center">
                        <Button className="icon" variant="contained" color="secondary"><img src={Vbelt} alt="V벨트" /></Button>
                      </TableCell>
                      <TableCell align="center"><Button variant="contained" color="success">정상</Button></TableCell>
                      <TableCell align="center"><Button variant="contained" color="success">정상</Button></TableCell>
                      <TableCell align="center"><Button variant="contained" color="success">정상</Button></TableCell>
                      <TableCell align="center"><Button variant="contained">조회</Button></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </MainCard>

          <MainCard className="center_table" content={false}>
            <Chip label="경보내역" color="error" />
            {/* table */}
            <TableContainer>
              <Table className="same_cell" sx={{ minWidth: 800 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">일시</TableCell>
                    <TableCell align="center">유형</TableCell>
                    <TableCell align="center">분류</TableCell>
                    <TableCell align="center">설비명</TableCell>
                    <TableCell align="center">내용</TableCell>
                    <TableCell align="center"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows3.map((row3) => (
                    <TableRow hover key={row3.name}>
                      <TableCell component="th" scope="row">{row3.time}</TableCell>
                      <TableCell align="center">{row3.type}</TableCell>
                      <TableCell align="center">{row3.division}</TableCell>
                      <TableCell align="center">{row3.equipname}</TableCell>
                      <TableCell align="center">{row3.cont}</TableCell>
                      <TableCell align="center">
                        <span className="material-symbols-outlined">content_paste_search</span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </MainCard>

          <MainCard content={false}>
            <Chip label="최근유지보수 내역" color="success" />
            {/* table */}
            <TableContainer>
              <Table className="same_cell" sx={{ minWidth: 800 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">일시</TableCell>
                    <TableCell align="center">호선</TableCell>
                    <TableCell align="center">파트</TableCell>
                    <TableCell align="center">역사명</TableCell>
                    <TableCell align="center">설비명</TableCell>
                    <TableCell align="center">품명</TableCell>
                    <TableCell align="center">구분</TableCell>
                    <TableCell align="center">분석유형</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows4.map((row4) => (
                    <TableRow hover key={row4.name}>
                      <TableCell component="th" scope="row">{row4.time}</TableCell>
                      <TableCell align="center">{row4.number}</TableCell>
                      <TableCell align="center">{row4.part}</TableCell>
                      <TableCell align="center">{row4.station}</TableCell>
                      <TableCell align="center">{row4.equipname}</TableCell>
                      <TableCell align="center">{row4.namecode}</TableCell>
                      <TableCell align="center">{row4.division}</TableCell>
                      <TableCell align="center">{row4.analysis}</TableCell>
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

export default Page1;