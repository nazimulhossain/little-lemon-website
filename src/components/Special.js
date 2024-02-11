import { useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductContext } from "../contexts/ProductContext";

function Special(){

   const {product} = useContext(ProductContext);

    return (
        <section className="special" id="menu">
            <div className="special__title">
                <h2 className="header-secondary">Specials</h2>
                <a href="#" className="btn">Online Menu</a>
            </div>
            <article className="special__card">
                {
                    product.map((card)=>{
                        
                        return <ProductCard key={card.id} product={card}  />
                    })
                }

            </article>
        </section>
    )

}

export default Special;