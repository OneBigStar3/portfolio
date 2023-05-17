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
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from '@mui/material';
import { Stack } from '@mui/system';

function MainFeaturedPost(props) {
  const theme = useTheme();
  const { post, color } = props;
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
      <Stack spacing={3}>
        <Typography component="h2" variant="h2">
          {post.title}
        </Typography>
        {/* <Typography variant="subtitle1" color="text.navbar">
              {post.date}
            </Typography> */}
        <Typography variant="h5" paragraph>
          {post.description}
        </Typography>
        <Typography variant="h5" color="primary">
          Continue reading...
        </Typography>
      </Stack>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainFeaturedPost;
