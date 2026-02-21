import { useState } from 'react'
import { maymunlar } from './maymunlar.jsx'
import Ekran from './Ekran.jsx'
import'./App.css'

function App() {
 

  return (
    <>
      {maymunlar?.map(function(maymun){
        return <Ekran  key={maymun.mid} m1={maymun}></Ekran>
      })}
    
    </>
  )
}

export default App
