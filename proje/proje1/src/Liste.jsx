import React from "react";

function Liste(props){


    return(
    <>
    <div>{props.yazilar.map(function(yazi){
        return <div key={yazi.id} yazi={yazi}> 
        
        </div>
    })}{""}</div>

    
    </>
    
    )
}

export default Liste