import { useState } from 'react';
import { Button, Divider, Modal, CardContent, Stack, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import MainCard from 'components/MainCard';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// import BasicDatePicker from '../picker/DatePicker';

export function Mro() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        유지보수 확인
      </Button>

      <Modal className="pop_box" open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <MainCard title="유지보수" modal darkTitle content={false}>
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
                    <TableCell className="th">설비구성부</TableCell>
                    <TableCell className="view_td view_flex">            
                      <span></span><span>SF</span>
                    </TableCell>
                    <TableCell className="th">보수구분</TableCell>
                    <TableCell className="view_td view_flex">            
                      <span></span><span>자제</span>
                    </TableCell>
                    <TableCell className="th">분석유형</TableCell>
                    <TableCell className="view_td view_flex">            
                      <span></span><span>유지보수</span>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">고장(유지보수) 원인</TableCell>
                    <TableCell colspan="5" className="view_td">송풍기 베어링 이상</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">작업시작일</TableCell>
                    <TableCell className="view_td">2022-12-21</TableCell>
                    <TableCell className="th">작업시작시간</TableCell>
                    <TableCell className="view_td">09:30</TableCell>
                    <TableCell className="th">활용장비</TableCell>
                    <TableCell className="view_td view_flex">            
                      <span></span><span>일반</span>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">작업종료일</TableCell>
                    <TableCell className="view_td">2022-12-21</TableCell>
                    <TableCell className="th">작업종료시간</TableCell>
                    <TableCell className="view_td">10:30</TableCell>
                    <TableCell className="th">조치유형</TableCell>
                    <TableCell className="view_td view_flex">            
                      <span></span><span>유지보수<br/>(조정/정비)</span>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">작업자</TableCell>
                    <TableCell colspan="3" className="view_td">이길동, 홍길동</TableCell>
                    <TableCell className="th">작업상태</TableCell>
                    <TableCell className="view_td view_flex">            
                      <span></span><span>작업완료</span>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">작업내용</TableCell>
                    <TableCell colspan="5" className="view_td">송풍기 점검</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">투입자재</TableCell>
                    <TableCell colspan="5" className="view_td">(저장품)공기조화설비 &gt; 구동부 &gt; 구동부기타 - 10</TableCell>
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
                    <TableCell colspan="5"></TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="th">비용</TableCell>
                    <TableCell className="view_td">&nbsp;</TableCell>
                    <TableCell className="th">확인여부</TableCell>
                    <TableCell className="view_td">&nbsp;</TableCell>
                    <TableCell className="th">확인자</TableCell>
                    <TableCell className="view_td">&nbsp;</TableCell>
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
        </MainCard>
      </Modal>
    </>
  )
}

export default Mro;
