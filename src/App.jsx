import './App.css'
import { useState, useEffect } from 'react'
import Navigation from './nav'
import SearchPanel from './SearchPanel'
import Genres from './Genres'
import TopMusic from './TopMusic'
import { PlayerBar } from './PlayerBar'
import { MusicProvider } from './MusicContext'

function App() {
  const [selectedGenre, setSelectedGenre] = useState(() => {
    return localStorage.getItem('selectedGenre') || 'all'
  })

  useEffect(() => {
    localStorage.setItem('selectedGenre', selectedGenre)
  }, [selectedGenre])
  
  return (
    <MusicProvider>
      <>
        <div className="app">
          <Navigation />
          <main className="content">
            <SearchPanel />
            <Genres onGenreSelect={setSelectedGenre}/>
            <TopMusic 
              currentGenre={selectedGenre} 
              onGenreSelect={setSelectedGenre}
            />
          </main>
        </div>
        <div className="player-bar">
          <PlayerBar />
        </div>
      </>
    </MusicProvider>
  )
}

export default App
