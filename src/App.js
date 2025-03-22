import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
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

function App() {
  const [showRestaurants, setShowRestaurants] = useState(TableBooking);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fooddelivery" element={<FoodDelivery />} />
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
        <Route path="partnerwithus" element={<PartnerLogin />} />
        <Route path="/additem" element={<AddItem />} />
        <Route path="/ratting" element={<Ratting />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/genie" element={<Genie />} />
        <Route path="/pickup" element={<Pickup />} />
        <Route path="/drop" element={<Drop />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
