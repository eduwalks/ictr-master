import { useState } from 'react';
import { Button, Divider, Modal, CardContent, Stack, Table, TableBody, TableCell, TableContainer, TableRow /*TextField*/ } from '@mui/material';
import MainCard from 'components/MainCard';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// import BasicDatePicker from '../picker/DatePicker';
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
                    <TableCell colspan="3" className="view_td">2022-12-21 09:32</TableCell>
                    <TableCell className="th">현장확인자</TableCell>
                    <TableCell className="view_td">홍길동</TableCell>
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
                    <TableCell className="th">주의관찰 기간</TableCell>
                    <TableCell colspan="5" className="view_td">2022년 12월 31일 까지</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">주의관찰 내용</TableCell>
                    <TableCell colspan="5" className="view_td">특이사항 발견 안되나 이상진동 경보 발생으로 예의 주시 필요</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">주의관찰 등록일</TableCell>
                    <TableCell colspan="2" className="view_td">2022-12-21</TableCell>
                    <TableCell className="th">주의관찰 등록자</TableCell>
                    <TableCell colspan="2" className="view_td">홍길동</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">해제처리자</TableCell>
                    <TableCell colspan="2">&nbsp;</TableCell>
                    <TableCell className="th">해제일</TableCell>
                    <TableCell colspan="2">&nbsp;</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">상태</TableCell>
                    <TableCell colspan="5" className="view_td">
                      <div style={{display:"flex",justifyContent:"space-between",padding:"0 9px"}}>
                        <span></span>
                        <span>유효</span>
                        <Button variant="contained" color="warning" style={{padding:"0 9px", color:"#fff"}}>주의관찰 해제</Button>
                      </div>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">상황보고내용</TableCell>
                    <TableCell colspan="5" className="view_td">&nbsp;</TableCell>
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
                    <TableCell className="view_td">&nbsp;</TableCell>
                    <TableCell className="th">상황보고일</TableCell>
                    <TableCell colspan="3" style={{textAlign:"left"}}>
                      {/* <div style={{width:"40%",marginLeft:"8px"}}><BasicDatePicker /></div> */}&nbsp;
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
          <Divider />
          <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ px: 2.5, py: 2 }}>
            <Button variant="contained" size="small">수정</Button>
            <Button color="error" size="small" onClick={handleClose}>취소</Button>
          </Stack>

          <CardContent>
            <TableContainer>
              <Table sx={{ minWidth: 1000 }} aria-label="simple table" className="same_width pop_table view_table">
                <TableBody>
                  <TableRow>
                    <TableCell className="th">경보유예 기간</TableCell>
                    <TableCell colspan="5" className="view_td">2022년 12월 31일 까지</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">경보유예 등록일</TableCell>
                    <TableCell colspan="2" className="view_td"></TableCell>
                    <TableCell className="th">경보유예 등록자</TableCell>
                    <TableCell colspan="2" className="view_td"></TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">해제처리자</TableCell>
                    <TableCell colspan="2">&nbsp;</TableCell>
                    <TableCell className="th">해제일</TableCell>
                    <TableCell colspan="2">&nbsp;</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">상태</TableCell>
                    <TableCell colspan="5" className="view_td">
                      <div style={{display:"flex",justifyContent:"space-between",padding:"0 9px"}}>
                        <span></span>
                        <span>유효</span>
                        <Button variant="contained" color="warning" style={{padding:"0 9px", color:"#fff"}}>주의관찰 해제</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </MainCard>
      </Modal>
    </>
  )
}

export default Watch;
