
import { Container, Grid } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './AddEvent.css';


const AddEvent = () => {
    const [imageURL, setImageURL] = useState(null);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = async (data) => {
      console.log(data);
      const eventData = { ...data };
      eventData.image = await imageURL;
      console.log(eventData);
      const url = "http://localhost:5000/addEvent";

      try {
        const response = await axios.post(url, {
          headers: { "Content-Type": "application/json" },
          data: eventData,
        });
        console.log("server side res", response);
      } catch (error) {
        console.log(error);
      }
    };

    const handleImageUpload = async (e) => {
      // console.log(e.target.files[0])

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
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <div className="event-input">
                <label htmlFor="name">Product name</label>
                <input name="name" placeholder="name" ref={register} />
                <label htmlFor="price">Price</label>
                <input name="price" placeholder="price" ref={register} />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="event-input">
                <label htmlFor="size">product size</label>
                <input name="size" placeholder="size" ref={register} />
                <label htmlFor="picture">Product picture</label>
                <input
                  name="picture"
                  type="file"
                  onChange={handleImageUpload}
                />
              </div>
            </Grid>
            <input id="submit-btn" type="submit" />
          </Grid>

          {errors.exampleRequired && <span>This field is required</span>}
        </form>
      </Cont>
    );
};

export default AddEvent;