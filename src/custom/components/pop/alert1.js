import { useState } from 'react';
import { Button, Divider, Modal, CardContent, Stack, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import MainCard from 'components/MainCard';
// import InputLabel from '@mui/material/InputLabel';

export function Alert1() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="contained" onClick={handleOpen} style={{padding:"3px", minWidth:"unset"}} color="grey">
        <span className="material-symbols-outlined" style={{color:"#fff"}}>content_paste_search</span>
      </Button>

      <Modal className="pop_box" open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <MainCard title="경보/고장신고/점검요청" modal darkTitle content={false}>
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
                    <TableCell colspan="3" className="view_td">2022-12-20</TableCell>
                    <TableCell className="th">경보유형</TableCell>
                    <TableCell className="view_td">IoT경보</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">경보분류</TableCell>
                    <TableCell className="view_td">결함발생</TableCell>
                    <TableCell className="th">경보내용</TableCell>
                    <TableCell colspan="3" className="view_td">전동기 이상 진동</TableCell>
                  </TableRow>

                  {/* <TableRow>
                    <TableCell className="th">경보확인 일시</TableCell>
                    <TableCell colspan="3" className='pa10'><BasicDatePicker /></TableCell>
                    <TableCell className="th">경보확인자</TableCell>
                    <TableCell><TextField id="outlined-basic" sx={{ m: 1, minWidth: '90%' }} /></TableCell>
                  </TableRow> */}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
          <Divider />
          <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ px: 2.5, py: 2 }}>
            <Button variant="contained" size="small">수정</Button>
            <Button color="error" size="small" onClick={handleClose}>삭제</Button>
          </Stack>

          <CardContent>
            <TableContainer>
              <Table sx={{ minWidth: 1000 }} aria-label="simple table" className="same_width pop_table view_table">
                <TableBody>
                  <TableRow>
                    <TableCell className="th">상황보고 내용</TableCell>
                    <TableCell colspan="5" lassName="view_td"></TableCell>
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
                    <TableCell className="view_td"></TableCell>
                    <TableCell className="th">상황보고일</TableCell>
                    <TableCell colspan="3" lassName="view_td"></TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ px: 2.5, py: 2 }}>
                <Button variant="contained" size="small">상황보고 등록</Button>
              </Stack>
            </TableContainer>
          </CardContent>
        </MainCard>
      </Modal>
    </>
  )
}

export default Alert1;
