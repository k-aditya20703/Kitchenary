import React, { useEffect, useState } from "react";
import "./AddItem.css";
import Footer from "../Footer/Footer";
import { useFormik } from "formik";
import { AddItemSchema } from "../../Schemas";
import Success from "../SuccessPage/Success";
import axios from "axios";

const initialValues = {
  item_name: "",
  prep_time: "",
  item_price: "",
  item_offer: "",
  item_photo: "",
};
const AddItem = (props) => {
  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: AddItemSchema,
    onSubmit: async (values, action) => {
      console.log(values);
      const API = `http://ec2-44-201-134-49.compute-1.amazonaws.com:9091/api/v1/kichenary/partner-items/${props?.partnerId}?price=${Formik.values.item_price}&offer=${Formik.values.item_offer}&itemName=${Formik.values.item_name}&prepareTime=${Formik.values.prep_time}`;
      const formData = new FormData();
      formData.append("files", values.item_photo);
      formData.append("files", values.restaurant_photo);

      try {
        const response = await axios.post(API, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("uploaded successfully:", response.data);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
      action.resetForm();
      alert("Item Registered Successfully");
    },
  });
  return (
    <>
      <div className="additem-section">
        <div className="additem-form">
          <form onSubmit={Formik.handleSubmit}>
            {/* <div className="photo-selector"> */}
            <div className="selector-input">
              <label>Upload Item Photo</label>
              <div>
                <input
                  type="file"
                  name="item_photo"
                  onChange={(e) => {
                    Formik.setFieldValue(
                      "item_photo",
                      e.currentTarget.files[0]
                    );
                  }}
                ></input>
              </div>
            </div>

            <div className="item-input">
              <label>Item Name</label>
              <input
                type="text"
                name="item_name"
                value={Formik.values.item_name}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                placeholder="Enter item name"
              ></input>
              {Formik.errors.item_name && Formik.touched.item_name ? (
                <p className="additem-error">{Formik.errors.item_name}</p>
              ) : null}
            </div>

            <div>
              <div className="time-input">
                <label>Preparation time</label>
                <input
                  type="number"
                  placeholder="Preparation time (in minutes)"
                  name="prep_time"
                  value={Formik.values.prep_time}
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                ></input>
                {Formik.errors.prep_time && Formik.touched.prep_time ? (
                  <p className="additem-error">{Formik.errors.prep_time}</p>
                ) : null}
              </div>
            </div>

            <div className="photo-selector">
              <div className="selector-input">
                <label>Item Price</label>
                <div>
                  <input
                    type="number"
                    name="item_price"
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                    value={Formik.values.item_price}
                    placeholder="Enter item price"
                  ></input>
                  {Formik.errors.item_price && Formik.touched.item_price ? (
                    <p className="additem-error">{Formik.errors.item_price}</p>
                  ) : null}
                </div>
              </div>

              <div className="selector-input">
                <label>Offer</label>
                <div>
                  <input
                    type="number"
                    placeholder="Offer on the item"
                    name="item_offer"
                    value={Formik.values.item_offer}
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                  ></input>
                  {Formik.errors.item_offer && Formik.touched.item_offer ? (
                    <p className="additem-error">{Formik.errors.item_offer}</p>
                  ) : null}
                </div>
              </div>
            </div>

            <button className="additem-submit" type="submit">
              Submit
            </button>
          </form>
        </div>

        <img className="chefleft" src="./Images/additem.jpg"></img>
        <img className="chefup" src="./Images/chefup.jpg"></img>
      </div>
      <Footer />
    </>
  );
};

export default AddItem;
