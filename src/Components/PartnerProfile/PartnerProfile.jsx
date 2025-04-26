import React, { useRef, useState } from "react";
import "./PartnerProfile.css";
import { FaRegEdit } from "react-icons/fa";
import { BiColor } from "react-icons/bi";

const PartnerProfile = () => {
  const [profilePicture, setProfilepicture] = useState(null);
  const [itemMenu, setItemMenu] = useState(false);
  const [itemPannel, setItemPannel] = useState(false);
  const [editPannel, setEditPanel] = useState(true);
  const [ambiencePannel, setAmbiencePannel] = useState(false);
  const [menucard, setMenucard] = useState(false);
  const [addMenu, setAddMenu] = useState(null);
  const [deleteConformation, setDeleteConformation] = useState(false);
  const [deleteAccount, setDeleteAccount] = useState(false);
  const inputRef = useRef();
  const addMenuRef = useRef();
  const handleMenu = () => {
    setItemMenu(true);
  };
  const handleCancelMenu = () => {
    setItemMenu(false);
  };
  const handleProfileEdit = () => {
    setItemPannel(false);
    setAmbiencePannel(false);
    setMenucard(false);
    setDeleteAccount(false);
    setEditPanel(true);
  };

  const handleAllItem = () => {
    setEditPanel(false);
    setAmbiencePannel(false);
    setMenucard(false);
    setDeleteAccount(false);
    setItemPannel(true);
  };

  const handleAmbience = () => {
    setEditPanel(false);
    setItemPannel(false);
    setMenucard(false);
    setDeleteAccount(false);
    setAmbiencePannel(true);
  };

  const handleMenuCard = () => {
    setEditPanel(false);
    setItemPannel(false);
    setAmbiencePannel(false);
    setDeleteAccount(false);
    setMenucard(true);
  };

  const handleDelete = () => {
    setEditPanel(false);
    setItemPannel(false);
    setAmbiencePannel(false);
    setMenucard(false);
    setDeleteAccount(true);
  };

  const handleConfirmDelete = () => {
    setDeleteConformation(true);
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
            <button onClick={handleAmbience}>View Ambiences</button>
            <button onClick={handleMenuCard}>View Menues</button>
            <button onClick={handleDelete}>Delete account</button>
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
        {ambiencePannel && (
          <div className="ambience_pannel">
            <div>
              <div className="ambience_photo_container">
                <img src="./Images/resturant3.jpg"></img>
              </div>
              <button>Delete</button>
            </div>

            <div>
              <div className="ambience_photo_container">
                <img src="./Images/resturant3.jpg"></img>
              </div>
              <button>Delete</button>
            </div>
          </div>
        )}

        {/* ===============================MENU CARD SECTION===================================== */}

        {menucard && (
          <div className="menucard_pannel">
            <div className="menucard_container">
              <div>
                <div className="menucard">
                  <img src="./Images/menucard1.jpeg"></img>
                </div>

                <button className="menu_delete">Delete</button>
              </div>
              <div>
                <div className="menucard">
                  <img src="./Images/menucard1.jpeg"></img>
                </div>

                <button className="menu_delete">Delete</button>
              </div>
              <div>
                <div className="menucard">
                  <img src="./Images/menucard1.jpeg"></img>
                </div>

                <button className="menu_delete">Delete</button>
              </div>
              <div>
                <div className="menucard">
                  <img src="./Images/menucard1.jpeg"></img>
                </div>

                <button className="menu_delete">Delete</button>
              </div>

              <div>
                <input
                  type="file"
                  ref={addMenuRef}
                  onChange={(event) => setAddMenu(event.target.files)}
                  hidden
                ></input>
                <button
                  className="add_menu"
                  onClick={() => addMenuRef.current.click()}
                >
                  <i class="bx bx-folder-plus"></i>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ===============================DELETE PARTNER SECTION===================================== */}

        {deleteAccount && (
          <div className="delete_pannel">
            <div className="delete_container">
              <p className="delete_header">
                Are you sure to delete your Account ?
              </p>
              <p className="delete_desc">
                Deleting your account will remove all of your information form
                our database .
              </p>

              <div className="deleteaccount_action_btn">
                <button className="delete_cancel">Cancel</button>
                <button
                  onClick={handleConfirmDelete}
                  className="delete_confirm"
                >
                  Delete
                </button>
              </div>

              {deleteConformation && (
                <div>
                  <label>To confirm this enter your password</label>
                  <div className="deleteaccount_input_section">
                    <input type="password"></input>
                    <button type="submit">Confirm</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PartnerProfile;
