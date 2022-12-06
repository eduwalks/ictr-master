// material-ui
import { Stack, TextField } from '@mui/material';

// project import
// import MainCard from 'components/MainCard';

// ==============================|| DATE PICKER - NATIVE ||============================== //

export function DatePicker() {
  const nativeDatepickerCodeString = `<TextField
  id="date"
  label="Birthday"
  type="date"
  defaultValue="2017-05-24"
  sx={{ width: 220 }}
  InputLabelProps={{
    shrink: true
  }}
/>`;

  return (
      <Stack component="form" noValidate spacing={3} codeString={nativeDatepickerCodeString}>
        <TextField
          id="date"
          // label="Birthday"
          type="date"
          defaultValue={new Date().getDate()+"-"+(new Date().getMonth()+1)+"-"+new Date().getFullYear()}
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true
          }}
        />
      </Stack>
  );
}

export default DatePicker;