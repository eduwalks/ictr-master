import { useState } from 'react';
import { Button, Divider, Modal, CardContent, Stack, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import MainCard from 'components/MainCard';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import DatePicker from '../picker/DatePicker';

export function InSpection() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="contained" onClick={handleOpen} style={{padding:"3px", minWidth:"unset"}} color="grey">
        <span className="material-symbols-outlined" style={{color:"#fff"}}>build</span>
      </Button>

      <Modal className="pop_box" open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <MainCard title="현장(상시)점검" modal darkTitle content={false}>
          <CardContent>
            <TableContainer>
              <Table sx={{ minWidth: 800 }} aria-label="simple table">
                <TableBody>
                    <TableRow>
                      <TableCell className="th">호선</TableCell>
                      <TableCell>            
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                          <Select defaultValue="" id="grouped-select">
                            {/* <MenuItem value="">None</MenuItem> */}
                            <MenuItem value={1}></MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>
                      <TableCell className="th">파트</TableCell>
                      <TableCell>            
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                          <Select defaultValue="" id="grouped-select">
                            {/* <MenuItem value="">None</MenuItem> */}
                            <MenuItem value={1}></MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>
                      <TableCell className="th">역사</TableCell>
                      <TableCell>            
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
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
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                          <Select defaultValue="" id="grouped-select">
                            {/* <MenuItem value="">None</MenuItem> */}
                            <MenuItem value={1}></MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>
                      <TableCell className="th">설비중분류</TableCell>
                      <TableCell>            
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                          <Select defaultValue="" id="grouped-select">
                            {/* <MenuItem value="">None</MenuItem> */}
                            <MenuItem value={1}></MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>
                      <TableCell className="th">설비분류</TableCell>
                      <TableCell>            
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                          <Select defaultValue="" id="grouped-select">
                            {/* <MenuItem value="">None</MenuItem> */}
                            <MenuItem value={1}></MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="th">설비명</TableCell>
                      <TableCell colspan="3">▼</TableCell>
                      <TableCell className="th">설비번호</TableCell>
                      <TableCell></TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="th">경보일시</TableCell>
                      <TableCell colspan="3"></TableCell>
                      <TableCell className="th">경보유형</TableCell>
                      <TableCell></TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="th">경보분류</TableCell>
                      <TableCell></TableCell>
                      <TableCell className="th">경보내용</TableCell>
                      <TableCell colspan="3"></TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="th">경보확인 일시</TableCell>
                      <TableCell colspan="3"></TableCell>
                      <TableCell className="th">경보확인자</TableCell>
                      <TableCell></TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="th">설비구성부</TableCell>
                      <TableCell>            
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                          <Select defaultValue="" id="grouped-select">
                            {/* <MenuItem value="">None</MenuItem> */}
                            <MenuItem value={1}></MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>
                      <TableCell className="th">보수구분</TableCell>
                      <TableCell>            
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                          <Select defaultValue="" id="grouped-select">
                            {/* <MenuItem value="">None</MenuItem> */}
                            <MenuItem value={1}></MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>
                      <TableCell className="th">분석유형</TableCell>
                      <TableCell>            
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                          <Select defaultValue="" id="grouped-select">
                            {/* <MenuItem value="">None</MenuItem> */}
                            <MenuItem value={1}></MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="th">고장(유지보수)발생일</TableCell>
                      <TableCell></TableCell>
                      <TableCell className="th">고장(유지보수)발생시간</TableCell>
                      <TableCell></TableCell>
                      <TableCell className="th">고장(유지보수)원인</TableCell>
                      <TableCell>            
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                          <Select defaultValue="" id="grouped-select">
                            {/* <MenuItem value="">None</MenuItem> */}
                            <MenuItem value={1}></MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="th">작업시작일</TableCell>
                      <TableCell><DatePicker /></TableCell>
                      <TableCell className="th">작업시작시간</TableCell>
                      <TableCell></TableCell>
                      <TableCell className="th">활용장비</TableCell>
                      <TableCell>            
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                          <Select defaultValue="" id="grouped-select">
                            {/* <MenuItem value="">None</MenuItem> */}
                            <MenuItem value={1}></MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="th">작업종료일</TableCell>
                      <TableCell></TableCell>
                      <TableCell className="th">작업종료시간</TableCell>
                      <TableCell></TableCell>
                      <TableCell className="th">조치유형</TableCell>
                      <TableCell>            
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
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
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                          <Select defaultValue="" id="grouped-select">
                            {/* <MenuItem value="">None</MenuItem> */}
                            <MenuItem value={1}></MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>
                      <TableCell className="th">작업상태</TableCell>
                      <TableCell>            
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
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
                      <TableCell colspan="5"></TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="th">투입자재</TableCell>
                      <TableCell colspan="5">자재유형▼   자재대분류▼   자재중분류▼  규격   수량   ✚</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="th">첨부파일</TableCell>
                      <TableCell colspan="5">첨부파일  ✚</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="th">비고</TableCell>
                      <TableCell colspan="5"></TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="th">확인</TableCell>
                      <TableCell></TableCell>
                      <TableCell className="th">확인자</TableCell>
                      <TableCell></TableCell>
                      <TableCell className="th">확인일</TableCell>
                      <TableCell></TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="th">상황보고일</TableCell>
                      <TableCell></TableCell>
                      <TableCell className="th">상황보고파일</TableCell>
                      <TableCell colspan="3"></TableCell>
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

export default InSpection;
