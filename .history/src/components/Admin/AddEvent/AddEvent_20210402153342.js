import { Container, Grid } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddEvent.css";

const AddEvent = () => {
  const [updateProduct, setUpdateProduct] = useState(false);
  const [imageURL, setImageURL] = useState(null);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data, e) => {
    e.target.reset();

    const eventData = {
      name: data.name,
      price: data.price,
      size: data.size,
    };
    eventData.image = await imageURL;
    console.log(eventData);
    const url = "https://lychee-custard-24286.herokuapp.com/addEvent";

    try {
      const response = await axios.post(url, {
        headers: { "Content-Type": "application/json" },
        data: eventData,
      });
      e.target.reset();
      setUpdateProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageUpload = async (e) => {
    const imageData = new FormData();
    imageData.set("key", "942050dfcb705181c689da936974de62");
    imageData.append("image", e.target.files[0]);

    try {
      const response = await axios.post(
        "https://api.imgbb.com/1/upload",
        imageData
      );
      const image = response.data.data.display_url;
      setImageURL(image);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container style={{ marginTop: "30px" }}>
      <Grid container justify="center" spacing={4}>
        <Grid item xs={8}>
          {updateProduct && (
            <Alert style={{ marginBottom: "40px" }}>
              You product updated successfully!
            </Alert>
          )}
          <form className="event-input" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Product name</label>
            <input
              name="name"
              placeholder="name"
              ref={register({
                required: true,
              })}
            />
            <label htmlFor="price">Price</label>
            <input
              name="price"
              placeholder="price"
              ref={register({
                required: true,
              })}
            />

            <label htmlFor="size">product size</label>
            <input
              name="size"
              placeholder="size"
              ref={register({
                required: true,
              })}
            />
            <label htmlFor="picture">Product picture</label>
            <input
              name="picture"
              type="file"
              onChange={handleImageUpload}
              ref={register({
                required: true,
              })}
            />
            <input id="submit-btn" type="submit" />
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddEvent;
