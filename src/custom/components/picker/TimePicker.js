import * as React from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export function BasicTimePicker() {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export default BasicTimePicker;

// // material-ui
// import { Stack, TextField } from '@mui/material';

// // project import
// // import MainCard from 'components/MainCard';

// // ==============================|| DATE PICKER - NATIVE ||============================== //

// export function TimePicker() {
//   const nativeDatepickerCodeString = `<TextField
//   id="time"
//   label="Alarm Clock"
//   type="time"
//   defaultValue="07:30"
//   InputLabelProps={{
//     shrink: true
//   }}
//   inputProps={{
//     step: 300 // 5 min
//   }}
//   sx={{ width: 150 }}
// />`;

//   return (
//     <Stack component="form" noValidate spacing={3} codeString={nativeDatepickerCodeString} >
//       <TextField
//         id="time"
//         // label="Alarm Clock"
//         type="time"
//         defaultValue={new Date().getTime()}
//         InputLabelProps={{
//           shrink: true
//         }}
//         inputProps={{
//           step: 300 // 5 min
//         }}
//         sx={{ width: 140 }}
//       />
//     </Stack>
//   );
// }

// export default TimePicker;
