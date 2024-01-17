import React, { useRef } from "react";
import "./Map.css";

const Map = (props) => {
  return (
    <div className={`map ${props.className}`} style={props.style}>
      This is a fake Map
    </div>
  );
};

export default Map;
