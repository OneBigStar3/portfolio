import React from 'react';
// import Carousel from 'carouzel';
// mui
import { useTheme } from '@mui/material/styles';
import { Box, Paper, Stack, Switch, Slide, FormControlLabel } from '@mui/material';

export default function CarouzelPost() {
  const theme = useTheme();
  const [checked, setChecked] = React.useState(false);
  const containerRef = React.useRef(null);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    // <Carousel>
      // <Box
      //   sx={{
      //     display: 'flex',
      //     flexWrap: 'wrap',
      //     '& > :not(style)': {
      //       m: 1,
      //       width: 128,
      //       height: 128,
      //     },
      //   }}
      // >
      //   <Paper elevation={0} />
      //   <Paper />
      //   <Paper elevation={3} />
      // </Box>
    // </Carousel>
    <Box
      sx={{
        // height: 180,
        // width: 240,
        // display: 'flex',
        padding: 2,
        borderRadius: 1,
        bgcolor: (theme) =>
          theme.palette.mode === 'light' ? 'grey.100' : 'grey.900',
        overflow: 'hidden',
      }}
      
    >
      <Box sx={{ width: '200%' }}>
        <Stack direction="row"  ref={containerRef}>
            <Slide direction="right" in={checked} >
          <Stack sx={{width: '90%'}}>
              <Box sx={{ m: 1, width: '90%', height:128, bgcolor: '#222EAF' }}  />
            {/* </Slide>
            <Slide direction="right" in={checked} container={containerRef.current}> */}
              <Box sx={{ m: 1, width: '90%', height:128, bgcolor: '#222EAF' }}  />
          </Stack>
            </Slide>
            <Slide direction="left" in={!checked} >
          <Stack sx={{width: '90%'}}>
            {/* <Slide direction="left" in={!checked} container={containerRef.current}> */}
              <Box sx={{ m: 1, width: '90%', height:128, bgcolor: '#222EAF' }}  />
            {/* </Slide>
            <Slide direction="left" in={!checked} container={containerRef.current}> */}
              <Box sx={{ m: 1, width: '90%', height:128, bgcolor: '#222EAF' }}  />
            {/* </Slide> */}
          </Stack>
          </Slide>
        </Stack>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Show from target"
        />
      </Box>
    </Box>
  );
}
