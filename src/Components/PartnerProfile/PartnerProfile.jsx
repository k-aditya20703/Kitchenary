import React, { useRef, useState } from "react";
import "./PartnerProfile.css";
import { FaRegEdit } from "react-icons/fa";
import { BiColor } from "react-icons/bi";

const PartnerProfile = () => {
  const [profilePicture, setProfilepicture] = useState(null);
  const [itemMenu, setItemMenu] = useState(false);
  const [itemPannel, setItemPannel] = useState(false);
  const [editPannel, setEditPanel] = useState(false);
  const inputRef = useRef();
  const handleMenu = () => {
    setItemMenu(true);
  };
  const handleCancelMenu = () => {
    setItemMenu(false);
  };
  const handleProfileEdit = () => {
    setItemPannel(false);
    setEditPanel(true);
  };

  const handleAllItem = () => {
    setEditPanel(false);
    setItemPannel(true);
  };
  return (
    <>
      <div className="partnerProfile_section">
        <div className="partnerProfile_menu">
          <div onClick={handleProfileEdit} className="peofile_edit">
            <i
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1rem",
              }}
              class="bx bx-edit"
            ></i>

            <p>Edit</p>
          </div>

          <div className="display_picture">
            <img src="./Images/resturant5.jpg"></img>
          </div>

          <p className="restaurant_name">The Food Court</p>
          <p className="reg_code">REG-CODE-4523</p>

          <div className="partnercontact_section">
            <div className="contact_container">
              <div className="icon_container">
                <i class="bx bx-map"></i>
              </div>
              <p>City Name, Colony</p>
            </div>
            <div className="contact_container">
              <div className="icon_container">
                <i class="bx bx-envelope"></i>
              </div>
              <p>adi@gmail.com</p>
            </div>
            <div className="contact_container">
              <div className="icon_container">
                <i class="bx bx-phone-call"></i>
              </div>
              <p>+91 6370093389</p>
            </div>
            <div className="contact_container">
              <div className="icon_container">
                <i class="bx bxl-instagram"></i>
              </div>
              <a href="#">@food_court2003</a>
            </div>
          </div>

          <div className="partnerProfile_btn_section">
            <button onClick={handleAllItem}>View all items</button>
            <button>View Ambiences</button>
            <button>View Menues</button>
            <button>Delete account</button>
          </div>
        </div>

        {/* //================================EDIT SECTION========================================// */}

        {editPannel && (
          <div className="partnerProfile_display">
            <div className="profile_edit_section">
              <div className="personal_info">
                <div className="personal_details">
                  <div className="personal_info_input">
                    <label>Restaurant Name :</label>
                    <input type="text"></input>
                  </div>

                  <div className="personal_info_input">
                    <label>Business Email : </label>
                    <input type="email"></input>
                  </div>

                  <div className="personal_info_input">
                    <label>Business Number : </label>
                    <input type="cell"></input>
                  </div>
                </div>
                <div className="profile_picture">
                  <input
                    type="file"
                    ref={inputRef}
                    onChange={(event) => setProfilepicture(event.target.files)}
                    hidden
                  ></input>
                  <button onClick={() => inputRef.current.click()}>
                    <i class="bx bxs-user"></i>{" "}
                  </button>
                  <p> Add Profile Photo</p>
                </div>
              </div>

              <p className="address_header">Address section</p>
              <div className="address_section">
                <div style={{ width: "50%" }}>
                  <div className="address_info_input">
                    <label>Country</label>
                    <input type="text"></input>
                  </div>
                  <div className="address_info_input">
                    <label>State</label>
                    <input type="text"></input>
                  </div>
                  <div className="address_info_input">
                    <label>District</label>
                    <input type="text"></input>
                  </div>
                  <div className="address_info_input">
                    <label>City</label>
                    <input type="text"></input>
                  </div>
                </div>
                <div style={{ width: "50%" }}>
                  <div className="address_info_input">
                    <label>Pincode</label>
                    <input type="number"></input>
                  </div>
                  <div className="address_info_input">
                    <label>Colony</label>
                    <input type="text"></input>
                  </div>
                  <div className="address_info_input">
                    <label>Building</label>
                    <input type="text"></input>
                  </div>
                  <div className="address_info_input">
                    <label>Landmark</label>
                    <input type="text"></input>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "1rem" }}>
                <p className="address_header">Social media section</p>
                <div className="address_section">
                  <div style={{ width: "50%" }}>
                    <div className="address_info_input">
                      <label>Facebook</label>
                      <input type="text"></input>
                    </div>
                    <div className="address_info_input">
                      <label>Instagram</label>
                      <input type="text"></input>
                    </div>
                  </div>
                  <div style={{ width: "50%" }}>
                    <div className="address_info_input">
                      <label>Twitter</label>
                      <input type="number"></input>
                    </div>
                    <div className="address_info_input">
                      <label>Linkedin</label>
                      <input type="text"></input>
                    </div>
                  </div>
                </div>
              </div>

              <div className="profileUpdate_action_btn">
                <button className="cancel">Cancel</button>
                <button className="save">Save</button>
              </div>
            </div>
          </div>
        )}
        {/* ================================ITEM SECTION==================================== */}
        {itemPannel && (
          <div className="item_pannel">
            <div className="item_card">
              <div className="item_card_header">
                <div className="header_details">
                  <h4 className="item_name">Chicken Biriyani</h4>
                </div>
                <div className="header_menu">
                  {itemMenu && (
                    <div className="header_menu_options">
                      <button className="update_btn">Update</button>
                      <button>Delete</button>
                      <button onClick={handleCancelMenu} className="cancel_btn">
                        Cancel
                      </button>
                    </div>
                  )}
                  <i
                    onClick={handleMenu}
                    class="bx bx-dots-vertical-rounded"
                  ></i>
                </div>
              </div>
              <div className="item_card_body">
                <img src="./Images/food2.png"></img>
                <div>
                  <p className="item_description">
                    A flavorful South Asian dish made with tender chicken
                    pieces, fragrant basmati rice, and a blend of spices like
                    saffron, cardamom, and cumin. Layered and slow-cooked to
                    perfection.
                  </p>
                  <p className="itemPrice">₹ 250</p>
                </div>
              </div>
            </div>

            <div className="item_card">
              <div className="item_card_header">
                <div className="header_details">
                  <h4 className="item_name">Chicken Biriyani</h4>
                </div>
                <div className="header_menu">
                  {itemMenu && (
                    <div className="header_menu_options">
                      <button className="update_btn">Update</button>
                      <button>Delete</button>
                      <button onClick={handleCancelMenu} className="cancel_btn">
                        Cancel
                      </button>
                    </div>
                  )}
                  <i
                    onClick={handleMenu}
                    class="bx bx-dots-vertical-rounded"
                  ></i>
                </div>
              </div>
              <div className="item_card_body">
                <img src="./Images/food2.png"></img>
                <div>
                  <p className="item_description">
                    A flavorful South Asian dish made with tender chicken
                    pieces, fragrant basmati rice, and a blend of spices like
                    saffron, cardamom, and cumin. Layered and slow-cooked to
                    perfection.
                  </p>
                  <p className="itemPrice">₹ 250</p>
                </div>
              </div>
            </div>

            <div className="item_card">
              <div className="item_card_header">
                <div className="header_details">
                  <h4 className="item_name">Chicken Biriyani</h4>
                </div>
                <div className="header_menu">
                  {itemMenu && (
                    <div className="header_menu_options">
                      <button className="update_btn">Update</button>
                      <button>Delete</button>
                      <button onClick={handleCancelMenu} className="cancel_btn">
                        Cancel
                      </button>
                    </div>
                  )}
                  <i
                    onClick={handleMenu}
                    class="bx bx-dots-vertical-rounded"
                  ></i>
                </div>
              </div>
              <div className="item_card_body">
                <img src="./Images/food2.png"></img>
                <div>
                  <p className="item_description">
                    A flavorful South Asian dish made with tender chicken
                    pieces, fragrant basmati rice, and a blend of spices like
                    saffron, cardamom, and cumin. Layered and slow-cooked to
                    perfection.
                  </p>
                  <p className="itemPrice">₹ 250</p>
                </div>
              </div>
            </div>

            <div className="item_card">
              <div className="item_card_header">
                <div className="header_details">
                  <h4 className="item_name">Chicken Biriyani</h4>
                </div>
                <div className="header_menu">
                  {itemMenu && (
                    <div className="header_menu_options">
                      <button className="update_btn">Update</button>
                      <button>Delete</button>
                      <button onClick={handleCancelMenu} className="cancel_btn">
                        Cancel
                      </button>
                    </div>
                  )}
                  <i
                    onClick={handleMenu}
                    class="bx bx-dots-vertical-rounded"
                  ></i>
                </div>
              </div>
              <div className="item_card_body">
                <img src="./Images/food2.png"></img>
                <div>
                  <p className="item_description">
                    A flavorful South Asian dish made with tender chicken
                    pieces, fragrant basmati rice, and a blend of spices like
                    saffron, cardamom, and cumin. Layered and slow-cooked to
                    perfection.
                  </p>
                  <p className="itemPrice">₹ 250</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===============================AMBIENCE SECTION===================================== */}
        <div className="ambience_pannel">
          <div className="ambience_photo_container">
            <img src="./Images/resturant3.jpg"></img>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerProfile;
