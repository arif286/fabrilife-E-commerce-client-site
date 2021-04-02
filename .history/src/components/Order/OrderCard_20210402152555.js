import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from 'react';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const OrderCard = (props) => {
    console.log(props)
    const {image, name, totalPrice, date, address, phone} = props.product
    const classes = useStyles();
    return (
      <>
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
              <Typography
                variant="body1"
                color="textSecondary"
                component="p"
                gutterBottom
              >
                Order Date: {new Date(date).toDateString("dd/MM/yyyy")}
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                component="p"
                gutterBottom
              >
                Total Price: ${totalPrice}
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                component="p"
                gutterBottom
              >
                Shipping address: {address}
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                component="p"
                gutterBottom
              >
                Contact: {phone}
              </Typography>
              <Typography variant="h5"  component="p">
                Order Pending...
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </>
    );
};

export default OrderCard;