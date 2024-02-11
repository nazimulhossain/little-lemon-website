import { Routes,Route } from "react-router-dom";
import Home from "./routes/Home";
import ProductDetails from "./routes/ProductDetails";
import Header from "./components/Header";
import BookingPage from "./routes/BookingPage";
import ConfirmedBooking from "./routes/ConfirmedBooking";







function App() {

 

 
  return (
   <>
  <Routes>
      <Route path="/" element={<Header/>} >
      <Route index element={<Home />} />
      <Route path='/product-detail' element={<ProductDetails />} />
      <Route path='/reservation' element={<BookingPage />} />
      <Route path='/thank-you' element={<ConfirmedBooking />} />
 
      </Route>
    </Routes>
   </>
  );
}

export default App;
