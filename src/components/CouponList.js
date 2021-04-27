import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Couponcode(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
      <div>
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKJCojb9KvG6QCD2bUve1NOCGSNfmkbJH_WQ&usqp=CAU"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Use PromoCode: <Chip
      
      label={props.code}
      clickable
      color="primary"
     
     
      variant="outlined"
      style={{border:"dotted"}}
    />
          <br/>
          <br/>
          validity: Till 30 April, 2021
        </Typography>
      </CardContent>
      
      
    </Card>
    <br></br>
    </div>
  );
}
