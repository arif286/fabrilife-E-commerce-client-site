
import { Grid } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './AddEvent.css';

const AddEvent = () => {
    const [imageURL, setImageURL] = useState(null);
  const { register, handleSubmit, watch, errors } = useForm();

  const [inputFiled, setInputFiled] = useState();

    const onSubmit = async (data) => {
      console.log(data);
      setInputFiled('')
      console.log(inputFiled)
      // const eventData = { ...data };
      // eventData.image = await imageURL;
      // console.log(eventData);
      // const url = "https://lychee-custard-24286.herokuapp.com/addEvent";

      // try {
      //   const response = await axios.post(url, {
      //     headers: { "Content-Type": "application/json" },
      //     data: eventData,
      //   });
      //   console.log("server side res", response);
      // } catch (error) {
      //   console.log(error);
      // }
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
      <Grid container justify="center" spacing={4}>
        <Grid item xs={8}>
          <form className="event-input" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Product name</label>
            <input
              name="name"
              placeholder="name"
              defaultValue={inputFiled}
              ref={register({
                required: true,
              })}
            />
            <label htmlFor="price">Price</label>
            <input
              name="price"
              placeholder="price"
              defaultValue={inputFiled}

              ref={register({
                required: true,
              })}
            />

            <label htmlFor="size">product size</label>
            <input
              name="size"
              placeholder="size"
              defaultValue={inputFiled}
              ref={register({
                required: true,
              })}
            />
            <label htmlFor="picture">Product picture</label>
            <input
              name="picture"
              type="file"
              // defaultValue={inputFiled}
              onChange={handleImageUpload}
              // ref={register({
              //   required: true,
              // })}
            />
            <input id="submit-btn" type="submit" />
            {errors.exampleRequired && <span>This field is required</span>}
          </form>
        </Grid>
      </Grid>
    );
};

export default AddEvent;