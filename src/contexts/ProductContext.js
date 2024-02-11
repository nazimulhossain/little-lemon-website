import { createContext, useState} from 'react';
import cardImage1 from "../assets/card-image-1.jpg";
import cardImage2 from "../assets/card-image-2.jpg";
import cardImage3 from "../assets/card-image-3.jpg";

const items = [
    {
        id: 1,
        name : "Bruchetta",
        description : "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        price : "$10.99",
        image : cardImage2
    },
    {
        id: 2,
        name : "Lemon Dessert",
        description : "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        price : "$7.99",
        image : cardImage2
    },
    {
        id: 3,
        name : "Greek Salad",
        description : "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic.",
        price : "$12.99",
        image : cardImage3
    }
]


export const ProductContext = createContext({
  product : items,  
  setProduct: () => null,
  currentProduct: {},
  setCurrentProduct: () => null
  
});

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(items);
  const [currentProduct, setCurrentProduct] = useState(items[0]);
  const value = { product, setProduct,currentProduct,setCurrentProduct };


  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};