import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { useNavigate,Link } from "react-router-dom";
import Footer from "../components/Footer";


function ProductDetails(){

    const {currentProduct} = useContext(ProductContext);

   const {name,description,price,image} = currentProduct;

   const navigate = useNavigate();


    return (
        <>
        <main>
            <section className="product">
                <div className="product__image">
                    <img src={image} alt={name}/>
                </div>
                <div className="product__details">
                    <h2 className="header-secondary">{name}</h2>
                    <p className="description">{description}</p>
                    <span className="product__price">{price}</span>
                    <a href="#popup" className="btn margin-top" style={{textAlign:'center'}}>Add to Cart</a>
                    
                </div>

                <div id="popup" className="popup">
                    <div className="popup__content">
                    <p>Product Checkout Option Under Development</p>
                    </div>
                    <a href="/#menu" className="popup__close">&times;</a>
                </div>

                
            </section>
        </main>
        <Footer />
        </>
    )

}

export default ProductDetails;