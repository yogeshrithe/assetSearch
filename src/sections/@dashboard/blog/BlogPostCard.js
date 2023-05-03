import PropTypes from 'prop-types';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Link, Card, Grid, Avatar, Typography, CardContent, Container } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
// utils
import { fDate } from '../../../utils/formatTime';
import { fShortenNumber } from '../../../utils/formatNumber';
//
import SvgColor from '../../../components/svg-color';
import Iconify from '../../../components/iconify';
import ShapeAvatar from '../../../components/assets/img/shape-avatar.svg'
import Avatar1 from '../../../components/assets/img/avatar_1.jpg'

// ----------------------------------------------------------------------

const StyledCardMedia = styled('div')({
  position: 'relative',
  paddingTop: 'calc(100% * 3 / 4)',
});

const StyledTitle = styled(Link)({
  height: 24,
  fontSize: '16px',
  overflow: 'hidden',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
});

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  zIndex: 9,
  width: 32,
  height: 32,
  position: 'absolute',
  left: theme.spacing(3),
  bottom: theme.spacing(-2),
}));

const StyledInfo = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  marginTop: theme.spacing(3),
  color: theme.palette.text.disabled,
}));

const StyledCover = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

BlogPostCard.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default function BlogPostCard({ data, index }) {

  const { cover, name, designation, description } = data;

  return (
    <Grid item xs={12} md={3}>
      <Card >
        <StyledCardMedia
        >
          <SvgColor
            color="paper"
            src={ShapeAvatar}
            sx={{
              width: 80,
              height: 36,
              zIndex: 9,
              bottom: -15,
              position: 'absolute',
              color: 'background.paper',
            }}
          />
          <StyledAvatar
            src={Avatar1}
          />

          <StyledCover alt={name} src={cover} />
        </StyledCardMedia>

        <CardContent
          sx={{
            pt: 4,
          }}
        >
          <StyledTitle
            color="inherit"
            variant="subtitle2"
            underline="hover"
          >
            {name}
          </StyledTitle>
          <Typography sx={{ color: 'red', fontSize: '13px' }}>
            {designation}
          </Typography>

          <StyledInfo>
            <FacebookIcon style={{marginRight:'10px',color:'#3b5998'}}/>
            <TwitterIcon style={{marginRight:'10px',color:'#00aced'}}/>
            <InstagramIcon style={{color:'#bc2a8d'}}/>
          </StyledInfo>
        </CardContent>
      </Card>
    </Grid>
  );
}
