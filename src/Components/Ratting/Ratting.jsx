import React, { useState } from "react";
import "./Ratting.css";
import { NavLink } from "react-router-dom";
import { Comments } from "../../Constants/Comments";
import { CommentSchema } from "../../Schemas";
import { useFormik } from "formik";

const initialValues = {
  comment: "",
};

const Ratting = () => {
  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: CommentSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });
  const [oneStar, setOnestar] = useState(false);
  const [twoStar, setTwostar] = useState(false);
  const [threeStar, setThreestar] = useState(false);
  const [fourStar, setFourstar] = useState(false);
  const [fiveStar, setFivestar] = useState(false);
  const [showPoor, setShowpoor] = useState(false);
  const [showOk, setShowok] = useState(false);
  const [showNormal, setShownormal] = useState(false);
  const [showGood, setShowgood] = useState(false);
  const [showAwesome, setShowAwesome] = useState(false);
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);

  const handleOnestar = () => {
    setOnestar(true);
    setTwostar(false);
    setThreestar(false);
    setFourstar(false);
    setFivestar(false);
    setShowpoor(true);
    setShowok(false);
    setShownormal(false);
    setShowgood(false);
    setShowAwesome(false);
  };
  const handleTwostar = () => {
    setTwostar(true);
    setOnestar(true);
    setThreestar(false);
    setFourstar(false);
    setFivestar(false);
    setShowok(true);
    setShowpoor(false);
    setShownormal(false);
    setShowgood(false);
    setShowAwesome(false);
  };
  const handleThreestar = () => {
    setThreestar(true);
    setTwostar(true);
    setOnestar(true);
    setFourstar(false);
    setFivestar(false);
    setShownormal(true);
    setShowpoor(false);
    setShowok(false);
    setShowgood(false);
    setShowAwesome(false);
  };
  const handleFourstar = () => {
    setFourstar(true);
    setThreestar(true);
    setTwostar(true);
    setOnestar(true);
    setFivestar(false);
    setShowgood(true);
    setShowpoor(false);
    setShowok(false);
    setShownormal(false);
    setShowAwesome(false);
  };
  const handleFivestar = () => {
    setFivestar(true);
    setFourstar(true);
    setThreestar(true);
    setTwostar(true);
    setOnestar(true);
    setShowAwesome(true);
    setShowpoor(false);
    setShowok(false);
    setShownormal(false);
    setShowgood(false);
  };

  const handleLike = () => {
    setLike(like + 1);
  };

  const handleDislike = () => {
    setDisLike(disLike + 1);
  };

  const handleAddComment = () => {
    Comments.push(Formik.values.comment);
  };
  return (
    <>
      <div className="ratting-nav">
        <img src="./Images/KitchenaryLogo.png"></img>
        <NavLink to="/dineout">
          <div className="back-btn">
            <i class="bx bx-left-arrow-alt"></i>
          </div>
        </NavLink>
      </div>

      <div className="ratting-section">
        <div className="rest-ratting-container">
          <h2>Plese Rate Us</h2>
          <div className="star">
            <i
              onClick={handleOnestar}
              style={{ color: oneStar ? "#ffa500" : "#0000009a" }}
              class="bx bxs-star"
            ></i>
            <i
              onClick={handleTwostar}
              style={{ color: twoStar ? "#ffa500" : "#0000009a" }}
              class="bx bxs-star"
            ></i>
            <i
              onClick={handleThreestar}
              style={{ color: threeStar ? "#ffa500" : "#0000009a" }}
              class="bx bxs-star"
            ></i>
            <i
              onClick={handleFourstar}
              style={{ color: fourStar ? "#ffa500" : "#0000009a" }}
              class="bx bxs-star"
            ></i>
            <i
              onClick={handleFivestar}
              style={{ color: fiveStar ? "#ffa500" : "#0000009a" }}
              class="bx bxs-star"
            ></i>
          </div>

          {showPoor && <p>SO POOR</p>}
          {showOk && <p>IT'S OK</p>}
          {showNormal && <p>NORMAL</p>}
          {showGood && <p>GOOD</p>}
          {showAwesome && <p>AWESOME</p>}
          <form onSubmit={Formik.handleSubmit}>
            <textarea
              name="comment"
              placeholder="Review summary (150 charcters max)"
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              value={Formik.values.comment}
            ></textarea>
            {Formik.errors.comment && Formik.touched.comment ? (
              <p className="cmt-error">{Formik.errors.comment}</p>
            ) : null}
            <button onClick={handleAddComment} type="submit">
              Submit
            </button>
          </form>
        </div>

        <div className="review-section">
          <div className="star-review">
            <div className="ratting-viewer">
              <div className="ratting-icon">
                <i class="bx bxs-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
              </div>
              <div className="ratting-slider-container">
                <div className="ratting-slider"></div>
              </div>
              <div className="ratting-number">
                <p>0 Rattings</p>
              </div>
            </div>

            <div className="ratting-viewer">
              <div className="ratting-icon">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
              </div>
              <div className="ratting-slider-container">
                <div className="ratting-slider"></div>
              </div>
              <div className="ratting-number">
                <p>0 Rattings</p>
              </div>
            </div>

            <div className="ratting-viewer">
              <div className="ratting-icon">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
              </div>
              <div className="ratting-slider-container">
                <div className="ratting-slider"></div>
              </div>
              <div className="ratting-number">
                <p>0 Rattings</p>
              </div>
            </div>

            <div className="ratting-viewer">
              <div className="ratting-icon">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bx-star"></i>
              </div>
              <div className="ratting-slider-container">
                <div className="ratting-slider"></div>
              </div>
              <div className="ratting-number">
                <p>0 Rattings</p>
              </div>
            </div>

            <div className="ratting-viewer">
              <div className="ratting-icon">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
              </div>
              <div className="ratting-slider-container">
                <div className="ratting-slider"></div>
              </div>
              <div className="ratting-number">
                <p>0 Rattings</p>
              </div>
            </div>
          </div>

          <div className="comment-review">
            {Comments.map((comment) => {
              return (
                <div className="cmt-card">
                  <div className="user-id">
                    <i class="bx bxs-user-circle"></i>
                    <p>Aditya Khuntia</p>
                  </div>
                  <div className="user-cmt">
                    <p>{comment.user_comment}</p>

                    <div className="like-section">
                      <i
                        onClick={handleLike}
                        style={{ color: "#3e77c2" }}
                        class="bx bx-like"
                      ></i>
                      <p>{like}</p>
                      <i
                        onClick={handleDislike}
                        style={{ color: "#d42626" }}
                        class="bx bx-dislike"
                      ></i>
                      <p>{disLike}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Ratting;
