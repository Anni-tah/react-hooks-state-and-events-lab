import React from "react";
import { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
 const[mode, setMode]=useState('light');

function handleClick(){
  /*if (mode==="light"){
    setMode("dark");
  }else{
    setMode("light");
  }*/
 setMode(mode==="light" ? "dark" : "light");
  
}

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = mode ==='dark' ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
