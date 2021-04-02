import { Container, Grid, makeStyles } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ShopCard from "./ShopCard/ShopCard";

const Shop = () => {
     const [event, setEvent] = useState([]);

     useEffect(() => {
       axios
         .get("https://lychee-custard-24286.herokuapp.com/event")
         .then((res) => setEvent(res.data))
         .catch((error) => console.log(error));
     }, []);


  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "center",
      height: "100vh",
      alignItems: "center",
    },
  }));
    return (
      <div className={useStyles.root}>
        {event.length === 0 ? (
          <CircularProgress />
        ) : (
          <Container>
            <Grid container direction="column" alignItems="center">
              <h1> Discover the latest t-shirt available today</h1>
            </Grid>
            <Grid container spacing={4}>
              {event.map((product, index) => (
                <Grid item xs={12} sm={6} md={4}>
                  <ShopCard product={product} key={index} />
                </Grid>
              ))}
            </Grid>
          </Container>
        )}
      </div>
    );
};

export default Shop;