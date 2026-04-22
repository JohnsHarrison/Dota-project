import React, { useState, useRef } from "react";

function HoverPopupAbility({data , children }) {
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
        <div className="abilityHoverWrapper">
            <div className="abilityHoverName">
              <p><strong>{data.dname}</strong></p>
            </div>
            <div className="abilityHoverDetails">
              {
                data.behavior !== undefined  ? <p>Target: {([data.behavior].join()).replaceAll(",", " / ")}</p> : null
              } 
              {
                data.dmg_type !== undefined ? <p>Damage Type: <span style={{color: data.dmg_type === "Physical" ? "#ff4a4a" : data.dmg_type === "Magical" ?"#2b5cff" : data.dmg_type === "Pure" ? "#e5ff54" : null }}>{data.dmg_type}</span></p> : null
              }
              {
               data.bkbpierce !== undefined  ? <p>Pierces BKB: <span  style={{color: data.bkbpierce === "Yes" ? "#00ff55" : "#ff4a4a"  }}>{data.bkbpierce}</span></p> :null
              }
              {
                data.dispellable !== undefined  ? <p>Dispellable: <span  style={{color: data.dispellable === "Yes" ? "#00ff55" : "#ff4a4a"  }}>{data.dispellable}</span></p> :null
              }
            </div>
            <div>
              {
                data.desc !== undefined ? <p>{data.desc}</p> : null
              }
            </div>
        </div>
    :null}
      
    </div>
  );
}

export default HoverPopupAbility;