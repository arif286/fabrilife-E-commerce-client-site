import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import bathLogo from "../../apartment-hunt/logos/bath 1.png";
import bedLogo from "../../apartment-hunt/logos/bed 1.png";
import locationLogo from "../../apartment-hunt/logos/map-marker-alt-solid 1.png";
import "./HouseCard.css";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 140,
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
            {service}
          </Typography>
          <div style={logoContainer} color="textSecondary">
            <img className="house-img" src={locationLogo} alt="" />
            <p>{Location}</p>
          </div>
          <div variant="h5" color="textSecondary" style={houseContainer}>
            <div style={logoContainer}>
              <img className="house-img" src={bedLogo} alt="" />
              <p style={{ fontSize: "15px" }}>{bedroom} bedrooms</p>
            </div>
            <div style={logoContainer}>
              <img className="house-img" src={bathLogo} alt="" />
              <p style={{ fontSize: "15px" }}>{bathroom} bathroom</p>
            </div>
          </div>
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
