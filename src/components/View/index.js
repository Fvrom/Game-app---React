import React from "react";
import "./view.css";

const View = (props) => (
  <section className="view"
    {...props}
    style={{
      maxWidth: "2000px",
      margin: "0 auto",
      width: "100%",
    }}
  >
    <div className="container"> 
    {props.children}
    </div>
  </section>
);

export default View;
