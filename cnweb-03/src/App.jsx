import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './components/userProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserProfile />
    </>
  )
}

// 16.8 React hook
// Component

export default App
