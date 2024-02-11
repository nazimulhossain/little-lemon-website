import personImage from "../assets/testimonials-1.jpg";
import personImage2 from "../assets/testimonials-2.jpg";
import personImage3 from "../assets/testimonials-3.jpg";
import Star from "./Star";

function Testimonials(){
    return (
        <section className="testimonials">
            <h2 className="testimonials__title">Testimonials</h2>
            <article className="testimonials__container">
                <div className="testimonials__card">
                    <img src={personImage} alt="Testimonial 1" className="testimonials__image"/>
                    <Star size={5} />
                    <p className="testimonials__description">I loved the experience at the restaurant! The food was delicious and the service was exceptional. I will definitely be back more often!</p>
                    <h3 className="testimonials__author">Jack</h3>
                </div>
                <div className="testimonials__card">
                    <img src={personImage2} alt="Testimonial 2" className="testimonials__image"/>
                    <Star size={4} />
                    <p className="testimonials__description">I went to the restaurant with my family and we were very pleased with everything. The food was wonderful and the atmosphere was very cozy. I highly recommend it!</p>
                    <h3 className="testimonials__author">Lona</h3>
                </div>
                <div className="testimonials__card">
                    <img src={personImage3} alt="Testimonial 3" className="testimonials__image"/>
                    <Star size={4} />
                    <p className="testimonials__description">The restaurant has a great variety of dishes and all the ones I tried were excellent. In addition, the price is fair and the service is very attentive. I will definitely recommend it to my friends.</p>
                    <h3 className="testimonials__author">Mark</h3>
                </div>
            </article>

           

        </section>
    )

}

export default Testimonials;