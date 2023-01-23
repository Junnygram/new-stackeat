import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen";
import Footer from "./components/Footer";
import CartScreen from "./screen/CartScreen";
import SigninScreen from "./screen/SigninScreen";
import ShippingScreen from "./screen/ShippingScreen";
import PaymentMethodScreen from "./screen/PaymentMethodScreen";
import SignupScreen from "./screen/SignupScreen";
import PlaceorderScreen from "./screen/PlaceorderScreen";
import OrderScreen from "./screen/OrderScreen";
import OrderhistoryScreen from "./screen/OrderhistoryScreen";
import ProfileScreen from "./screen/ProfileScreen";
// import SearchScreen from "./screen/SearchScreen";

function App() {
  return (
    <div className="App overflow-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/product/:slug" element={<ProductScreen />} />
          <Route path="/signin" element={<SigninScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/" element={<HomeScreen />} />
          <Route path="/shipping" element={<ShippingScreen />} />
          <Route path="/payment" element={<PaymentMethodScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/placeorder" element={<PlaceorderScreen />} />
          {/* <Route path="/search" element={<SearchScreen />} /> */}
          <Route path="/order/:id" element={<OrderScreen />}></Route>
          <Route path="/orderhistory" element={<OrderhistoryScreen />}></Route>
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
