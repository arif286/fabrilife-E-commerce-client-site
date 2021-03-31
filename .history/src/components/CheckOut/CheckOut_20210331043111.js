import { Card, Container, Grid, makeStyles } from '@material-ui/core';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import './CheckOut.css';


const useStyles = makeStyles({
  root: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
  },
});
const CheckOut = () => {
    const { id } = useParams();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [product, setProduct] = useState({});

    const { register, handleSubmit, errors } = useForm();

    useEffect(() => {
        axios.get(`http://localhost:5000/product/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [id]);
    console.log(product)
    const {name, price, image} = product

    const onSubmit = (data) => {
        console.log(data)
    }

    const classes = useStyles();
    return (
      <Container>
        <Grid container spacing={3}>
          <Grid item sm={12} md={6}>
            <form className="delivery-form" onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                name="name"
                defaultValue={loggedInUser.name}
                placeholder="Your name"
                ref={register({
                  validate: (value) => value.length !== "",
                  required: true,
                })}
              />
              {errors.name && <p>please write your name</p>}

              <input
                type="text"
                name="address"
                placeholder="Address"
                ref={register({
                  validate: (value) => value.length !== "",
                  required: true,
                })}
              />
              {errors.address && <p>please write correct address</p>}
              <input
                type="text"
                name="city"
                placeholder="city"
                ref={register({
                  validate: (value) => value.length !== "",
                  required: true,
                })}
              />
              {errors.city && <p>please write correct city name.</p>}
              <input
                type="phone"
                name="phone"
                placeholder="phone"
                defaultValue="+880"
                ref={register({
                  validate: (value) => value.length !== 14,
                  required: true,
                })}
              />
              {errors.phone && <p>please type a correct number</p>}
              <input
                name="email"
                type="email"
                defaultValue={loggedInUser.email}
                placeholder="email"
                ref={register({
                  pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  required: true,
                })}
              />
              {errors.email && <p>Invalid Email</p>}
              <textarea
                type="text"
                name="textarea"
                placeholder="delivery instruction"
                required={true}
              />
              <input type="submit" value="submit" />
            </form>
          </Grid>
          <Grid item sm={12} md={6}>
              <Card className={classes.root}>
                    <div>
                        <img src={image} alt=''/>
                    </div>
                    <div>
                        <h4>{name}</h4>
                        <h5>quantity</h5>
                        <h4>{ price}</h4>
                    </div>
              </Card>
          </Grid>
        </Grid>
      </Container>
    );
};

export default CheckOut;