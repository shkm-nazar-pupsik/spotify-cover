import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './nav'
import Home from './Home'
import Favorites from './Favorites'
import { PlayerBar } from './PlayerBar'
import { MusicProvider } from './MusicContext'

function App() {
  return (
    <MusicProvider>
      <BrowserRouter>
        <div className="app">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
        <div className="player-bar">
          <PlayerBar />
        </div>
      </BrowserRouter>
    </MusicProvider>
  )
}

export default App
