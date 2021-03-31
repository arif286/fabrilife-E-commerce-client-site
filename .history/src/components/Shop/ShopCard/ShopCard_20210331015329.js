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
import "./ShopCard.css";

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  }
});

const ShopCard = (props) => {
  console.log(props)
  const { name,size, price, image, _id } = props.product;
  const classes = useStyles();
  let history = useHistory();

  const handleCheckOut = () => {
    history.push()
  }
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          width="100%"
          image={image}
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
        <Button onClick={()=>{handleCheckOut(_id)}}>Buy Now</Button>
      </CardActions>
    </Card>
  );
};

export default ShopCard;
