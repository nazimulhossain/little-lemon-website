import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

function BookingForm({availableTimes,dispatch,submitForm}){

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
          date: (new Date()).toLocaleDateString("en-CA"),
          time: availableTimes.times[0],
          guests: 1,
          occasion: "birthday",
        },
        onSubmit: (values) => {
          const response = submitForm(values);
          if (response) {
            localStorage.setItem("Bookings", JSON.stringify(values));
            navigate("/thank-you");
           
          };
        },
        validationSchema: Yup.object({
          date: Yup.date().required("Date is required"),
          time: Yup.string().oneOf(availableTimes.times).required("Time is required"),
          guests: Yup.number().min(1, "Must be at least 1").max(10, "Must be at most 10").required("Number of guests is required"),
          occasion: Yup.string().oneOf(["birthday", "engagement", "anniversary"]).required("Occasion is required"),
        }),
      });

      useEffect(() => {
        dispatch({ type: "UPDATE_TIMES", payload: new Date(formik.values.date) });
      }, [formik.values.date]);

    return (




                    <div className="booking">
                        <h2 className="header-secondary margin-bottom-44">Book Now</h2>
                        <form className="booking__form" onSubmit={formik.handleSubmit} noValidate>
                        <div className="booking_input-box">
                        <label htmlFor="res-date">Choose date</label>
                    <input type="date" data-testid="res-date" id="res-date" {...formik.getFieldProps("date")} />
                        </div>
                    
                    <div data-testid="res-date-error" className="form__error">
                    {formik.touched.date && formik.errors.date}
                    </div>
                    <div className="booking_input-box">

                    <label htmlFor="res-time">Choose time</label>
                    <select data-testid="res-time" id="res-time" {...formik.getFieldProps("time")}>
                    {availableTimes.times.map((time) => (
                        <option key={time} value={time}>{time}</option>
                        ))}
                    </select>
                        </div>
                    <div data-testid="res-time-error" className="form__error">
                    {formik.touched.time && formik.errors.time}
                    </div>
                    <div className="booking_input-box">

                    <label htmlFor="guests">Number of guests</label>
                    <input data-testid="guests" type="number" placeholder="1" min="1" max="10" id="guests" {...formik.getFieldProps("guests")} />
                    </div>
                    <div data-testid="guests-error" className="form__error">
                    {formik.touched.guests && formik.errors.guests}
                    </div>
                    <div className="booking_input-box">

                    <label htmlFor="occasion">Occasion</label>
                    <select data-testid="occasion" id="occasion" {...formik.getFieldProps("occasion")}>
                    <option value="birthday" className="opt">Birthday</option>
                    <option value="engagement" className="opt">Engagement</option>
                    <option value="anniversary" className="opt">Anniversary</option>
                    </select>
                    </div>
                    <div data-testid="occasion-error" className="form__error">
                    {formik.touched.occasion && formik.errors.occasion}
                    </div>
                    <input data-testid="submit-btn" type="submit" value="Make Your reservation" className="btn" />
                    </form>
                    </div>
    )

}

export default BookingForm;