import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "./Card.css";
import CardHeader from '@material-ui/core/CardHeader';
import { red, blue } from '@material-ui/core/colors';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    minWidth: 300,
    height: 400
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  avatar: {
    backgroundColor: blue[700],
  },
}));

const MyCard = ({id, book}) => {
  const classes = useStyles();

  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbXCpiYKfm11YUjU715AE4xto0XO6fzBiL8Q&usqp=CAU"
  ];

  return (

    <div className='card'>
    <Card className={classes.root}>
      <CardHeader
        action={
          <div className="price">
            <div className='shelf'>
            {/* G4 */}
            {book.shelf_number}
          </div>
            <div className='shelf'>
            Rs{book.price}
          </div>
          </div>
        }
        title={book.name}
        subheader="Authore Name"
      />
      <CardMedia
        className={classes.media}
        image={images[0]}
        title={book.name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {book.description}
          {/* This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like. */}
        </Typography>
      </CardContent>
    </Card>
  </div>
  );
};
export default MyCard;