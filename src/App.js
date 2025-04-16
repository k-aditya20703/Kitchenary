import Home from "./Components/Home/Home";
import { data, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FoodDelivery from "./Components/FoodDelivery/FoodDelivery";
import Dineout from "./Components/Dineout/Dineout";
import { useState } from "react";
import { TableBooking } from "./Constants/TableBooking";
import Tablebooking from "./Components/TableBooking/Tablebooking";
import PartnerLogin from "./Components/PartnerLogin/PartnerLogin";
import AddItem from "./Components/AddItem/AddItem";
import Ratting from "./Components/Ratting/Ratting";
import Signup from "./Components/Signup/Signup";
import Genie from "./Components/Genie/Genie";
import Pickup from "./Components/Pickup/Pickup";
import Drop from "./Components/Drop/Drop";
import Payment from "./Components/Payment/Payment";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import Error from "./Components/PopUp/Error";
import Warning from "./Components/PopUp/Warning";
import Info from "./Components/PopUp/Info";
import Success from "./Components/PopUp/Success";
import FoodOrder from "./Components/FoodOrder/FoodOrder";
import Cart from "./Components/Cart/Cart";
import PartnerSignup from "./Components/PartnerSignup/PartnerSignup";

function App() {
  const [showRestaurants, setShowRestaurants] = useState(TableBooking);
  const [partners, setPartners] = useState([]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/fooddelivery"
          element={
            <FoodDelivery partners={partners} setPartners={setPartners} />
          }
        />
        <Route
          path="/dineout"
          element={
            <Dineout
              showRestaurants={showRestaurants}
              setShowRestaurants={setShowRestaurants}
            />
          }
        />
        <Route
          path="/tablebooking"
          element={
            <Tablebooking
              showRestaurants={showRestaurants}
              setShowRestaurants={setShowRestaurants}
            />
          }
        />
        <Route path="/partnerwithus" element={<PartnerSignup />} />
        <Route path="/additem" element={<AddItem />} />
        <Route path="/ratting" element={<Ratting />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/genie" element={<Genie />} />
        <Route path="/pickup" element={<Pickup />} />
        <Route path="/drop" element={<Drop />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/instamart" element={<Info />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/foodorder"
          element={<FoodOrder partners={partners} setPartners={setPartners} />}
        />
      </Routes>
    </>
  );
}

export default App;
