import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)


  function handleCartAdd() {
    setInCart((inCart)=> !inCart)
  } 

  const cartClass = inCart ? "in-cart" : ""
  const cartText = inCart ?  "Remove from Cart" : "Add to Cart"

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? 'remove' : 'add'} onClick={handleCartAdd}>{cartText}</button>
    </li>
  );
}

export default Item;
