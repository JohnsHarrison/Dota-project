import { useState } from "react"
import heroesData from "../services/heroes.json"
import heroLore from "../services/heroLore.json"
import { useParams } from "react-router-dom"
import heroAbilities from "../services/heroAbilities.json"
import heroAbilityData from "../services/heroAbilityData.json"
import HoverPopupAbility from "../components/HoverPopupAbility"
import Strength_icon from "../assets/Strength_icon.png"
import Agility_icon from "../assets/Agility_icon.png"
import Intelligence_icon from "../assets/Intelligence.png"





function HeroDetails(){
const {id} = useParams()
// console.log(heroesData[id])
console.log(Math.round(heroesData[id].base_mana_regen  + ((heroesData[id].base_int * 0.05)*10))/10)
const [display, setDisplay] = useState("lore")    
// console.log(heroAbilities[heroesData[id].name].abilities)
const mappedAbilities = (heroAbilities[heroesData[id].name].abilities).map((data,index)=>{
  // console.log(heroAbilityData[data])
  if(data === "generic_hidden" || heroAbilityData[data].is_innate){
    return null
  }else{  
    return(
      
   
      <HoverPopupAbility data={heroAbilityData[data]}>
        <img src={`https://cdn.cloudflare.steamstatic.com${heroAbilityData[data].img}`}/>
      </HoverPopupAbility>
    
  )
  }
})
const mappedRoles = heroesData[id].roles.map((role,key)=>{
    return(<p style={{margin:"0px 5px 5px 0px"}}>{role}</p>)
  })

      return(
        <div>
          <div className="heroDetailsHeader">
            <div style={{display:"flex", width:"500px", textAlign:"left"}}>
              <img style={{marginRight:'10px', width:"250px", height:"150px"}} src={`https://cdn.cloudflare.steamstatic.com${heroesData[id].img}`}/>
              <div>
                <p style={{fontSize:"32px", margin:"0px 0px 10px 0px"}}>
                  {heroesData[id].localized_name}
                </p>
                <div style={{display:'flex', flexWrap:"wrap", width:"200px"}}>
                  <p style={{margin:"0px 5px 0px 0px"}}>
                  {heroesData[id].attack_type} 
                  </p>
                  {mappedRoles}
                </div>
              </div>
              
            </div>
            
            
            <div className="heroAbilityContainer">
            {mappedAbilities}
            </div>
          </div>
          

          <div style={{width:"200px", border:"1px solid black", padding:"10px"}}>
            <h1 style={{margin:"5px 0px 10px 0px"}}>Attributes</h1>
            <div className="attributeContainer" style={{backgroundColor: heroesData[id].primary_attr === "str" || heroesData[id].primary_attr === "all" ? "#ff000056" : null}}>
                <div style={{display:"flex", alignItems:"center"}}>
                  <img src={Strength_icon} alt=""/>
                  <p>Str</p>
                </div>
                <p><strong>{heroesData[id].base_str}</strong> + {heroesData[id].str_gain}</p>       
              </div>
              <div className="attributeContainer" style={{backgroundColor: heroesData[id].primary_attr === "agi" || heroesData[id].primary_attr === "all" ? "#00ff555d" : null}}>
                <div style={{display:"flex", alignItems:"center"}}>
                  <img src={Agility_icon} alt=""/>
                  <p>Agi</p>
                </div>
                <p><strong>{heroesData[id].base_agi}</strong> + {heroesData[id].agi_gain}</p>       
              </div>
              <div className="attributeContainer" style={{backgroundColor: heroesData[id].primary_attr === "int" || heroesData[id].primary_attr === "all" ? "#002fff5b" : null}}>
                <div style={{display:"flex", alignItems:"center"}}>
                  <img src={Intelligence_icon} alt=""/>
                  <p>Int</p>
                </div>
                <p><strong>{heroesData[id].base_int}</strong> + {heroesData[id].int_gain}</p>       
            </div>
           </div>

           <div style={{width:"200px", border:"1px solid black", padding:"10px"}}>
            <h1 style={{margin:"5px 0px 10px 0px"}}>Defense</h1>
 
               <div className="attributeContainer">
                <div style={{display:"flex", alignItems:"center"}}>
                  <p>Armor</p>
                </div>
                <p>{Math.round(((heroesData[id].base_agi * 0.167) + heroesData[id].base_armor) * 10) / 10}</p>       
            </div>
            <div className="attributeContainer">
                <div style={{display:"flex", alignItems:"center"}}>
                  <p>Magic Resistance</p>
                </div>
                <p>{heroesData[id].base_mr +( heroesData[id].base_int * .1)}</p>       
            </div>
           </div>

            <div style={{width:"200px", border:"1px solid black", padding:"10px"}}>
            <h1 style={{margin:"5px 0px 10px 0px"}}>Mobility</h1>
 
               <div className="attributeContainer">
                <div style={{display:"flex", alignItems:"center"}}>
                  <p>Movement Speed</p>
                </div>
                <p>{heroesData[id].move_speed}</p>       
            </div>
            <div className="attributeContainer">
                <div style={{display:"flex", alignItems:"center"}}>
                  <p>Vision</p>
                </div>
                <p>{heroesData[id].day_vision} \ {heroesData[id].night_vision}</p>       
            </div>
           </div>

           <div style={{width:"200px", border:"1px solid black", padding:"10px"}}>
            <h1 style={{margin:"5px 0px 10px 0px"}}>Attack</h1>
 
               <div className="attributeContainer">
                <div style={{display:"flex", alignItems:"center"}}>
                  <p>Damage</p>
                </div>
                <p>{heroesData[id].base_attack_min} - {heroesData[id].base_attack_max}</p>     
            </div>
            <div className="attributeContainer">
                <div style={{display:"flex", alignItems:"center"}}>
                  <p>Base Attack Speed</p>
                </div>
                <p>{heroesData[id].attack_rate}</p>       
            </div>
            <div className="attributeContainer">
                <div style={{display:"flex", alignItems:"center"}}>
                  <p>Range</p>
                </div>
                <p>{heroesData[id].attack_range}</p>       
            </div>
            <div className="attributeContainer">
                <div style={{display:"flex", alignItems:"center"}}>
                  <p>Projectile Speed</p>
                </div>
                <p>{heroesData[id].projectile_speed}</p>       
            </div>
           </div>

           <div style={{width:"200px", border:"1px solid black", padding:"10px"}}>
            <h1 style={{margin:"5px 0px 10px 0px"}}>Base Health / Mana</h1>
              <div style={{backgroundColor:"#508b38", borderRadius:"5px",marginTop:"5px"}}>
              <p style={{margin:"0"}}>{heroesData[id].base_health + (heroesData[id].base_str * 22)} + {Math.round(heroesData[id].base_health_regen  + ((heroesData[id].base_str * 0.09)* 10)) /10}/s</p>
            </div>
            <div style={{backgroundColor:"#3c6dd3", borderRadius:"5px",marginTop:"2px", marginBottom:"5px"}}>
              <p style={{margin:"0"}}>{heroesData[id].base_mana + (heroesData[id].base_int * 12)} + {Math.round(heroesData[id].base_mana_regen  + ((heroesData[id].base_int * 0.05)* 10)) /10}/s</p>
              
            </div> 
             
           </div>
            

             
            {/* {heroLore[id]} */}
            
            <div>
              <button onClick={()=> setDisplay("lore")}>Lore</button>
              <button onClick={()=> setDisplay("stats")}>Stats</button>
              <button onClick={()=> setDisplay("games")}>Recent Games</button>
            </div>
            <div>
              {display === "lore" ? <p>LORE</p>  :
               display === "stats" ? <p>STATS</p> :
               display === "games" ? <p>GAMES</p>
               :null}
            </div>
        </div>
      )  
    

    
}

export default HeroDetails