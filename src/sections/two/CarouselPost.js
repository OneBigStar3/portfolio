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
import ProjectCarousel from './../../components/Carousels/ProjectCarousel';

const _carouselsExample = [...Array(5)].map((_, index) => ({
  id: 1,
  title: 'Introducing GemPad',
  // image: _mock.image.cover(index),
  image: '/assets/images/defaults/default_bg.png',
  description:
    'The Launchpad for everyone who wants to launch or invest in the best projects. GemPad is the communitys launchpad where our community has a say. Here we have unmatched support unlike anything out there, while still having some of the lowest fees. Choose GemPad, pick the best option for your project and community.',
}));

const CarouselPost = ({color, post}) => {
    const theme = useTheme();
    const bgColor = color == '0' ? '#222EAF' : '#4246A5';
  
    return (
      <Paper
        square
        sx={{
          flex: 1,
          // textAlign: 'center',
          bgcolor: `${bgColor}`,
          color: theme.palette.text.navbar,
          height: 480,
          px: 12,
          py: 5
        }}
      >
        {/* <CarouzelPost /> */}
        <ProjectCarousel data={_carouselsExample} />
        {/* <Stack spacing={3}>
          <CarouzelPost />
        </Stack> */}
      </Paper>
    );  
}

export default CarouselPost;