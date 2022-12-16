import { useState } from 'react';
import { Button, Divider, Modal, CardContent, Stack, Table, TableBody, TableCell, TableContainer, TableRow, TextField } from '@mui/material';
import MainCard from 'components/MainCard';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import BasicDatePicker from '../picker/DatePicker';
// import BasicTimePicker from '../picker/TimePicker';

export function Watch() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        주의관찰
      </Button>

      <Modal className="pop_box" open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <MainCard title="주의관찰" modal darkTitle content={false}>
          <CardContent>
            <TableContainer>
              <Table sx={{ minWidth: 1000 }} aria-label="simple table" className="same_width pop_table">
                <TableBody>
                  <TableRow>
                    <TableCell className="th">호선</TableCell>
                    <TableCell>            
                      <FormControl sx={{ m: 1, minWidth: '90%' }}>
                        <Select defaultValue="" id="grouped-select">
                          {/* <MenuItem value="">None</MenuItem> */}
                          <MenuItem value={1}></MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell className="th">파트</TableCell>
                    <TableCell>            
                      <FormControl sx={{ m: 1, minWidth: '90%' }}>
                        <Select defaultValue="" id="grouped-select">
                          {/* <MenuItem value="">None</MenuItem> */}
                          <MenuItem value={1}></MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell className="th">역사</TableCell>
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
                    <TableCell className="th">설비대분류</TableCell>
                    <TableCell>            
                      <FormControl sx={{ m: 1, minWidth: '90%' }}>
                        <Select defaultValue="" id="grouped-select">
                          {/* <MenuItem value="">None</MenuItem> */}
                          <MenuItem value={1}></MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell className="th">설비중분류</TableCell>
                    <TableCell>            
                      <FormControl sx={{ m: 1, minWidth: '90%' }}>
                        <Select defaultValue="" id="grouped-select">
                          {/* <MenuItem value="">None</MenuItem> */}
                          <MenuItem value={1}></MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell className="th">설비분류</TableCell>
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
                    <TableCell className="th">설비명</TableCell>
                    <TableCell colspan="3">
                      <FormControl sx={{ m: 1, minWidth: '90%' }}>
                        <Select defaultValue="" id="grouped-select">
                          {/* <MenuItem value="">None</MenuItem> */}
                          <MenuItem value={1}></MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell className="th">설비번호</TableCell>
                    <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">경보일시</TableCell>
                    <TableCell colspan="3" className='pa10'><BasicDatePicker /></TableCell>
                    <TableCell className="th">경보유형</TableCell>
                    <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">경보분류</TableCell>
                    <TableCell>
                      <TextField
                        id="outlined-multiline-static"
                        multiline
                        sx={{ m: 1, minWidth: '90%' }}
                        rows={4}
                      />
                    </TableCell>
                    <TableCell className="th">경보내용</TableCell>
                    <TableCell colspan="3">
                      <TextField
                        id="outlined-multiline-static"
                        multiline
                        sx={{ m: 1, minWidth: '90%' }}
                        rows={4}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">경보확인 일시</TableCell>
                    <TableCell colspan="3" className='pa10'><BasicDatePicker /></TableCell>
                    <TableCell className="th">경보확인자</TableCell>
                    <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">현장확인 일시</TableCell>
                    <TableCell colspan="3" className='pa10'><BasicDatePicker /></TableCell>
                    <TableCell className="th">현장확인자</TableCell>
                    <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">후속조치</TableCell>
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
                    <TableCell className="th">주의관찰 기간</TableCell>
                    <TableCell colspan="5" style={{textAlign:"center"}}>
                      해당없음&nbsp;&nbsp;&nbsp;1개월&nbsp;&nbsp;&nbsp;3개월&nbsp;&nbsp;&nbsp;6개월&nbsp;&nbsp;&nbsp;기타
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">주의관찰 내용</TableCell>
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
                    <TableCell className="th">주의관찰 등록일</TableCell>
                    <TableCell colspan="2" className='pa10' style={{textAlign:"left"}}><div className="piker"><BasicDatePicker /></div></TableCell>
                    <TableCell className="th">주의관찰 종료일</TableCell>
                    <TableCell colspan="2">
                      <div className="piker"><BasicDatePicker /></div>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">등록처리자</TableCell>
                    <TableCell colspan="2"><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                    <TableCell className="th">상태</TableCell>
                    <TableCell colspan="2"><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">해제처리자</TableCell>
                    <TableCell colspan="2"><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                    <TableCell className="th">해제일</TableCell>
                    <TableCell colspan="2"><div className="piker"><BasicDatePicker /></div></TableCell>
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

export default Watch;
