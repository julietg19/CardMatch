import React, { useState } from "react";
import "./style.css";

export default function index() {
  const front = "./assets/images/paintings/theswingfragonard.jpg";
  const back = "./assets/images/paintings/frida2.jpg";

  return (
    <div className="container" onClick={() => {
      
    }}>
      <img width="200" height="300" src={back} />
    </div>
  );
}
