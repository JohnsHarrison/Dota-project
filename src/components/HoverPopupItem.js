import React, { useState, useRef } from "react";

function HoverPopupItem({data , children }) {
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeout = useRef(null);
  const handleMouseEnter = () => {
    hoverTimeout.current = setTimeout(() => {
      setIsHovered(true);
    }, 600); // adjust delay (ms) here
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout.current);
    setIsHovered(false);
  };

  return (
    <div
      style={{ position: "relative", display: "inline-block", cursor:"help"}}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}

       {isHovered ? 
        <div className="heroHoverWrapper">
            <h4>{data.dname}</h4>
            <p>{data.lore}</p> 
        </div>
    :null}
      
    </div>
  );
}

export default HoverPopupItem;