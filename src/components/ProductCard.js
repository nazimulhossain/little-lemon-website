import { useContext, useEffect } from "react";
import deliveryVan from "../assets/delivery-logo.jpg";
import { ProductContext } from "../contexts/ProductContext";
import { Link, useNavigate } from "react-router-dom";


function ProductCard({product}){

    const {name,description,price,image} = product;

    const {setCurrentProduct} = useContext(ProductContext);

    

    
    return (
        <div className="card">
                    <img src={image} alt="card 1"className="card__image" />
                    <div className="card__body">
                        <div className="card__details">
                        <h3 className="card__title">{name}</h3>
                        <span className="card_price">{price}</span>
                        </div>
                        <p className="card_description">{description}</p>
                        <div className="card__delivery">
                        <Link to="product-detail" onClick={()=> setCurrentProduct(product)}>Order a delivery</Link>
                        <img src={deliveryVan} alt="delivery van" className="delivery-icon" />
                        </div>

                    </div>
                </div>
    )

}

export default ProductCard;