// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { Input } from 'postcss'
import { Header } from './components/Header'
import { Input } from './components/ui/input'
import { Home } from './components/Home'

function App() {
    return (
      <>
        <Header />
        <Input className="w-50" variant="outline" placeholder="Search..." />
        <Home />
      </>
    )
}

export default App
