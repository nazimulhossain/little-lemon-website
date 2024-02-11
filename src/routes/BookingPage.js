import { useReducer } from "react";
import BookingForm from "../components/BookingForm/BookingForm";
import Footer from "../components/Footer";



const seededRandom = (seed) => {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };
  
  export const fetchAPI = (date) => {
    const result = [];
    const random = seededRandom(date.getDate());
  
    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      };
      if (random() < 0.5) {
        result.push(i + ":30");
      };
    };
    return result;
  };
  
  export const submitAPI = (formData) => {
    if (!true) console.log(formData);
    return true;
  };

  const submitForm = (formData)=>{
    return submitAPI(formData);
  }

  export const initializeTimes = () => {
    // create a Date object to represent today's date
    const today = new Date();
    return { times: fetchAPI(today) };
  };

 export const updateTimes = (state, action) => {
    switch (action.type) {
      case "UPDATE_TIMES":
        return { ...state, times: fetchAPI(action.payload) };
      default:
        return state;
    };
  };

function BookingPage(){
    const [availableTimes,dispatch] = useReducer(updateTimes,initializeTimes());
    
    return(
        <>
        <main>
            <article className="booking__page">
                <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />

            </article>
        </main>
        <Footer />
        </>
    )

}

export default BookingPage;