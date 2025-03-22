import React, { useState } from "react";
import "./Payment.css";
import { NavLink } from "react-router-dom";
const Payment = () => {
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
  return (
    <>
      <div className="payment-section">
        <div className="closebtn-section">
          <div className="closebtn-container">
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
    </>
  );
};

export default Payment;
