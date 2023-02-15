import nodeLogo from "./assets/node.svg"
import { useState } from 'react'
import './App.scss'
import Update from "./update"

console.log('[App.tsx]', `Hello world from Electron ${process.versions.electron}!`)

function App() {

  return (
    <div className="App">
      "version": "0.0.1",
      <Update></Update>
    </div>
  )
}

export default App
