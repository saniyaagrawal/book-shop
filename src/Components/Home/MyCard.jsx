import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import clsx from 'clsx';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Avatar from '@material-ui/core/Avatar';
import "./Card.css";
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import { red, blue } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    minWidth: 250
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  avatar: {
    backgroundColor: blue[700],
  },
}));

const MyCard = ({id, book, flag}) => {
  const classes = useStyles();

  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbXCpiYKfm11YUjU715AE4xto0XO6fzBiL8Q&usqp=CAU"
  ];

  const edit_book = (e) => {
    e.preventDefault();
    <Link to={`/add/${id}`} />
  };

  const delete_book = (e) => {
    e.preventDefault();
    
  };

  return (

      <div className='card'>
    <Card className={classes.root}>
      <CardHeader
        // avatar={
        //   <Avatar aria-label="recipe" className={classes.avatar}>
        //     R
        //   </Avatar>
        // }
        action={
          <div className='icons'>
          <IconButton aria-label="edit">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
          </div>
        }
        title="Book name"
        subheader="Authore Name"
      />
      <CardMedia
        className={classes.media}
        image={images[0]}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>

    </Card>
  </div>
  );
};
export default MyCard;