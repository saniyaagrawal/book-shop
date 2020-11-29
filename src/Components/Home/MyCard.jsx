import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import "./Card.css";

const useStyles = makeStyles({
  root: {
    height: 300,
    width: 300,
    margin: 13
  },
  media: {
    height: 150,
    minHeight: 150
  }
});

const MyCard = ({id, book, flag}) => {
  const classes = useStyles();

  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbXCpiYKfm11YUjU715AE4xto0XO6fzBiL8Q&usqp=CAU"
  ];

  const edit_book = (e) => {
    e.preventDefault();
    <Link to={`/add`} />
  };

  const delete_book = (e) => {
    e.preventDefault();
  };

  return (

      <div>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={images[0]} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  Book1
                  {/* {flag ? <EditIcon style={{color:'blue', fontSize:'large'}} className='edit'/> : <div></div>} */}
                  { flag && <div classname='ed_button'>
                      <IconButton aria-label="edit">
                        <EditIcon style={{color:'gray', fontSize:'large'}} onClick={edit_book}/>
                      </IconButton>
                      {/* <IconButton aria-label="delete"> */}
                        <DeleteIcon onClick={delete_book} style={{color:'gray', fontSize:'large'}} hover={{}}/>
                      {/* </IconButton> */}
                  </div>}
                </div>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Harry Potter is a series of seven fantasy novels written by
                British author J. K. Rowling.
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>J.k.Rowling</div>
                  <div>Rs. 500</div>
                </div>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
  );
};
export default MyCard;
