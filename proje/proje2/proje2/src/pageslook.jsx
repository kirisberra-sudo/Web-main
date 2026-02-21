import React from "react";

function pageslook({sayfa}){
 const {name,monkey_id,image,websitelink}=sayfa

 return(
    <>
    <div className="sayfalar">
        <h2>{name}</h2><hr></hr>
        <img src={image} width={250} height={150}></img><br></br>
        <a href={websitelink}>video için tıklayınız</a>
    </div>
    </>
 )

}
export default pageslook