import React, { useState } from "react";
import "./Drop.css";
import { NavLink } from "react-router-dom";
import { DropSchema } from "../../Schemas";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  number: "",
  pincode: "",
  address: "",
  landmark: "",
};
const Drop = () => {
  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: DropSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });

  const [card, setCard] = useState(false);
  const [cardArrowup, setCardArrowup] = useState(false);
  const [cardArrowdown, setCardArrowdown] = useState(true);
  const [banking, setBanking] = useState(false);
  const [bankingArrowup, setbankingArrowup] = useState(false);
  const [bankingArrowdown, setbankingArrowdown] = useState(true);
  const [upi, setUpi] = useState(false);
  const [upiArrowup, setupiArrowup] = useState(false);
  const [upiArrowdown, setupiArrowdown] = useState(true);
  const [delivery, setDelivery] = useState(false);
  const [deliveryArrowup, setdeliveryArrowup] = useState(false);
  const [deliveryArrowdown, setdeliveryArrowdown] = useState(true);
  const [drop, setDrop] = useState();
  const [showPayment, setPayment] = useState(false);

  const handleConfirm = () => {
    setPayment(true);
  };

  const handleCard = () => {
    setBanking(false);
    setUpi(false);
    setDelivery(false);
    setCard(!card);
    setCardArrowdown(!cardArrowdown);
    setCardArrowup(!cardArrowup);
    setupiArrowup(false);
    setupiArrowdown(true);
    setbankingArrowdown(true);
    setbankingArrowup(false);
    setdeliveryArrowdown(true);
    setdeliveryArrowup(false);
  };

  const handleBanking = () => {
    setBanking(!banking);
    setUpi(false);
    setDelivery(false);
    setCard(false);
    setCardArrowdown(true);
    setCardArrowup(false);
    setupiArrowup(false);
    setupiArrowdown(true);
    setbankingArrowdown(!bankingArrowdown);
    setbankingArrowup(!bankingArrowup);
    setdeliveryArrowdown(true);
    setdeliveryArrowup(false);
  };

  const handleUpi = () => {
    setBanking(false);
    setUpi(!upi);
    setDelivery(false);
    setCard(false);
    setCardArrowdown(true);
    setCardArrowup(false);
    setupiArrowup(!upiArrowup);
    setupiArrowdown(!upiArrowdown);
    setbankingArrowdown(true);
    setbankingArrowup(false);
    setdeliveryArrowdown(true);
    setdeliveryArrowup(false);
  };

  const handleDelivery = () => {
    setBanking(false);
    setUpi(false);
    setDelivery(!delivery);
    setCard(false);
    setCardArrowdown(true);
    setCardArrowup(false);
    setupiArrowup(false);
    setupiArrowdown(true);
    setbankingArrowdown(true);
    setbankingArrowup(false);
    setdeliveryArrowdown(!deliveryArrowdown);
    setdeliveryArrowup(!deliveryArrowup);
  };

  const handleClose = () => {
    setPayment(false);
  };
  return (
    <>
      <div className="drop-division">
        <div className="drop">
          <div className="signupnav-section">
            <img src="./Images/KitchenaryLogo.png"></img>
            <NavLink to="/genie">
              <div className="signupback-btn">
                <i class="bx bx-left-arrow-alt"></i>
              </div>
            </NavLink>
          </div>

          <div className="drop-section">
            <div className="drop-form">
              <h3>Set Drop Location</h3>
              <form onSubmit={Formik.handleSubmit}>
                <input
                  type="text"
                  name="address"
                  placeholder="Sender's Address"
                  value={Formik.values.address}
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                />
                {Formik.errors.address && Formik.touched.address ? (
                  <p className="address-error">{Formik.errors.address}</p>
                ) : null}
                <div className="pin-section">
                  <div style={{ width: "100%" }}>
                    <input
                      type="text"
                      name="landmark"
                      placeholder="Landmark"
                      value={Formik.values.landmark}
                      onChange={Formik.handleChange}
                      onBlur={Formik.handleBlur}
                    />
                    {Formik.errors.landmark && Formik.touched.landmark ? (
                      <p className="address-error">{Formik.errors.landmark}</p>
                    ) : null}
                  </div>

                  <div style={{ width: "100%" }}>
                    <input
                      placeholder="Pincode"
                      type="nunber"
                      name="pincode"
                      value={Formik.values.pincode}
                      onChange={Formik.handleChange}
                      onBlur={Formik.handleBlur}
                    />
                    {Formik.errors.pincode && Formik.touched.pincode ? (
                      <p className="address-error">{Formik.errors.pincode}</p>
                    ) : null}
                  </div>
                </div>

                <input
                  type="text"
                  placeholder="Sender's Name"
                  name="name"
                  value={Formik.values.name}
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                />
                {Formik.errors.name && Formik.touched.name ? (
                  <p className="address-error">{Formik.errors.name}</p>
                ) : null}

                <input
                  type="tel"
                  placeholder="Sender's mobile number"
                  name="number"
                  value={Formik.values.number}
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                />
                {Formik.errors.number && Formik.touched.number ? (
                  <p className="address-error">{Formik.errors.number}</p>
                ) : null}
                <button type="submit" onClick={handleConfirm}>
                  Confirm
                </button>
              </form>
            </div>

            <div className="pickupimg-container">
              <img src="./Images/drop copy.jpg"></img>
            </div>
          </div>
        </div>
        {showPayment && (
          <div className="payment">
            <div className="payment-section">
              <div className="closebtn-section">
                <div onClick={handleClose} className="closebtn-container">
                  <i class="bx bx-arrow-back"></i>
                </div>
              </div>
              <div className="payment-container">
                <div className="payment-cover-img">
                  <img src="./Images/payment.jpg"></img>
                </div>
                <div className="payment-form">
                  {/* ===============================================================
                ***********************   CARD SECTION   **********************
                =============================================================== */}

                  <div onClick={handleCard} className="payment-options">
                    <div className="payment-name">
                      <i class="bx bx-credit-card"></i>
                      <p>Credit / Debit / ATM Card</p>
                    </div>
                    <div className="down-arrow">
                      {cardArrowdown && <i class="bx bx-chevron-down"></i>}
                      {cardArrowup && <i class="bx bx-chevron-up"></i>}
                    </div>
                  </div>

                  {card && (
                    <form className="card-payment">
                      <div>
                        <label>Card Number</label>
                        <input
                          placeholder="xxxx xxxx xxxx xxxx"
                          type="number"
                          pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"
                        />
                      </div>

                      <div className="card-valid">
                        <div>
                          <label>Valid Thru</label>
                          <input placeholder="MM / YY" type="number" />
                        </div>

                        <div>
                          <label>CVV</label>
                          <input placeholder="CVV" type="number" />
                        </div>
                      </div>

                      <button>Pay</button>
                    </form>
                  )}

                  {/* ===============================================================
                ***********************   NET BANKING SECTION   **********************
                =============================================================== */}

                  <div onClick={handleBanking} className="payment-options">
                    <div className="payment-name">
                      <i class="bx bxs-bank"></i>
                      <p>Net Banking</p>
                    </div>
                    <div className="down-arrow">
                      {bankingArrowdown && <i class="bx bx-chevron-down"></i>}
                      {bankingArrowup && <i class="bx bx-chevron-up"></i>}
                    </div>
                  </div>

                  {banking && (
                    <form className="net-banknig">
                      <div className="bank-selector">
                        <div className="bank-name">
                          <input name="hdfc" type="radio" />
                          <label htmlFor="hdfc">HDFC bank</label>
                        </div>
                        <div className="bank-logo">
                          <img src="./Images/hdfc.png"></img>
                        </div>
                      </div>
                      <div className="bank-selector">
                        <div className="bank-name">
                          <input name="icici" type="radio" />
                          <label htmlFor="icici">ICICI bank</label>
                        </div>
                        <div className="bank-logo">
                          <img src="./Images/icici.png"></img>
                        </div>
                      </div>
                      <div className="bank-selector">
                        <div className="bank-name">
                          <input name="sbi" type="radio" />
                          <label htmlFor="sbi">State bank of india</label>
                        </div>
                        <div className="bank-logo">
                          <img src="./Images/sbi.png"></img>
                        </div>
                      </div>
                      <button>Pay</button>
                    </form>
                  )}

                  {/* ===============================================================
                ***************************   UPI SECTION   **************************
                =============================================================== */}

                  <div onClick={handleUpi} className="payment-options">
                    <div className="payment-name">
                      <i class="bx bxs-wallet-alt"></i>
                      <p>UPI</p>
                    </div>
                    <div className="down-arrow">
                      {upiArrowdown && <i class="bx bx-chevron-down"></i>}
                      {upiArrowup && <i class="bx bx-chevron-up"></i>}
                    </div>
                  </div>

                  {upi && (
                    <form className="net-banknig">
                      <div className="bank-selector">
                        <div className="bank-name">
                          <input name="phonepay" type="radio" />
                          <label htmlFor="phonepay">Phone pay</label>
                        </div>
                        <div className="bank-logo">
                          <img src="./Images/phonepay.png"></img>
                        </div>
                      </div>
                      <div className="bank-selector">
                        <div className="bank-name">
                          <input name="googlepay" type="radio" />
                          <label htmlFor="googlepay">Google pay</label>
                        </div>
                        <div className="bank-logo">
                          <img
                            style={{ mixBlendMode: "multiply" }}
                            src="./Images/gpay.jpeg"
                          ></img>
                        </div>
                      </div>
                      <div className="bank-selector">
                        <div className="bank-name">
                          <input name="paytm" type="radio" />
                          <label htmlFor="paytm">Paytm</label>
                        </div>
                        <div className="bank-logo">
                          <img src="./Images/paytm.png"></img>
                        </div>
                      </div>
                      <button>Pay</button>
                    </form>
                  )}

                  {/* ===============================================================
                *************************   CASH ON DELIVERY   ************************
                =============================================================== */}

                  <div onClick={handleDelivery} className="payment-options">
                    <div className="payment-name">
                      <i class="bx bx-money"></i>
                      <p>Cash on Delivery</p>
                    </div>
                    <div className="down-arrow">
                      {deliveryArrowdown && <i class="bx bx-chevron-down"></i>}
                      {deliveryArrowup && <i class="bx bx-chevron-up"></i>}
                    </div>
                  </div>

                  {delivery && (
                    <form className="net-banknig">
                      <button>Place order</button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Drop;
