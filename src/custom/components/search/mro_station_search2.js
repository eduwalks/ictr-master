import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';

const themec = createTheme({
  palette: {
    mode: "light",
  }
});

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
  return (
    <>
      <ThemeProvider theme={themec}>
        <CssBaseline />
        <div>
          <Box component="form" /*style={{display:"flex", alignItems:"center"}}*/>
            <div>
              <div>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel htmlFor="grouped-select">설비대분류</InputLabel>
                  <Select defaultValue="" id="grouped-select" label="설비대분류">
                    <MenuItem value={1}>계산</MenuItem>
                    <MenuItem value={2}>예술회관</MenuItem>
                    <MenuItem value={3}>동막</MenuItem>
                    <MenuItem value={4}>검암</MenuItem>
                    <MenuItem value={5}>가재울</MenuItem>
                    <MenuItem value={6}>인천시청</MenuItem>
                  </Select>
                </FormControl>

                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel htmlFor="grouped-select">설비중분류</InputLabel>
                  <Select defaultValue="" id="grouped-select" label="설비중분류">
                    <MenuItem value={1}>계산</MenuItem>
                    <MenuItem value={2}>예술회관</MenuItem>
                  </Select>
                </FormControl>

                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel htmlFor="grouped-select">설비분류</InputLabel>
                  <Select defaultValue="" id="grouped-select" label="설비분류">
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

                  <Button variant="contained" style={{marginTop:"7px",padding:"8px 15px"}}><span className="material-symbols-outlined">search</span>검색</Button>
                </div>
              </div>
            </div>
          </Box>
        </div>
      </ThemeProvider>
    </>
  );
}