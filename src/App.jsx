import { useState } from 'react'
import Dock from './components/Dock'
import Nav from './components/Nav'
import './App.scss'
import MacWindow from './Windows/MacWindow'
import Note from './Windows/Note'

function App() {
  

  return (
   <main>
    <Nav/>
    <MacWindow/>
    <Note/>
    <Dock/>

   </main>
  )
}

export default App
