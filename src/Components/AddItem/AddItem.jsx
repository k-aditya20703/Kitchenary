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
  item_desc: "",
};
const AddItem = (props) => {
  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: AddItemSchema,
    onSubmit: async (values, action) => {
      console.log(values);
      const API = `http://ec2-34-201-58-216.compute-1.amazonaws.com:9091/api/v1/kichenary/partner-items/${props?.partnerId}?itemName=${Formik.values.item_name}&itemDesc=${Formik.values.item_desc}&price=${Formik.values.item_price}&offer=${Formik.values.item_offer}&prepareTime=${Formik.values.prep_time}`;
      const formData = new FormData();
      formData.append("file", values.item_photo);

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
      <div className="addItem_section">
        <div className="additem_form">
          <form onSubmit={Formik.handleSubmit}>
            {/* <div className="photo-selector"> */}
            <div className="selector-input">
              <label>Upload Item Photo</label>
              <div>
                <input
                  type="file"
                  name="item_photo"
                  required
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

            <div className="item-input">
              <label>Item Description</label>
              <input
                type="text"
                name="item_desc"
                value={Formik.values.item_desc}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                placeholder="Enter item desc"
              ></input>
              {Formik.errors.item_desc && Formik.touched.item_desc ? (
                <p className="additem-error">{Formik.errors.item_desc}</p>
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
        <div className="additem_cover">
          <img className="chefleft" src="./Images/additemcover.png"></img>
        </div>
      </div>
    </>
  );
};

export default AddItem;
