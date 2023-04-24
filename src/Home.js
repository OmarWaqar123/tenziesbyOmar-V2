import React from "react";
import {Link} from "react-router-dom"
import "./Home.css";
import {details}  from "./gamedetails.js"

function Home() {
    React.useEffect(()=>{
      document.body.classList.add("home-body");

      return () =>{
        document.body.classList.remove("home-body")
      }
    },[])
    return(
        <main className="trying">
         <h1 className="tenzHead">{details.gameName}</h1>
         <p className="tenzPara">{details.gameDes}</p>
         <Link to="/tenziesGame" className="tenzPlay">Play</Link>
        </main>
    )
}

export default Home;