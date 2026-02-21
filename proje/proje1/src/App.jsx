import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Yeni from './yeni'
import İkinciyeni from './ikinciyeni'
import Liste from './Liste'

function App(props) {

  
    const[ad,Setad]  =useState("");

const yazilistesi=[{
     baslik:"dersler",
     konu:"berra",
     id:"1"
    },
    {
     baslik:"derslerimiz",
     konu:"berk",
     id:"2"
    }]

    
    const arananyazılar=yazilistesi.filter(function(yazi){
     return yazi.baslik.toLowerCase().includes(ad.toLowerCase())
    })

    const handleChange = (event) => {
        
        Setad(event.target.value);
     }

  return (
    <>
   <div>
    <İkinciyeni></İkinciyeni>
    <Yeni ad={ad} handleChange={handleChange}/>
    <Liste yazilar={arananyazılar}></Liste>
   </div>


    </>
  )
}

export default App
