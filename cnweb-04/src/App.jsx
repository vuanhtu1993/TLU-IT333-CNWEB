import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './components/UserProfile'

function App() {

  return (
    <>
      <UserProfile
        image="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
        name="player1"
        active={false} />

      <UserProfile
        image="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
        name="player2"
        active={true} />
    </>
  )
}

// Component 
// Function


export default App
