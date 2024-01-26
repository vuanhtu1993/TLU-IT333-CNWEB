import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './components/userProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserProfile
        image="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
        name="Player 1"
        active={true} />
      <UserProfile
        image="https://cdn-icons-png.flaticon.com/512/147/147140.png"
        name="Player 2"
        active={false} />
    </>
  )
}

// 16.8 React hook
// Component

export default App
