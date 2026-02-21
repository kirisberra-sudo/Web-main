import React, { useEffect, useState } from "react"
function yeni(props){

  const [sayi , setSayi] = useState(0);
  

    const arttır = () => {
    setSayi(sayi+1);
    }
    
    const azalt = () => {
        if(sayi>0)
        setSayi(sayi-1);
    }
    
    const resetle = () => {
        setSayi(0);
    }

    

    useEffect(()=>{
        console.log("Sayı değeri değişti: ", sayi);
    },[sayi])

    
    

    return(
        <>
        <div>{sayi}</div>
        <div><button onClick={azalt}>azalt</button></div>
        <div><button onClick={arttır}>arttır</button></div>
        <div><button onClick={resetle}>resetle</button></div>
        <input id="arama" type="text" onChange={props.handleChange} />
        <hr></hr>
        <label>{props.ad}</label>

       
        </>
    )
    
}
export default yeni