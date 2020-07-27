import React from "react";

export default function index() {
  const color = {
    backgroundColor: "pink",
    color: "black",
    position: "absolute",
    bottom: "0",
    width: "100%",
  };

  return (
    <div className="text-center p-5" style={color}>
      <h5>Juliet Goldstein &copy; 2020</h5>
    </div>
  );
}
