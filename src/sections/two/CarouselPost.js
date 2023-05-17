import * as React from 'react';
import PropTypes from 'prop-types';
// mui
import { useTheme } from '@mui/material/styles';
import {
  Paper,
  Typography,
  Grid,
  Link,
  Box,
  Stack,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from '@mui/material';
import CarouzelPost from './CarouzelPost';

const CarouselPost = ({color, post}) => {
    const theme = useTheme();
    const bgColor = color == '0' ? '#222EAF' : '#4246A5';
  
    return (
      <Paper
        square
        sx={{
          flex: 1,
          // textAlign: 'center',
          backgroundColor: `${bgColor}`,
          color: theme.palette.text.navbar,
          height: 480,
          px: 12,
          py: 5
        }}
      >
        <CarouzelPost />
        {/* <Stack spacing={3}>
          <CarouzelPost />
        </Stack> */}
      </Paper>
    );  
}

export default CarouselPost;