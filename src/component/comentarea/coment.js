import * as React from 'react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import { height, padding } from '@mui/system';

function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      
    }

    
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}

export default function UseFormControl() {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: '100%', height:"100%" }}>
        <OutlinedInput placeholder="Please enter text"sx={{ width:"100%", height:"100px",}} />
        <MyFormHelperText />
      </FormControl>
    </Box>
  );
}
