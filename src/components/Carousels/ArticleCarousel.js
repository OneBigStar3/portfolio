import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import { useState, useRef } from 'react';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import { Box, Card, Paper, Button, Grid, Stack, Typography, CardContent } from '@mui/material';
// utils
import { bgGradient } from 'utils/cssStyles';
// components
// import Image from 'next/image';
import Iconify from 'components/iconify';
import { MotionContainer, varFade } from 'components/animate';
import Carousel, { CarouselArrowIndex } from 'components/carousel';

// ----------------------------------------------------------------------

ArticleCarousel.propTypes = {
  data: PropTypes.array,
};

export default function ArticleCarousel({ data }) {
  const theme = useTheme();

  const carouselRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(theme.direction === 'rtl' ? data.length - 1 : 0);

  const carouselSettings = {
    speed: 800,
    dots: false,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    beforeChange: (current, next) => setCurrentIndex(next),
  };

  const handlePrev = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <Stack>
      <Carousel ref={carouselRef} {...carouselSettings}>
        {data.map((item, index) => (
          <CarouselItem key={item.id} item={item} isActive={index === currentIndex} />
        ))}
      </Carousel>

      {/* <CarouselArrowIndex index={currentIndex} total={data.length} onNext={handleNext} onPrevious={handlePrev} /> */}
    </Stack>
  );
}

// ----------------------------------------------------------------------

CarouselItem.propTypes = {
  item: PropTypes.object,
  isActive: PropTypes.bool,
};

function CarouselItem({ item, isActive }) {
  const theme = useTheme();

  const { id, title } = item;

  return (
    <Grid container alignItems="center" columnSpacing={10} mt={10}>
      <Grid item md={6}>
        <Box component="img" src={`/assets/background/${id}.jpg`} sx={{ borderRadius: 2 }} />
      </Grid>
      <Grid item md={6}>
        <Stack alignItems="flex-start">
          <Typography variant="h5" color="text.secondary">
            Updates
          </Typography>
          <Stack spacing={2} alignItems="flex-start">
            <Typography variant="h3" color="black">Introducing GemPad</Typography>
            <Typography color="black">
              The Launchpad for everyone who wants to launch or invest in the best projects. GemPad is the community's launchpad where our community has a say. Here we have unmatched support unlike
              anything out there, while still having some of the lowest fees. Choose GemPad, pick the best option for your project and community.
            </Typography>
            <Button color="secondary" endIcon={<Iconify icon="eva:diagonal-arrow-right-up-fill" />}>
              Learn More
            </Button>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
}
