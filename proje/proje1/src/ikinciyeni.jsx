import React from "react";

function ikinciyeni(props){
   const öğrencilistesi=[
    {isim:"berra",yaş:"20",bulunduğu_sınıf:"3",ogrid:"2321032029"},
    {isim:"betül",yaş:"22",bulunduğu_sınıf:"4",ogrid:"2321032028"},
    {isim:"eda",yaş:"20",bulunduğu_sınıf:"3",ogrid:"2321032027"}
   ]
    return(
        <>
        <div>
            {öğrencilistesi.map(function(ogr){
             return <ol key={ogr.ogrid}>
             <p>öğrenci adı: {ogr.isim}</p><hr></hr>
             <p>öğrenci yaşı: {ogr.yaş}</p><hr></hr>
             <p>öğrencinin bulunduğu sınıf: {ogr.bulunduğu_sınıf}</p><hr></hr>
             <p>öğrencinin idsi: {ogr.ogrid}</p><hr></hr></ol>
            })}
        </div>
        <div><hr></hr></div>
        
        
        
        </>
    )
}
export default ikinciyeni;