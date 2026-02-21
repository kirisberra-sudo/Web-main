import React, { useState } from "react";

function AramaCubugu({type,OnKategoriChange}) { 
  
  return (
  <>
   <label>filtreye göre sec:</label>
   <select typeof="select" id="ktype" value={Kategori} onChange={OnKategoriChange}>
    <option value={şiir}>şiir</option>
    <option value={fabl}>fabl</option>
    <option value={roman}>Roman</option>
   </select>

  </>
  );
}   export default AramaCubugu;