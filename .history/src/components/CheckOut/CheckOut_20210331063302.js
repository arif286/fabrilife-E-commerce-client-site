import { Card, Container, Grid, makeStyles } from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
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
        justifyContent: 'space-around',
        marginTop: '60px'
  },
});
const count = [
  {
    value: "one",
    label: "1",
  },
  {
    value: "three",
    label: "2",
  },
  {
    value: "tow",
    label: "3",
  },
  {
    value: "four",
    label: "4",
  },
];
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
    const [currency, setCurrency] = useState("one");

    const handleChange = (event) => {
      setCurrency(event.target.value);
    };
    return (
      <Container>
        <Grid container spacing={3}>
          <Grid item sm={12} md={6}>
            <form className="delivery-form" onSubmit={handleSubmit(onSubmit)}>
              <h3>Customer information</h3>
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
          <Grid direction="column" item sm={12} md={6}>
            <Card className={classes.root}>
              <div>
                <img style={{ width: "150px" }} src={image} alt="" />
              </div>
              <div>
                <h4>{name}</h4>

                  <TextField
                    id="standard-select-currency-native"
                    select
                    label="Quantity"
                    value={currency}
                    onChange={handleChange}
                    SelectProps={{
                      native: true,
                    }}
                  >
                    {count.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                <h4>price: ${price}</h4>
              </div>
            </Card>
            <Card>
              <h3>total price</h3>
            </Card>
          </Grid>
        </Grid>
      </Container>
    );
};

export default CheckOut;