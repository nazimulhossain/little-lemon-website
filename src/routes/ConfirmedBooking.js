import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import Footer from "../components/Footer";


const ConfirmedBooking= () => {
  const navigate = useNavigate();
  const [booking, setBooking] = useState();

  useEffect(() => {
    const booking = localStorage.getItem("Bookings");
    if (booking) {
      setBooking(JSON.parse(booking));
    };
  }, []);

  return (

      <>
   
      <div className="confirmation">
        
      
      {
        booking ?
        <main>
           {/* <h1 className="header-secondary margin-bottom-32" style={{textAlign:'center'}}>Confirmation details</h1> */}
          <h2 className="header-secondary margin-bottom-24" style={{textAlign:'center'}}>Thank you for your reservation!</h2>
          <p className="confirmation__description margin-bottom-24 ">We look forward to seeing you at Little Lemon.</p>
          <div className="confirmation__details">
          <div>Occasion: {booking.occasion}</div>
          <div>Guests: {booking.guests}</div>
          <div>Date: {booking.date}</div>
          <div>Time: {booking.time}</div>
          </div>
    </main> : <main>
      <h2>Not Reserved any Table</h2>
      <p>Please complete the booking table for reserve a table</p>
    </main>
      }

      {/* <button className="btn" aria-label="Go back to the home page" onClick={() => navigate("/")}>Back to Home</button> */}
      </div>
      <Footer />
      </>
  );
};

export default ConfirmedBooking;