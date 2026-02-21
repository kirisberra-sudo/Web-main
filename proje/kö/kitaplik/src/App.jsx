import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import aramaCubugu from './AramaCubugu.jsx'

function App() {
const kitaplar=[
  {
    kad:"Suç ve Ceza",
    kyazar:"Dostoyevski",
    kpage: 671,
    ktype:"Roman",
    kid:1

  },
  {
    kad:"la fonteine masalları",
    kyazar:"Jean de la Fonteine",
    kpage: 256,
    ktype:"fabl",
    kid:2   
  },
  {
    kad:"Ben sana mecburum",
    kyazar:"Attilâ İlhan",
    kpage: 136,
    ktype:"şiir",
    kid:3
  },
  {
    kad:"sevda sözleri",
    kyazar:" Cemal Süreya",     
    kpage: 120,
    ktype:"şiir",
    kid:4
  },
  {
    kad:"çalıkuşu",
    kyazar:"Reşat Nuri Güntekin",
    kpage: 416,
    ktype:"Roman",
    kid:5
  }]
 const [AramaMetni,setAramaMetni]=useState("");
 const handleChange=(event)=>{
        setAramaMetni(event.target.value);
    }

    const [Kategori,getKategori]=useState("");
    const OnKategoriChange=(event)=>{
          getKategori(event.target.value);
    }

  return (
    <>
    
      <aramaCubugu></aramaCubugu>
    </>
  )
}

export default App
