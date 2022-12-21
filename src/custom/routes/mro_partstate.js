import { Link } from "react-router-dom";
import Navigationbar from "custom/components/navigationbarCe";
import { Row, Col } from 'react-bootstrap';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Chip from '@mui/material/Chip';
import MainCard from 'components/MainCard';
import InSpection from "custom/components/pop/inspection_lg";
import MroTable11 from "custom/components/table/mrotable11";
import MroTable22 from "custom/components/table/mrotable22";
import MroTable33 from "custom/components/table/mrotable33";

function MroPartState () {

  return (
    <div className="monitering">
      <Navigationbar />
      <div className="main_container">
        {/* <h5>* 1호선 &gt; 계산 </h5> */}
        <Row>
          <Col sm={6} className="main_left">
            <Box component="form">
              <FormControl sx={{ m: 1, minWidth: 120 }} style={{marginLeft:"0"}}>
                <InputLabel htmlFor="grouped-select">호선</InputLabel>
                <Select defaultValue={2} id="grouped-select" className="sub_container_ce_in" label="운용상태">
                  {/* <MenuItem value="">None</MenuItem> */}
                  <MenuItem value={1}>1호선</MenuItem>
                  <MenuItem value={2}>2호선</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="grouped-select">파트</InputLabel>
                <Select defaultValue={6} id="grouped-select" label="설비대분류">
                  <MenuItem value={1}>계산</MenuItem>
                  <MenuItem value={2}>예술회관</MenuItem>
                  <MenuItem value={3}>동막</MenuItem>
                  <MenuItem value={4}>검암</MenuItem>
                  <MenuItem value={5}>가재울</MenuItem>
                  <MenuItem value={6}>인천시청</MenuItem>
                </Select>
              </FormControl>
              <Button variant="contained" style={{marginTop:"9px",padding:"8px 15px"}}>
                <span className="material-symbols-outlined">search</span>이동
              </Button>
            </Box>

            <MainCard>
              <Chip label="점검 대상" color="warning" style={{color:"#fff"}}/>
              <TableContainer>
                <Table sx={{ minWidth: 800 }} aria-label="simple table" className="part_status">
                  <TableHead>
                    <TableRow>
                      <TableCell style={{borderRadius:"0"}}></TableCell>
                      <TableCell className="train1" align="center"><Link to="/mro_station_equipstate">계산</Link></TableCell>
                      <TableCell className="train1" align="center"><Link to="/mro_station_equipstate">귤현</Link></TableCell>
                      <TableCell className="train1" align="center"><Link to="/mro_station_equipstate">박촌</Link></TableCell>
                      <TableCell className="train1" align="center"><Link to="/mro_station_equipstate">임학</Link></TableCell>
                      <TableCell className="train1" align="center"><Link to="/mro_station_equipstate">계산</Link></TableCell>
                      <TableCell className="train1" align="center"><Link to="/mro_station_equipstate">경인교대</Link></TableCell>
                      <TableCell className="train1" align="center"><Link to="/mro_station_equipstate">작전</Link></TableCell>
                      <TableCell className="train1" align="center"><Link to="/mro_station_equipstate">갈산</Link></TableCell>
                      <TableCell className="train1" align="center"><Link to="/mro_station_equipstate">부평구청</Link></TableCell>
                      <TableCell className="train1" align="center"><Link to="/mro_station_equipstate">부평시장</Link></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow className="bad">
                      <th><Link to="/mro_station_equipstate">상시점검</Link></th>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                    </TableRow>
                    <TableRow className="error">
                      <th><Link to="/mro_station_equipstate">경과</Link></th>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                    </TableRow>
                    <TableRow className="insuff">
                      <th><Link to="/mro_station_equipstate">임박</Link></th>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                    </TableRow>
                    <TableRow className="communi">
                      <th>주의관찰</th>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                      <td><Link to="/mro_station_equipstate">0/0</Link></td>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </MainCard>

            <MainCard style={{marginTop:"10px"}}>
              <Chip label="유지보수 현황" color="warning" style={{color:"#fff"}} />
              <TableContainer>
                <Table sx={{ minWidth: 800 }} aria-label="simple table" className="part_status">
                  <TableHead>
                    <TableRow>
                      <TableCell style={{borderRadius:"0"}}></TableCell>
                      <TableCell className="train1" align="center"><Link to="/mro_station_equipstate">계산</Link></TableCell>
                      <TableCell className="train1" align="center"><Link to="/mro_station_equipstate">귤현</Link></TableCell>
                      <TableCell className="train1" align="center"><Link to="/mro_station_equipstate">박촌</Link></TableCell>
                      <TableCell className="train1" align="center"><Link to="/mro_station_equipstate">임학</Link></TableCell>
                      <TableCell className="train1" align="center"><Link to="/mro_station_equipstate">계산</Link></TableCell>
                      <TableCell className="train1" align="center"><Link to="/mro_station_equipstate">경인교대</Link></TableCell>
                      <TableCell className="train1" align="center"><Link to="/mro_station_equipstate">작전</Link></TableCell>
                      <TableCell className="train1" align="center"><Link to="/mro_station_equipstate">갈산</Link></TableCell>
                      <TableCell className="train1" align="center"><Link to="/mro_station_equipstate">부평구청</Link></TableCell>
                      <TableCell className="train1" align="center"><Link to="/mro_station_equipstate">부평시장</Link></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow className="normal">
                      <th><Link to="/mro_station_equipstate">일간</Link></th>
                      <td><Link to="/mro_station_equipstate">0</Link></td>
                      <td><Link to="/mro_station_equipstate">0</Link></td>
                      <td><Link to="/mro_station_equipstate">0</Link></td>
                      <td><Link to="/mro_station_equipstate">0</Link></td>
                      <td><Link to="/mro_station_equipstate">0</Link></td>
                      <td><Link to="/mro_station_equipstate">0</Link></td>
                      <td><Link to="/mro_station_equipstate">0</Link></td>
                      <td><Link to="/mro_station_equipstate">0</Link></td>
                      <td><Link to="/mro_station_equipstate">0</Link></td>
                      <td><Link to="/mro_station_equipstate">0</Link></td>
                    </TableRow>
                    <TableRow className="error">
                      <th><Link to="/mro_station_equipstate">주간</Link></th>
                      <td><Link to="/mro_station_equipstate">0</Link></td>
                      <td><Link to="/mro_station_equipstate">0</Link></td>
                      <td><Link to="/mro_station_equipstate">0</Link></td>
                      <td><Link to="/mro_station_equipstate">0</Link></td>
                      <td><Link to="/mro_station_equipstate">0</Link></td>
                      <td><Link to="/mro_station_equipstate">0</Link></td>
                      <td><Link to="/mro_station_equipstate">0</Link></td>
                      <td><Link to="/mro_station_equipstate">0</Link></td>
                      <td><Link to="/mro_station_equipstate">0</Link></td>
                      <td><Link to="/mro_station_equipstate">0</Link></td>
                    </TableRow>
                    <TableRow className="fine">
                      <th><Link to="/mro_station_equipstate">월간</Link></th>
                      <td><Link to="/mro_station_equipstate">0</Link></td>
                      <td><Link to="/mro_station_equipstate">0</Link></td>
                      <td><Link to="/mro_station_equipstate">0</Link></td>
                      <td><Link to="/mro_station_equipstate">0</Link></td>
                      <td><Link to="/mro_station_equipstate">0</Link></td>
                      <td><Link to="/mro_station_equipstate">0</Link></td>
                      <td><Link to="/mro_station_equipstate">0</Link></td>
                      <td><Link to="/mro_station_equipstate">0</Link></td>
                      <td><Link to="/mro_station_equipstate">0</Link></td>
                      <td><Link to="/mro_station_equipstate">0</Link></td>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </MainCard>

            <MainCard style={{marginTop:"10px"}}>
              <Chip label="성능검사 대상" color="warning" style={{color:"#fff"}} />
              <TableContainer>
                <Table sx={{ minWidth: 800 }} aria-label="simple table" className="part_status">
                  <TableHead>
                    <TableRow>
                      <TableCell className="train1" align="center"><Link to="/mro_station_equipstate">계산</Link></TableCell>
                      <TableCell className="train1" align="center"><Link to="/mro_station_equipstate">귤현</Link></TableCell>
                      <TableCell className="train1" align="center"><Link to="/mro_station_equipstate">박촌</Link></TableCell>
                      <TableCell className="train1" align="center"><Link to="/mro_station_equipstate">임학</Link></TableCell>
                      <TableCell className="train1" align="center"><Link to="/mro_station_equipstate">계산</Link></TableCell>
                      <TableCell className="train1" align="center"><Link to="/mro_station_equipstate">경인교대</Link></TableCell>
                      <TableCell className="train1" align="center"><Link to="/mro_station_equipstate">작전</Link></TableCell>
                      <TableCell className="train1" align="center"><Link to="/mro_station_equipstate">갈산</Link></TableCell>
                      <TableCell className="train1" align="center"><Link to="/mro_station_equipstate">부평구청</Link></TableCell>
                      <TableCell className="train1" align="center"><Link to="/mro_station_equipstate">부평시장</Link></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <td className="train1_in">0</td>
                      <td className="train1_in">0</td>
                      <td className="train1_in">0</td>
                      <td className="train1_in">0</td>
                      <td className="train1_in">0</td>
                      <td className="train1_in">0</td>
                      <td className="train1_in">0</td>
                      <td className="train1_in">0</td>
                      <td className="train1_in">0</td>
                      <td className="train1_in">0</td>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </MainCard>

            <MainCard style={{marginTop:"10px"}}>
              <Chip label="등록 현황" color="info" />
              <TableContainer>
                <Table sx={{ minWidth: 400 }} aria-label="simple table" className="same_width">
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
          
          <Col sm={6} className="main_right">
            <MroTable11 />
            <MroTable22 />
            <MroTable33 />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default MroPartState;