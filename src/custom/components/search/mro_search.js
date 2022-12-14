import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DialogSelectBase() {
  return (
    <>
      <div>
        <Box component="form">
          <div>
            <div>
              <FormControl sx={{ m: 1, minWidth: 120 }} style={{marginLeft:"0"}}>
                <InputLabel htmlFor="grouped-select">호선</InputLabel>
                <Select defaultValue="" id="grouped-select" className="sub_container_ce_in" label="운용상태">
                  {/* <MenuItem value="">None</MenuItem> */}
                  <MenuItem value={1}>1호선</MenuItem>
                  <MenuItem value={2}>2호선</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="grouped-select">파트</InputLabel>
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
                <InputLabel htmlFor="grouped-select">역사</InputLabel>
                <Select defaultValue="" id="grouped-select" label="설비중분류">
                  <MenuItem value={1}>계산</MenuItem>
                  <MenuItem value={2}>예술회관</MenuItem>
                </Select>
              </FormControl>
              <Button variant="contained" style={{marginTop:"9px",padding:"8px 15px"}}><span className="material-symbols-outlined">search</span>검색</Button>

            </div>
          </div>
        </Box>
      </div>
    </>
  );
}