import * as Yup from "yup";

export const PartnerSignupSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  restaurantRegCode: Yup.string()
    .min(13)
    .max(25)
    .required("Please enter Reg-Code"),
  email: Yup.string().email().required("Please enter your email"),
  number: Yup.number().required("Please enter your number"),
  password: Yup.string().min(8).required("Please enter your password"),
  confirm_password: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password"), null], "Password must match"),
  region: Yup.string()
    .min(3)
    .max(15)
    .required("Please enter your region / country"),
  state: Yup.string().min(3).max(15).required("Please enter your state"),
  district: Yup.string().min(3).max(15).required("Please enter your district"),
  city: Yup.string().min(3).max(15).required("Please enter your city"),
  pincode: Yup.number().required("Please enter your pincode"),
  landmark: Yup.string().min(3).max(25).required("Please enter your landmark"),
  building: Yup.string().min(3).max(25).required("Please enter your building"),
  colony: Yup.string().min(3).max(25).required("Please enter your colony"),
});

export const SignupSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  mobile: Yup.number().required("Please enter your number"),
  password: Yup.string().min(8).required("Please enter your password"),
  confirm_password: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});

export const LoginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(8).required("Please enter your password"),
});

export const PickupSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  number: Yup.number().required("Please enter your number"),
  pincode: Yup.number().required("Please enter your pincode"),
  landmark: Yup.string().min(3).max(25).required("Please enter your landmark"),
  address: Yup.string().min(3).max(35).required("Please enter your address"),
});

export const DropSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  number: Yup.number().required("Please enter your number"),
  pincode: Yup.number().required("Please enter your pincode"),
  landmark: Yup.string().min(3).max(25).required("Please enter your landmark"),
  address: Yup.string().min(3).max(35).required("Please enter your address"),
});

export const CommentSchema = Yup.object({
  comment: Yup.string().min(3).max(250).required("Please enter your comment"),
});

export const AddItemSchema = Yup.object({
  item_name: Yup.string().min(2).max(25).required("Please enter item name"),
  prep_time: Yup.number().required("Please enter preparation time"),
  item_price: Yup.number().required("Please enter price"),
  item_offer: Yup.number().required("Enter offer amount"),
  item_desc: Yup.string().required("Enter item description"),
});
