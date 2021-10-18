import { CardMedia } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useHistory } from "react-router";
import defaultImage from "../../../assets/images/pic1.png";
import "./ShopCard.css";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  button: {
    backgroundColor: "#03a9f4",

  },
});

const ShopCard = (props) => {
  const { name,size, price, image, _id } = props.product;
  const classes = useStyles();
  let history = useHistory();

  const handleCheckOut = (id) => {
    history.push(`/productDetails/${id}`)
  }
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          width="100%"
          image={image || defaultImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Size: {size}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: "space-around" }}>
        <h2>${price}</h2>
        <Button
          className={classes.button}
          onClick={() => {
            handleCheckOut(_id);
          }}
        >
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default ShopCard;
