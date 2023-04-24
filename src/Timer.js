import React from "react";

export default function Timer(props) {
    const [seconds,setseconds] = React.useState(0);
    const [minutes,setminutes] = React.useState(0);
    // var timer;

    const [Bestscore,setbestscore] = React.useState({
        mins: localStorage.getItem("Mins") || null,
        secs: localStorage.getItem("Secs") || null
    })

    React.useEffect(()=> {

        var timer;

        timer = setInterval(()=>{
            setseconds(prevSec => prevSec + 1);

            if(seconds === 59){
                setminutes(prevMin => prevMin +1);
                setseconds(0);
            }

         },1000)
     

         if(props.won === true){
            clearInterval(timer);
            
        }


      return () => {
        clearInterval(timer);
      }

    })

    React.useEffect(() => {
       if(props.reset === true  ) {
        setminutes(0);
        setseconds(0);
       }
      },[props.reset]);
      
    

    React.useEffect(()=>{
        if(props.won === true){

            if(Bestscore.mins === null && Bestscore.secs === null) 
            {
                setbestscore({mins : minutes, secs: seconds})
                localStorage.setItem("Mins", minutes);
                localStorage.setItem("Secs", seconds)

            }else {
                if(minutes < Bestscore.mins || (minutes === Bestscore.mins && seconds < Bestscore.secs)){
                    setbestscore({mins:minutes , secs:seconds});
                    localStorage.setItem("Mins",minutes);
                    localStorage.setItem("Secs", seconds);
                }

            }

        }

    },[props.won, minutes, seconds, Bestscore.mins, Bestscore.secs])  

    return(
        <>
        <div className="time-dad">
            <div className="time_container">
                <p>{minutes < 10 ? "0"+minutes : minutes} : {seconds < 10 ? "0"+seconds : seconds }</p>
                {/* <p>"  "</p> */}
                {/* <p> 10</p> */}
            </div>


          
        </div>
        <div className="best_score">
            <p className="best_score_child">Best score <span>{Bestscore.mins === null ? "00" : Bestscore.mins < 10 ? "0"+Bestscore.mins : Bestscore.mins} : {Bestscore.secs === null ? "00" : Bestscore.secs < 10 ? "0"+Bestscore.secs : Bestscore.secs}</span></p>
          </div>
        </>
    )
}









// seconds < Bestscore.secs ? () => {setbestscore(seconds); localStorage.setItem("Secs", seconds) } : null;

// minutes < Bestscore.mins ? ()=>{ setbestscore(minutes) ;
// localStorage.setItem("Mins", minutes);}: null;