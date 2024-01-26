import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './components/UserProfile'
import Square from './components/Square'

function App() {
  const [currentPlayer, setCurrentPlayer] = useState(1) // State
  const changePlayer = function () {
    if (currentPlayer == 1) {
      setCurrentPlayer(2)
    } else {
      setCurrentPlayer(1)
    }
  }
  return (
    <>
      <div style={{ display: "flex", gap: 40 }}>
        <UserProfile
          image="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
          name="player1"
          active={currentPlayer == 1} />

        <UserProfile
          image="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
          name="player2"
          active={currentPlayer == 2} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 4 }}>
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
      <button onClick={changePlayer}>Change player</button>
    </>
  )
}

// Component 
// Function


export default App
