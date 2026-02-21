import React from "react";
//import { maymunlar } from "./maymunlar";


function Ekran({m1}){
  const {mad,myas,mid,mimg,mbilgi}=m1

if(!m1){
    return null;
}
    return(
    <>
    <div>
        <h2>maymun adı:{mad}  <br></br>yaş:{myas}</h2><hr></hr>
        <img src={mimg} width={300} height={300}></img><hr></hr>
        <p>hakkında:{mbilgi}</p><hr></hr>
    </div>



    </>
    )

}
export default Ekran;