import React from "react";
import Button from "./Button";



const ButtonList = ()=>{
  const list = ["All","Gaming","Song","Live","Soocer","Cooking","Valentines","Sports","Education","funny",
  "Thesis","Soocer","Cooking","Valentines"];

  return (
    <div className="flex">
      {
        list.map((name,index) =><Button key={index} name={name}/>)
      }
    </div>
  );
}
export default ButtonList;