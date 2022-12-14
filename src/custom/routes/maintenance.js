import { Link } from "react-router-dom";
import { Row, Col, NavLink } from 'react-bootstrap';
import Navigationbar from "custom/components/navigationbarCe";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import Chip from '@mui/material/Chip';
import MainCard from 'components/MainCard';

// table data
function createData1(division, number, part, station, sort, equipname, equipnum, condition) {
  let rowclass;
  if(division == '상시점검') {
    rowclass='condition1';
  } else if(division == '경과') {
    rowclass='condition2';
  } else if(division == '임박') {
    rowclass='condition3';
  } else if(division == '주의관찰') {
    rowclass='condition4';
  } else {
    rowclass=''
  }
  return { division, number, part, station, sort, equipname, equipnum, condition, rowclass };
}

function createData2(time, division, number, part, station, sort, equipname, result) {
  let rowclass;
  if(result == '주의관찰') {
    rowclass='condition3';
  } else if(result == '유지보수') {
    rowclass='condition5';
  } else if(result == '정상') {
    rowclass='condition6';
  } else {
    rowclass=''
  }

  return { time, division, number, part, station, sort, equipname, result, rowclass };
}

function createData3(time, number, part, station, equipname, product, division, analysis) {
  return { time, number, part, station, equipname, product, division, analysis };
}

const rows1 = [
  createData1('상시점검', '1호선', '예술회관', '부평', '공기조화설비', '좌대합실공조시-1', '124-L-AHU01-RF1', '불량'),
  createData1('상시점검', '1호선', '예술회관', '부평', '소방설비', '좌대합실공조시-1', '124-L-AHU01-RF1', '결함'),
  createData1('상시점검', '1호선', '예술회관', '부평', '승강장안전문설비', '좌대합실공조시-1', '124-L-AHU01-RF1', '결함'),
  createData1('상시점검', '1호선', '예술회관', '부평', '오/배수 통기 및 우수배수설비', '좌대합실공조시-1', '124-L-AHU01-RF1', '불량'),
  createData1('상시점검', '1호선', '예술회관', '부평', '위생기구설비', '좌대합실공조시-1', '124-L-AHU01-RF1', '미흡'),
  createData1('상시점검', '1호선', '예술회관', '부평', '자동제어설비', '좌대합실공조시-1', '124-L-AHU01-RF1', '미흡'),
  createData1('경과', '1호선', '예술회관', '부평', '급수/급탕설비', '좌대합실공조시-1', '124-L-AHU01-RF1', '미흡'),
  createData1('경과', '1호선', '예술회관', '부평', '위생기구설비', '좌대합실공조시-1', '124-L-AHU01-RF1', '미흡'),
  createData1('임박', '1호선', '예술회관', '부평', '승강설비', '좌대합실공조시-1', '124-L-AHU01-RF1', '통신'),
  createData1('임박', '1호선', '예술회관', '부평', '승강설비', '좌대합실공조시-1', '124-L-AHU01-RF1', '통신'),
  createData1('주의관찰', '1호선', '예술회관', '부평', '자동제어설비', '좌대합실공조시-1', '124-L-AHU01-RF1', '미흡'),
  createData1('주의관찰', '1호선', '예술회관', '부평', '자동제어설비', '좌대합실공조시-1', '124-L-AHU01-RF1', '미흡'),
  createData1('주의관찰', '1호선', '예술회관', '부평', '급수/급탕설비', '좌대합실공조시-1', '124-L-AHU01-RF1', '미흡')
]

const rows2 = [
  createData2('2022-06-02 00:07', '상시', '1호선', '예술회관', '부평', '공기조화설비', '좌대합실공조시-1', '정상'),
  createData2('2022-06-02 00:07', '일일', '1호선', '예술회관', '부평', '소방설비', '좌대합실공조시-1', '유지보수'),
  createData2('2022-06-02 00:07', '일일', '1호선', '예술회관', '부평', '승강장안전문설비', '좌대합실공조시-1', '주의관찰'),
];

const rows3 = [
  createData3('2022-06-02 00:07', '1호선', '예술회관', '부평', '우 직팽식공조기', 'EOCR', '유지보수(교체)', '고장 및 기능장애'),
  createData3('2022-06-02 00:07', '1호선', '예술회관', '부평', '우 직팽식공조기', 'EOCR', '유지보수(교체)', '고장 및 기능장애'),
  createData3('2022-06-02 00:07', '1호선', '예술회관', '부평', '우 직팽식공조기', 'EOCR', '유지보수(교체)', '고장 및 기능장애')
];

function MainTenance () {

  return (
    <div className="maintenance">
      <Navigationbar />
      <div className="sub_container_ce" style={{backgroundColor:"#fff"}}>
        <Row>
          <Col sm={4} className="main_left">
            <MainCard>
              <Chip label="점검 대상" color="warning" style={{color:"#fff"}}/>
              <TableContainer>
                <Table sx={{ minWidth: 400 }} aria-label="simple table" className="part_status">
                  <TableHead>
                    <TableRow>
                      <TableCell style={{backgroundColor:"#f5f5f5",borderRadius:"0"}}></TableCell>
                      <TableCell className="train1" align="center"><Link to="/mro_partstate">계산</Link></TableCell>
                      <TableCell className="train1" align="center"><Link to="/mro_partstate">예술회관</Link></TableCell>
                      <TableCell className="train1" align="center"><Link to="/mro_partstate">동막</Link></TableCell>
                      <TableCell className="train2" align="center"><Link to="/mro_partstate">검암</Link></TableCell>
                      <TableCell className="train2" align="center"><Link to="/mro_partstate">가재울</Link></TableCell>
                      <TableCell className="train2" align="center"><Link to="/mro_partstate">인천시청</Link></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow className="bad">
                      <th>상시점검</th>
                      <td><Link to="/mro_partstate">0/0</Link></td>
                      <td><Link to="/mro_partstate">0/0</Link></td>
                      <td><Link to="/mro_partstate">0/0</Link></td>
                      <td><Link to="/mro_partstate">0/0</Link></td>
                      <td><Link to="/mro_partstate">0/0</Link></td>
                      <td><Link to="/mro_partstate">0/0</Link></td>
                    </TableRow>
                    <TableRow className="error">
                      <th>경과</th>
                      <td><Link to="/mro_partstate">0/0</Link></td>
                      <td><Link to="/mro_partstate">0/0</Link></td>
                      <td><Link to="/mro_partstate">0/0</Link></td>
                      <td><Link to="/mro_partstate">0/0</Link></td>
                      <td><Link to="/mro_partstate">0/0</Link></td>
                      <td><Link to="/mro_partstate">0/0</Link></td>
                    </TableRow>
                    <TableRow className="insuff">
                      <th>임박</th>
                      <td><Link to="/mro_partstate">0/0</Link></td>
                      <td><Link to="/mro_partstate">0/0</Link></td>
                      <td><Link to="/mro_partstate">0/0</Link></td>
                      <td><Link to="/mro_partstate">0/0</Link></td>
                      <td><Link to="/mro_partstate">0/0</Link></td>
                      <td><Link to="/mro_partstate">0/0</Link></td>
                    </TableRow>
                    <TableRow className="communi">
                      <th>주의관찰</th>
                      <td><Link to="/mro_partstate">0/0</Link></td>
                      <td><Link to="/mro_partstate">0/0</Link></td>
                      <td><Link to="/mro_partstate">0/0</Link></td>
                      <td><Link to="/mro_partstate">0/0</Link></td>
                      <td><Link to="/mro_partstate">0/0</Link></td>
                      <td><Link to="/mro_partstate">0/0</Link></td>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </MainCard>

            <MainCard style={{marginTop:"10px"}}>
              <Chip label="유지보수 현황" color="warning" style={{color:"#fff"}} />
              <TableContainer>
                <Table sx={{ minWidth: 400 }} aria-label="simple table" className="part_status">
                  <TableHead>
                    <TableRow>
                      <TableCell style={{backgroundColor:"#f5f5f5",borderRadius:"0"}}></TableCell>
                      <TableCell className="train1" align="center">계산</TableCell>
                      <TableCell className="train1" align="center">예술회관</TableCell>
                      <TableCell className="train1" align="center">동막</TableCell>
                      <TableCell className="train2" align="center">검암</TableCell>
                      <TableCell className="train2" align="center">가재울</TableCell>
                      <TableCell className="train2" align="center">인천시청</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow className="normal">
                      <th>일간</th>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </TableRow>
                    <TableRow className="error">
                      <th>주간</th>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </TableRow>
                    <TableRow className="fine">
                      <th>월간</th>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </MainCard>

            <MainCard style={{marginTop:"10px"}}>
              <Chip label="금월 성능검사 대상" color="warning" style={{color:"#fff"}} />
              <TableContainer>
                <Table sx={{ minWidth: 400 }} aria-label="simple table" className="part_status">
                  <TableHead>
                    <TableRow>
                      <TableCell className="train1" align="center">계산</TableCell>
                      <TableCell className="train1" align="center">예술회관</TableCell>
                      <TableCell className="train1" align="center">동막</TableCell>
                      <TableCell className="train2" align="center">검암</TableCell>
                      <TableCell className="train2" align="center">가재울</TableCell>
                      <TableCell className="train2" align="center">인천시청</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <td className="train1_in">0</td>
                      <td className="train1_in">0</td>
                      <td className="train1_in">0</td>
                      <td className="train2_in">0</td>
                      <td className="train2_in">0</td>
                      <td className="train2_in">0</td>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </MainCard>

            <MainCard style={{marginTop:"10px"}}>
              <Chip label="등록 현황" color="info" />
              <TableContainer>
                <Table sx={{ minWidth: 400 }} aria-label="simple table" className="maint_table same_width">
                  <TableBody>
                    <TableRow>
                      <TableCell className="th" align="center">공기조화설비</TableCell>
                      <TableCell align="center">870</TableCell>
                      <TableCell className="th" align="center">급수/급탕설비</TableCell>
                      <TableCell align="center">870</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="th" align="center">소방설비</TableCell>
                      <TableCell align="center">870</TableCell>
                      <TableCell className="th" align="center">승강설비</TableCell>
                      <TableCell align="center">870</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="th" align="center">승강장안전문설비</TableCell>
                      <TableCell align="center">870</TableCell>
                      <TableCell className="th" align="center">열원 및 냉난방 설비</TableCell>
                      <TableCell align="center">870</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="th" align="center">오/배수 통기 및<br/>우수배수설비</TableCell>
                      <TableCell align="center">870</TableCell>
                      <TableCell className="th" align="center">오수정화 및<br/>물 재이용 설비</TableCell>
                      <TableCell align="center">870</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="th" align="center">위생기구설비</TableCell>
                      <TableCell align="center">870</TableCell>
                      <TableCell className="th" align="center">환기설비</TableCell>
                      <TableCell align="center">870</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="th" align="center">자동제어설비</TableCell>
                      <TableCell align="center">870</TableCell>
                      <TableCell className="th" align="center"></TableCell>
                      <TableCell align="center"></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </MainCard>

            <div className="btn_right"><Button variant="contained" color="error">고장/점검 등록</Button></div>
          </Col>
          
          <Col sm={8} className="main_right">
            <MainCard content={false}>
              <div className='more'>
                <Chip label="점검 대상 목록" style={{backgroundColor:"#257DDC"}} />
                <NavLink as={Link} to="/mro_equiplist" className='more_btn' style={{color:"#000"}}>더보기 +</NavLink>
              </div>
              {/* table */}
              <TableContainer>
                <Table sx={{ minWidth: 800 }} aria-label="simple table" className="maintlist_table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">점검구분</TableCell>
                      <TableCell align="center">호선</TableCell>
                      <TableCell align="center">파트</TableCell>
                      <TableCell align="center">역사명</TableCell>
                      <TableCell align="center">설비대분류</TableCell>
                      <TableCell align="center">설비명</TableCell>
                      <TableCell align="center">설비번호</TableCell>
                      <TableCell align="center">IoT상태</TableCell>
                      <TableCell align="center"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows1.map((row1) => (
                      <TableRow hover key={row1.name}
                      >
                        <TableCell align="center" className={row1.rowclass}><Link to="/mro_stationstate">{row1.division}</Link></TableCell>
                        <TableCell align="center"><Link to="/mro_stationstate">{row1.number}</Link></TableCell>
                        <TableCell align="center"><Link to="/mro_stationstate">{row1.part}</Link></TableCell>
                        <TableCell align="center"><Link to="/mro_stationstate">{row1.station}</Link></TableCell>
                        <TableCell align="center"><Link to="/mro_stationstate">{row1.sort}</Link></TableCell>
                        <TableCell align="center"><Link to="/mro_stationstate">{row1.equipname}</Link></TableCell>
                        <TableCell align="center"><Link to="/mro_stationstate">{row1.equipnum}</Link></TableCell>
                        <TableCell align="center"><Link to="/mro_stationstate">{row1.condition}</Link></TableCell>
                        <TableCell align="center" style={{color:"#000"}}>
                          <span className="material-symbols-outlined">content_paste_search</span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </MainCard>

            <MainCard content={false} style={{marginTop:"10px"}}>
              <div className='more'>
                <Chip label="최근 점검내역" color="success" />
                <NavLink as={Link} to="/mro_checklist" className='more_btn' style={{color:"#000"}}>더보기 +</NavLink>
              </div>
              {/* table */}
              <TableContainer>
                <Table sx={{ minWidth: 800 }} aria-label="simple table" className="maintlist_table">
                  <TableHead>
                    <TableRow>
                      <TableCell>일시</TableCell>
                      <TableCell align="center">구분</TableCell>
                      <TableCell align="center">호선</TableCell>
                      <TableCell align="center">파트</TableCell>
                      <TableCell align="center">역사명</TableCell>
                      <TableCell align="center">설비대분류</TableCell>
                      <TableCell align="center">설비명</TableCell>
                      <TableCell align="center">후속조치</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows2.map((row2) => (
                      <TableRow hover key={row2.name}
                      >
                        <TableCell align="center"><Link to="/mro_checkdetail">{row2.time}</Link></TableCell>
                        <TableCell align="center"><Link to="/mro_checkdetail">{row2.division}</Link></TableCell>
                        <TableCell align="center"><Link to="/mro_checkdetail">{row2.number}</Link></TableCell>
                        <TableCell align="center"><Link to="/mro_checkdetail">{row2.part}</Link></TableCell>
                        <TableCell align="center"><Link to="/mro_checkdetail">{row2.station}</Link></TableCell>
                        <TableCell align="center"><Link to="/mro_checkdetail">{row2.sort}</Link></TableCell>
                        <TableCell align="center"><Link to="/mro_checkdetail">{row2.equipname}</Link></TableCell>
                        <TableCell align="center" className={row2.rowclass}><Link to="/mro_checkdetail">{row2.result}</Link></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </MainCard>

            <MainCard content={false} style={{marginTop:"10px"}}>
              <div className='more'>
                <Chip label="최근 유지보수내역" color="success" />
                <NavLink as={Link} to="/mro_list" className='more_btn' style={{color:"#000"}}>더보기 +</NavLink>
              </div>
              {/* table */}
              <TableContainer>
                <Table sx={{ minWidth: 800 }} aria-label="simple table" className="maintlist_table">
                  <TableHead>
                    <TableRow>
                      <TableCell>일시</TableCell>
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
                    {rows3.map((row3) => (
                      <TableRow hover key={row3.name}>
                        <TableCell align="center"><Link to="/mro_checkdetail">{row3.time}</Link></TableCell>
                        <TableCell align="center"><Link to="/mro_checkdetail">{row3.number}</Link></TableCell>
                        <TableCell align="center"><Link to="/mro_checkdetail">{row3.part}</Link></TableCell>
                        <TableCell align="center"><Link to="/mro_checkdetail">{row3.station}</Link></TableCell>
                        <TableCell align="center"><Link to="/mro_checkdetail">{row3.equipname}</Link></TableCell>
                        <TableCell align="center"><Link to="/mro_checkdetail">{row3.product}</Link></TableCell>
                        <TableCell align="center"><Link to="/mro_checkdetail">{row3.division}</Link></TableCell>
                        <TableCell align="center"><Link to="/mro_checkdetail">{row3.analysis}</Link></TableCell>
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

export default MainTenance;