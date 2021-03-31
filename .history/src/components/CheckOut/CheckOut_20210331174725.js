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
        justifyContent: 'space-around',
        marginTop: '60px'
  },
  orderBtn: {
    textAlign: 'center'
  }
});

const CheckOut = () => {
  const classes = useStyles();

    const { id } = useParams();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:5000/product/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [id]);
    const {name, price, image} = product


  const productPrice = parseFloat(price);

  const vat = (productPrice * 0.1).toFixed(2);
  const total = (productPrice + Number(vat)).toFixed(2);

    const { register, handleSubmit, errors } = useForm();
  const [placeOrder, setPlaceOrder] = useState(false);
   const onSubmit = (data) => {
     const customerInfo = { ...data, ...product, totalPrice: total, date:new Date() }
     console.log(customerInfo);
     axios
       .post("http://localhost:5000/order", customerInfo)
       .then(res => setPlaceOrder(res.data)
     )

   };


    return (
      <Container>

        {!placeOrder &&
          <Grid container spacing={3}>
            <Grid item sm={12} md={6}>
              <form className="delivery-form" onSubmit={handleSubmit(onSubmit)}>
                <h3>Customer information</h3>
                <input
                  type="text"
                  name="userName"
                  defaultValue={loggedInUser.name}
                  placeholder="Your name"
                  ref={register({
                    validate: (value) => value.length !== "",
                    required: true,
                  })}
                />
                {errors.userName && <p>please write your name</p>}

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
                <input type="submit" value="Place order" />
              </form>
            </Grid>
            <Grid direction="column" item sm={12} md={6}>
              <Card className={classes.root}>
                <div>
                  <img style={{ width: "150px" }} src={image} alt="" />
                </div>
                <div>
                  <h4>{name}</h4>
                  <h4>quantity: 1</h4>
                  <h4>price: ${price}</h4>
                </div>
              </Card>
              <Card style={{ marginTop: "30px", padding: "20px" }}>
                <h3 className="total">
                  Subtotal: <span>${price}</span>
                </h3>
                <h3 className="total">
                  Vat: <span>${vat}</span>
                </h3>
                <h3 className="total">
                  Total: <span>${total}</span>
                </h3>
              </Card>
            </Grid>
        </Grid>
        }
      </Container>
    );
};

export default CheckOut;