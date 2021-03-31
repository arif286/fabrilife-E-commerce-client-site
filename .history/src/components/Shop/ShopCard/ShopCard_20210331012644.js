import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import "./ShopCard.css";

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 100,
  },
});
const logoContainer = {
  display: "flex",
  alignItems: "center",
};
const houseContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};
const ShopCard = (props) => {
  const { name,size, price, image } = props.product;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: "space-around" }}>
        <h2>${price}</h2>
        <Button>View Details</Button>
      </CardActions>
    </Card>
  );
};

export default ShopCard;
