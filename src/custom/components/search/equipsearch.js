import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '8px 26px 8px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

export default function DialogSelect() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  return (
    <>
      <div className="desktop_serach">
        <Box component="form" /*style={{display:"flex", alignItems:"center"}}*/>
          <div>
            <div>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="grouped-select">호선</InputLabel>
                <Select defaultValue="" id="grouped-select" label="호선">
                  {/* <MenuItem value="">None</MenuItem> */}
                  <MenuItem value={1}>1호선</MenuItem>
                  <MenuItem value={2}>2호선</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="grouped-select">파트</InputLabel>
                <Select defaultValue="" id="grouped-select" label="파트">
                  <MenuItem value={1}>계산</MenuItem>
                  <MenuItem value={2}>예술회관</MenuItem>
                  <MenuItem value={3}>동막</MenuItem>
                  <MenuItem value={4}>검암</MenuItem>
                  <MenuItem value={5}>가재울</MenuItem>
                  <MenuItem value={6}>인천시청</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="grouped-select">역사</InputLabel>
                <Select defaultValue="" id="grouped-select" label="역사">
                  <MenuItem value={1}>계산</MenuItem>
                  <MenuItem value={2}>예술회관</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="grouped-select">설비대분류</InputLabel>
                <Select defaultValue="" id="grouped-select" label="설비대분류">
                  <MenuItem value={1}>계산</MenuItem>
                  <MenuItem value={2}>예술회관</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="grouped-select">설비중분류</InputLabel>
                <Select defaultValue="" id="grouped-select" label="설비중분류">
                  <MenuItem value={1}>계산</MenuItem>
                  <MenuItem value={2}>예술회관</MenuItem>
                </Select>
              </FormControl>
              
              <div style={{display:"inline-block"}}>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel htmlFor="grouped-select">설비명</InputLabel>
                  <Select defaultValue="" id="grouped-select" label="설비중분류">
                    <MenuItem value={1}>계산</MenuItem>
                    <MenuItem value={2}>예술회관</MenuItem>
                  </Select>
                </FormControl>

                <FormControl sx={{ m: 1 }} variant="standard">
                  <BootstrapInput id="demo-customized-textbox" />
                </FormControl>
              </div>
            </div>

            <div style={{display:"block"}}>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="grouped-select">종합등급</InputLabel>
                <Select defaultValue="" id="grouped-select" label="종합등급">
                  <MenuItem value={1}>계산</MenuItem>
                  <MenuItem value={2}>예술회관</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="grouped-select">전동기등급</InputLabel>
                <Select defaultValue="" id="grouped-select" label="전동기등급">
                  <MenuItem value={1}>계산</MenuItem>
                  <MenuItem value={2}>예술회관</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="grouped-select">송풍기등급</InputLabel>
                <Select defaultValue="" id="grouped-select" label="송풍기등급">
                  <MenuItem value={1}>계산</MenuItem>
                  <MenuItem value={2}>예술회관</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="grouped-select">V벨트등급</InputLabel>
                <Select defaultValue="" id="grouped-select" label="V벨트등급">
                  <MenuItem value={1}>계산</MenuItem>
                  <MenuItem value={2}>예술회관</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="grouped-select">결함</InputLabel>
                <Select defaultValue="" id="grouped-select" label="결함">
                  <MenuItem value={1}>계산</MenuItem>
                  <MenuItem value={2}>예술회관</MenuItem>
                </Select>
              </FormControl>

              <Button variant="contained" style={{padding:"8px 15px"}}><span className="material-symbols-outlined">search</span>검색</Button>
            </div>
          </div>
        </Box>
      </div>

      <div className="mobile_serach" style={{display:"none"}}>
        <Button style={{width:"100%",marginBottom:"10px"}} variant="contained" color="secondary" onClick={handleClickOpen}>
          <span className="material-symbols-outlined">search</span>검색 카테고리를 오픈합니다.
        </Button>
        <Dialog className="mobile_serach_box" disableEscapeKeyDown open={open} onClose={handleClose}>
          <DialogTitle>검색할 부분을 선택해주세요.</DialogTitle>
          <DialogContent>
            <Box component="form" /*style={{display:"flex", alignItems:"center"}}*/>
              <div>
                <div>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel htmlFor="grouped-select">호선</InputLabel>
                    <Select defaultValue="" id="grouped-select" label="호선">
                      {/* <MenuItem value="">None</MenuItem> */}
                      <MenuItem value={1}>1호선</MenuItem>
                      <MenuItem value={2}>2호선</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel htmlFor="grouped-select">파트</InputLabel>
                    <Select defaultValue="" id="grouped-select" label="파트">
                      <MenuItem value={1}>계산</MenuItem>
                      <MenuItem value={2}>예술회관</MenuItem>
                      <MenuItem value={3}>동막</MenuItem>
                      <MenuItem value={4}>검암</MenuItem>
                      <MenuItem value={5}>가재울</MenuItem>
                      <MenuItem value={6}>인천시청</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel htmlFor="grouped-select">역사</InputLabel>
                    <Select defaultValue="" id="grouped-select" label="역사">
                      <MenuItem value={1}>계산</MenuItem>
                      <MenuItem value={2}>예술회관</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel htmlFor="grouped-select">설비대분류</InputLabel>
                    <Select defaultValue="" id="grouped-select" label="설비대분류">
                      <MenuItem value={1}>계산</MenuItem>
                      <MenuItem value={2}>예술회관</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel htmlFor="grouped-select">설비중분류</InputLabel>
                    <Select defaultValue="" id="grouped-select" label="설비중분류">
                      <MenuItem value={1}>계산</MenuItem>
                      <MenuItem value={2}>예술회관</MenuItem>
                    </Select>
                  </FormControl>
                  
                  <div style={{display:"inline-block"}}>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                      <InputLabel htmlFor="grouped-select">설비명</InputLabel>
                      <Select defaultValue="" id="grouped-select" label="설비중분류">
                        <MenuItem value={1}>계산</MenuItem>
                        <MenuItem value={2}>예술회관</MenuItem>
                      </Select>
                    </FormControl>

                    <FormControl sx={{ m: 1 }} variant="standard">
                      <BootstrapInput id="demo-customized-textbox" />
                    </FormControl>
                  </div>
                </div>

                <div style={{display:"block"}}>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel htmlFor="grouped-select">종합등급</InputLabel>
                    <Select defaultValue="" id="grouped-select" label="종합등급">
                      <MenuItem value={1}>계산</MenuItem>
                      <MenuItem value={2}>예술회관</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel htmlFor="grouped-select">전동기등급</InputLabel>
                    <Select defaultValue="" id="grouped-select" label="전동기등급">
                      <MenuItem value={1}>계산</MenuItem>
                      <MenuItem value={2}>예술회관</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel htmlFor="grouped-select">송풍기등급</InputLabel>
                    <Select defaultValue="" id="grouped-select" label="송풍기등급">
                      <MenuItem value={1}>계산</MenuItem>
                      <MenuItem value={2}>예술회관</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel htmlFor="grouped-select">V벨트등급</InputLabel>
                    <Select defaultValue="" id="grouped-select" label="V벨트등급">
                      <MenuItem value={1}>계산</MenuItem>
                      <MenuItem value={2}>예술회관</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel htmlFor="grouped-select">결함</InputLabel>
                    <Select defaultValue="" id="grouped-select" label="결함">
                      <MenuItem value={1}>계산</MenuItem>
                      <MenuItem value={2}>예술회관</MenuItem>
                    </Select>
                  </FormControl>

                  <Button variant="contained" style={{padding:"8px 15px"}}><span className="material-symbols-outlined">search</span>검색</Button>
                </div>
              </div>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained">검색</Button>
            <Button onClick={handleClose} variant="contained" color="secondary">취소</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}