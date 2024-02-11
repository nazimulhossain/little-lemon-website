import ownerImage1 from "../assets/owner-a1.jpg";
import ownerImage2 from "../assets/owner-b1.jpg";

function About(){
    return (
        <section className="about" id="about">
            <div className="about__textbox">
                <h2 className="about__owner">
                    Little Lemon
                </h2>
                <span className="about__place">Chicago</span>
                <p className="description">
                Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.<br/><br/>
                To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
                </p>

            </div>
            <div className="about__image">
                <img src={ownerImage1} className="owner__image" alt="owner 1" />
                <img src={ownerImage2} className="owner__image owner__image-2" alt="owner 2" />

            </div>

        </section>
    )

}

export default About;