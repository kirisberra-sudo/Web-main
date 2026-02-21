import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import {monkey_pages} from './pages'
import Pageslook from './pageslook'

function App() {
 

  return (
    <>
    
    <div>{monkey_pages?.map(function(monkey){
      return < Pageslook key={monkey.monkey_id} sayfa={monkey}/>
    })}
    </div>
    
    
    </>
  )
}   

export default App
