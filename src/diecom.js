import React from "react";


export default function Diecom(props) {
    const Style = {
        backgroundColor: props.isheld ? "#59E391": "white",
        cursor:"pointer"
    }
    return(
        <div className="die" style={Style} onClick={() => props.tohold(props.ID)}>
        <h5>{props.value}</h5>

        </div>
        )
}