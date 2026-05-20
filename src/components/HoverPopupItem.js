import React, { useState, useRef } from "react";

function HoverPopupItem({data , children }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState("none")
  const hoverTimeout = useRef(null);
  const handleMouseEnter = () => {
    hoverTimeout.current = setTimeout(() => {
      setIsHovered(true);
    }, 600); // adjust delay (ms) here
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout.current);
    setIsHovered(false);
    setIsExpanded("none")
  };

  return (
    <div
      style={{ position: "relative", display: "inline-block", cursor:"help"}}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}

       {isHovered ? 
        <div className="ItemHoverWrapper">
            <h4>{data.dname}</h4>
            <p>Cost: {data.cost}</p>
            {data.cd > 0 ? <p>Cooldown: {data.cd} secs</p> : null}
            {
                data.dmg_type !== undefined ? <p>Damage Type: <span style={{color: data.dmg_type === "Physical" ? "#ff4a4a" : data.dmg_type === "Magical" ?"#2b5cff" : data.dmg_type === "Pure" ? "#e5ff54" : null }}>{data.dmg_type}</span></p> : null
            }
            {data.attrib.map((item,key)=>{
                 if(item.display !== undefined){
                    return <p>{item.display.replaceAll(`{value}`, item.value)}</p>         
                }else{
                    return null
                }
            })}

            <button onClick={(()=>{isExpanded === "none" ? setIsExpanded("flex") : setIsExpanded("none")})}>{isExpanded === "none" ? "Extend ▼" : "Collapse ▲"}</button>
            <div className="ItemHoverDetails" style={{display:isExpanded}}>
                {
                data.abilities !== undefined ? data.abilities.map((item,key)=>{
                        
                        return<p style={{marginBottom:"5px"}}>{item.title} [{item.type}]:<span> {item.description}</span></p>        
                    
                }) : null
                }
                
                {data.attrib.map((item,key)=>{
                        if(item.display === undefined){
                        return<p>{item.key.replaceAll(`_`,` `)}: {item.value}</p>        
                    }else{
                        return null
                    }
                })}
            </div>
            
        </div>
    :null}
      
    </div>
  );
}

export default HoverPopupItem;