import React from "react";

function AramaCubugu({AramaMetni,handleChange}) {

   

    return(
        <>
        <label> ara:</label>
        <input type="text" placeholder="arama yapınız..." value={AramaMetni} onChange={handleChange}/>    
        </>
    )
}
export default AramaCubugu;