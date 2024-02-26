import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';

import CardActions from '@mui/material/CardActions';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import './card.css'
import MessageIcon from '@mui/icons-material/Message';
import { padding } from '@mui/system';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            {<img style={{ width: "100%", paddingLeft: -0 }} src={props.imgee} />}
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Black Glass"
        subheader="2 hours ago"
      />
      <CardMedia

      />
      <Typography variant="body2" color="text.secondary">
        {props.phyragraph} {<img src={props.imge} />}
      </Typography>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <MessageIcon style={{ color: "#fff" }} /><span>22</span>
        </IconButton >
        <IconButton aria-label="share">
          <ShareIcon style={{ color: "#fff" }} /><span>22</span>
        </IconButton>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon style={{ color: "#fff" }} /><span>22</span>
        </IconButton>

      </CardActions>

    </Card>
  );
}
