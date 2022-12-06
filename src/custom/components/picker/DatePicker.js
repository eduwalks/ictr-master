import * as React from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export function BasicDatePicker() {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        // label="년. 월. 일"
        value={value}
        inputFormat="YYYY/MM/DD"
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export default BasicDatePicker;

// // material-ui
// import { Stack, TextField } from '@mui/material';

// // project import
// // import MainCard from 'components/MainCard';

// // ==============================|| DATE PICKER - NATIVE ||============================== //

// export function DatePicker() {
//   const nativeDatepickerCodeString = `<TextField
//   id="date"
//   label="Birthday"
//   type="date"
//   defaultValue="2017-05-24"
//   sx={{ width: 220 }}
//   InputLabelProps={{
//     shrink: true
//   }}
// />`;

//   return (
//     <Stack component="form" noValidate spacing={3} codeString={nativeDatepickerCodeString}>
//       <TextField
//         id="date"
//         // label="Birthday"
//         type="date"
//         defaultValue={new Date().getDate()+"-"+(new Date().getMonth()+1)+"-"+new Date().getFullYear()}
//         sx={{ width: 140 }}
//         InputLabelProps={{
//           shrink: true
//         }}
//       />
//     </Stack>
//   );
// }

// export default DatePicker;