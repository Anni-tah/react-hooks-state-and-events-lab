import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [addClass, SetAddClass]=useState("");
  function addClassName(){
   SetAddClass(addClass===""? "in-cart" : "");
   
  }
  const tContent=addClass===""? "Add to Cart" :"Remove from cat";
  
  return (
    <li className={addClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addClassName}>{tContent}</button>
    </li>
  );
}

export default Item;
