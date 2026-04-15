import React, { useState, useRef } from "react";
import Strength_icon from "../assets/Strength_icon.png"
import Agility_icon from "../assets/Agility_icon.png"
import Intelligence_icon from "../assets/Intelligence.png"
import Universal_icon from "../assets/Universal_icon.png"

function HoverPopup({id , children }) {
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

  const mappedRoles = id.roles.map((role,key)=>{
    return(<p>{role}</p>)
  })

  return (
    <div
      style={{ position: "relative", display: "inline-block", cursor:"help"}}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}

       {isHovered ? 
        <div className="heroHoverWrapper"
        ><p style={{margin:"0", fontSize:"32px",marginBottom:"5px"}}>{id.localized_name}</p>
          <div className="heroHoverImgWrapper">
          <img className="heroHoverImg" src={`https://cdn.cloudflare.steamstatic.com/${id.img}`} alt=""/>
          <img className="heroHoverImgIcon" src={id.primary_attr === "str" ? Strength_icon : id.primary_attr === "agi" ? Agility_icon : id.primary_attr === "int" ? Intelligence_icon : id.primary_attr === "all" ? Universal_icon : null} alt="" />
        </div>
            {/* HERO HEALTH/MANA IS CURRENTLY 22 PER STR AND 12 PER INT */}
            <div style={{backgroundColor:"#508b38", borderRadius:"5px",marginTop:"5px"}}>
              <p style={{margin:"0"}}>{id.base_mana + (id.base_str * 22)}</p>
            </div>
            <div style={{backgroundColor:"#3c6dd3", borderRadius:"5px",marginTop:"2px"}}>
              <p style={{margin:"0"}}>{id.base_health + (id.base_int * 12)}</p>
            </div>    
              <div className="heroRoleWrapper">
                {mappedRoles}
              </div>
              <div className="attributeContainer" style={{backgroundColor: id.primary_attr === "str" || id.primary_attr === "all" ? "#ff000056" : null}}>
                <div style={{display:"flex", alignItems:"center"}}>
                  <img src={Strength_icon} alt=""/>
                  <p>Str</p>
                </div>
                <p><strong>{id.base_str}</strong> + {id.str_gain}</p>       
              </div>
              <div className="attributeContainer" style={{backgroundColor: id.primary_attr === "agi" || id.primary_attr === "all" ? "#00ff555d" : null}}>
                <div style={{display:"flex", alignItems:"center"}}>
                  <img src={Agility_icon} alt=""/>
                  <p>Agi</p>
                </div>
                <p><strong>{id.base_agi}</strong> + {id.agi_gain}</p>       
              </div>
              <div className="attributeContainer" style={{backgroundColor: id.primary_attr === "int" || id.primary_attr === "all" ? "#002fff5b" : null}}>
                <div style={{display:"flex", alignItems:"center"}}>
                  <img src={Intelligence_icon} alt=""/>
                  <p>Int</p>
                </div>
                <p><strong>{id.base_int}</strong> + {id.int_gain}</p>       
              </div>
            <div className="heroStatsContainer">
              <div className="heroStatsContainerData">
                <p>Attack</p>
                <p>{id.base_attack_min} - {id.base_attack_max}</p>
              </div>
              <div className="heroStatsContainerData">
                {/* AT THIS TIME ARMOR IS 0.167 PER AGI */}
                <p>Armor</p>
                <p>{Math.round(((id.base_agi * 0.167) + id.base_armor) * 10) / 10}</p>
              </div>
            </div>
            <div className="heroStatsContainer">
              <div className="heroStatsContainerData">
                <p>Range</p>
                <p>{id.attack_range}</p>
              </div>
              <div className="heroStatsContainerData">
                <p>Speed</p>
                <p>{id.move_speed}</p>
              </div>
            </div>
          
          
          
        </div>
    :null}
      
    </div>
  );
}

export default HoverPopup;