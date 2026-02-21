import React from "react";
function KitapListe({kitaplar}) {
   const {kad,kyazar,kpage,ktype,kid}=kitaplar
      return (
      <>
      {kitaplar?.map(function(k){
        return<div key={k.kid} {...k}></div>
      })}
      </>
    )
   };