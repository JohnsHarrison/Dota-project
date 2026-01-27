import Dire_icon from "../assets/Dire_icon.webp"

function Home() {
    const myUnixTimestamp = 1765333940
    const myDate = (new Date(myUnixTimestamp * 1000)).toLocaleString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  timeZone: 'America/New_York',
  timeZoneName: 'short',
});
    return (
        <div >
            <h3>home page</h3>

            <div class="chart">
  <svg viewBox="0 0 300 150" class="line-graph">
    {/* <!-- X and Y axis --> */}
    <line x1="20" y1="10" x2="20" y2="130" class="axis" />
    <line x1="20" y1="130" x2="280" y2="130" class="axis" />

    {/* <!-- Line --> */}
    <polyline
      points="20,120 70,90 120,100 170,60 220,80 270,40"
      class="graph-line"
    />
  </svg>
</div>


                <div style={{display:"flex", width:"70%",flexDirection:"column",margin:"auto"}}>
                    <div style={{display:"flex", justifyContent:"space-between",width:"100%",margin:"0px 0px 50px 0px"}}>
                        <p>
                          {myDate}   
                        </p>
                        <p>
                           Ranked Team Matchmaking 
                        </p>
                    </div>
                    <div style={{display:"flex", backgroundImage:`linear-gradient(129deg, #004b00d6, black, #cb0000)`,color: "white"}}>
                    <div style={{display:"flex",flexDirection:"column",width:"40%"}} >
                        <div style={{}}>
                            {/*team logo */}
                            <img style={{width:"150px"}} src={Dire_icon} alt=""/>
                            <p>DIRE</p>
                            <div>
                                <img style={{width:"80px"}} src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/drow_ranger.png?`} alt=""/>
                                <img style={{width:"80px"}} src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/drow_ranger.png?`} alt=""/>
                                <img style={{width:"80px"}} src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/drow_ranger.png?`} alt=""/>
                                <img style={{width:"80px"}} src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/drow_ranger.png?`} alt=""/>
                                <img style={{width:"80px"}} src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/drow_ranger.png?`} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div style={{display:"flex",width:"20%",justifyContent:"space-evenly",fontSize:"2em"}}>
                        <p style={{margin:"auto 10px"}}>20</p>
                        <p style={{margin:"auto 10px", alignContent:"center"}}>20:56</p>
                        <p style={{margin:"auto 10px"}}>65</p> 
                    </div>
                         
                    <div style={{display:"flex",flexDirection:"column",width:"40%"}} >
                        <div style={{}}>
                            {/*team logo */}
                            <img style={{width:"150px"}} src={Dire_icon} alt=""/>
                            <p>DIRE</p>
                            <div>
                                <img style={{width:"80px"}} src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/drow_ranger.png?`} alt=""/>
                                <img style={{width:"80px"}} src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/drow_ranger.png?`} alt=""/>
                                <img style={{width:"80px"}} src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/drow_ranger.png?`} alt=""/>
                                <img style={{width:"80px"}} src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/drow_ranger.png?`} alt=""/>
                                <img style={{width:"80px"}} src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/drow_ranger.png?`} alt=""/>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>
        </div>
    )
}

export default Home