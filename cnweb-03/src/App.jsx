import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './components/userProfile'

function App() {
  // Lift up state
  const [currentPlayer, setCurrentPlayer] = useState(1) // State
  const changeCurrentPlayer = function () {
    if (currentPlayer == 1) {
      setCurrentPlayer(2)
    } else {
      setCurrentPlayer(1)
    }
  }
  return (
    <>
      <div style={{ display: 'flex', gap: 30 }}>
        {/* Player 1 */}
        <UserProfile
          image="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
          name="Player 1"
          active={currentPlayer == 1} />
        {/* Player 2 */}
        <UserProfile
          image="https://cdn-icons-png.flaticon.com/512/147/147140.png"
          name="Player 2"
          active={currentPlayer == 2} />
      </div>


      <button onClick={changeCurrentPlayer}>Change player</button>
    </>
  )
}

// 16.8 React hook
// Component

export default App
