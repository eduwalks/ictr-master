import { Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';
import Navigationbar from "custom/components/navigationbarCe";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import Chip from '@mui/material/Chip';
import MainCard from 'components/MainCard';
import MroTable1 from "custom/components/table/mrotable1";
import MroTable2 from "custom/components/table/mrotable2";
import MroTable3 from "custom/components/table/mrotable3";
import InSpection from "custom/components/pop/inspection_lg";

function MainTenance () {

  return (
    <div className="monitering">
      <Navigationbar />
      <div className="main_container">
        <Row>
          <Col sm={4} className="main_left">
            <MainCard>
              <Chip label="점검 대상" color="warning" style={{color:"#fff"}}/>
              <TableContainer>
                <Table sx={{ minWidth: 400 }} aria-label="simple table" className="part_status">
                  <TableHead>
                    <TableRow>
                      <TableCell></TableCell>
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
                      <TableCell></TableCell>
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
                <Table sx={{ minWidth: 400 }} aria-label="simple table" className="same_width list_table">
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

            <div className="btn_right"><InSpection /></div>
          </Col>
          
          <Col sm={8} className="main_right">
            <MroTable1 />

            <MroTable2 />

            <MroTable3 />


          </Col>
        </Row>
      </div>
    </div>
  )
}

export default MainTenance;