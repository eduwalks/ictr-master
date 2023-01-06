import { useState } from 'react';
import { Button, Divider, Modal, CardContent, Stack, Table, TableBody, TableCell, TableContainer, TableRow, TextField } from '@mui/material';
import MainCard from 'components/MainCard';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import BasicDatePicker from '../picker/DatePicker';
import BasicTimePicker from '../picker/TimePicker';

export function InSpection1() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        현장(상시)점검
      </Button>

      <Modal className="pop_box" open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <MainCard title="현장(상시)점검" modal darkTitle content={false}>
          <CardContent>
            <TableContainer>
              <Table sx={{ minWidth: 1000 }} aria-label="simple table" className="same_width pop_table view_table">
                <TableBody>
                <TableRow>
                    <TableCell className="th">호선</TableCell>
                    <TableCell className="view_td">1호선</TableCell>
                    <TableCell className="th">파트</TableCell>
                    <TableCell className="view_td">계산</TableCell>
                    <TableCell className="th">역사</TableCell>
                    <TableCell className="view_td">작전</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">설비대분류</TableCell>
                    <TableCell className="view_td">공기조화설비</TableCell>
                    <TableCell className="th">설비중분류</TableCell>
                    <TableCell className="view_td">공기조화기</TableCell>
                    <TableCell className="th">설비분류</TableCell>
                    <TableCell className="view_td">승강장공조기</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">설비명</TableCell>
                    <TableCell colspan="3" className="view_td">좌대합실 공조기</TableCell>
                    <TableCell className="th">설비번호</TableCell>
                    <TableCell className="view_td">124-L-AHU01-RF1</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">경보일시</TableCell>
                    <TableCell colspan="3" className="view_td">2022-12-20 13:03</TableCell>
                    <TableCell className="th">경보유형</TableCell>
                    <TableCell className="view_td">IoT경보</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">경보분류</TableCell>
                    <TableCell className="view_td">결함발생</TableCell>
                    <TableCell className="th">경보내용</TableCell>
                    <TableCell colspan="3" className="view_td">전동기 이상 진동</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">현장확인 일시</TableCell>
                    <TableCell colspan="3"><div style={{width:"40%",marginLeft:"8px"}}><BasicDatePicker /></div></TableCell>
                    <TableCell className="th">현장확인자</TableCell>
                    <TableCell className="view_td"></TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">후속조치</TableCell>
                    <TableCell colspan="5">
                      <FormControl sx={{ m: 1, minWidth: '200px' }}>
                        <InputLabel id="demo-simple-select-label">주의관찰</InputLabel>
                        <Select defaultValue="" id="grouped-select">
                          {/* <MenuItem value="">None</MenuItem> */}
                          <MenuItem value={1}></MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">설비구성부</TableCell>
                    <TableCell>            
                      <FormControl sx={{ m: 1, minWidth: '90%' }}>
                        <Select defaultValue="" id="grouped-select">
                          {/* <MenuItem value="">None</MenuItem> */}
                          <MenuItem value={1}></MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell className="th">보수구분</TableCell>
                    <TableCell>            
                      <FormControl sx={{ m: 1, minWidth: '90%' }}>
                        <Select defaultValue="" id="grouped-select">
                          {/* <MenuItem value="">None</MenuItem> */}
                          <MenuItem value={1}></MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell className="th">분석유형</TableCell>
                    <TableCell>            
                      <FormControl sx={{ m: 1, minWidth: '90%' }}>
                        <Select defaultValue="" id="grouped-select">
                          {/* <MenuItem value="">None</MenuItem> */}
                          <MenuItem value={1}></MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">고장(유지보수)<br />원인</TableCell>
                    <TableCell colspan="5">            
                      <FormControl sx={{ m: 1, minWidth: '90%' }}>
                        <Select defaultValue="" id="grouped-select">
                          {/* <MenuItem value="">None</MenuItem> */}
                          <MenuItem value={1}></MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">작업시작일</TableCell>
                    <TableCell className="view_td" style={{textAlign:"left"}}><div style={{width:"100%",marginLeft:"7px"}}><BasicDatePicker /></div></TableCell>
                    <TableCell className="th">작업시작시간</TableCell>
                    <TableCell className="view_td"><BasicTimePicker /></TableCell>
                    <TableCell className="th">활용장비</TableCell>
                    <TableCell>            
                      <FormControl sx={{ m: 1, minWidth: '90%' }}>
                        <Select defaultValue="" id="grouped-select">
                          {/* <MenuItem value="">None</MenuItem> */}
                          <MenuItem value={1}></MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">작업종료일</TableCell>
                    <TableCell className="view_td" style={{textAlign:"left"}}><div style={{width:"100%",marginLeft:"7px"}}><BasicDatePicker /></div></TableCell>
                    <TableCell className="th">작업종료시간</TableCell>
                    <TableCell className="view_td"><BasicTimePicker /></TableCell>
                    <TableCell className="th">조치유형</TableCell>
                    <TableCell>            
                      <FormControl sx={{ m: 1, minWidth: '90%' }}>
                        <Select defaultValue="" id="grouped-select">
                          {/* <MenuItem value="">None</MenuItem> */}
                          <MenuItem value={1}></MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">작업자</TableCell>
                    <TableCell>            
                      <FormControl sx={{ m: 1, minWidth: '90%' }}>
                        <Select defaultValue="" id="grouped-select">
                          {/* <MenuItem value="">None</MenuItem> */}
                          <MenuItem value={1}></MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell className="th">작업상태</TableCell>
                    <TableCell>            
                      <FormControl sx={{ m: 1, minWidth: '90%' }}>
                        <Select defaultValue="" id="grouped-select">
                          {/* <MenuItem value="">None</MenuItem> */}
                          <MenuItem value={1}></MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell className="th"></TableCell>
                    <TableCell></TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">작업내용</TableCell>
                    <TableCell colspan="5">
                      <TextField
                        id="outlined-multiline-static"
                        multiline
                        sx={{ m: 1, minWidth: '90%' }}
                        rows={4}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">투입자재</TableCell>
                    <TableCell colspan="5">
                      <div className="plus">
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                          <InputLabel id="demo-simple-select-label">자재유형</InputLabel>
                          <Select defaultValue="" id="grouped-select">
                            {/* <MenuItem value="">None</MenuItem> */}
                            <MenuItem value={1}>자재유형</MenuItem>
                          </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                          <InputLabel id="demo-simple-select-label">자재대분류</InputLabel>
                          <Select defaultValue="" id="grouped-select">
                            {/* <MenuItem value="">None</MenuItem> */}
                            <MenuItem value={1}></MenuItem>
                          </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                          <InputLabel id="demo-simple-select-label">자재중분류</InputLabel>
                          <Select defaultValue="" id="grouped-select">
                            {/* <MenuItem value="">None</MenuItem> */}
                            <MenuItem value={1}></MenuItem>
                          </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                          <InputLabel id="demo-simple-select-label">자재분류</InputLabel>
                          <Select defaultValue="" id="grouped-select">
                            {/* <MenuItem value="">None</MenuItem> */}
                            <MenuItem value={1}></MenuItem>
                          </Select>
                        </FormControl>
                        <TextField id="outlined-basic" sx={{ m: 1, width: 50 }} />
                        <div>규격</div>
                        <TextField id="outlined-basic" sx={{ m: 1, width: 50 }} />
                        <div>수량 ✚</div>
                      </div>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">첨부파일</TableCell>
                    <TableCell colspan="5">
                      <input
                        style={{marginLeft:"10px"}}
                        id="upload-photo"
                        name="upload-photo"
                        type="file"
                      />
                      ✚</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">비고</TableCell>
                    <TableCell colspan="5">
                      <TextField
                        id="outlined-multiline-static"
                        multiline
                        sx={{ m: 1, minWidth: '90%' }}
                        rows={4}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">비용</TableCell>
                    <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                    <TableCell className="th">확인여부</TableCell>
                    <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                    <TableCell className="th">확인자</TableCell>
                    <TableCell><div className="piker"><BasicDatePicker /></div></TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">상황보고내용</TableCell>
                    <TableCell colspan="5">
                      <TextField
                        id="outlined-multiline-static"
                        multiline
                        sx={{ m: 1, minWidth: '90%' }}
                        rows={4}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">상황보고파일</TableCell>
                    <TableCell colspan="5">
                      <input
                        style={{marginLeft:"10px"}}
                        id="upload-photo"
                        name="upload-photo"
                        type="file"
                      />
                      ✚</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">상황보고자</TableCell>
                    <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                    <TableCell className="th">상황보고일</TableCell>
                    <TableCell className="view_td" style={{textAlign:"left"}}><div style={{width:"100%",marginLeft:"7px"}}><BasicDatePicker /></div></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
          <Divider />
          <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ px: 2.5, py: 2 }}>
            <Button variant="contained" size="small">
              등록
            </Button>
            <Button color="error" size="small" onClick={handleClose}>
              취소
            </Button>
          </Stack>
        </MainCard>
      </Modal>
    </>
  )
}

export default InSpection1;
