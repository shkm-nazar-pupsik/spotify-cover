import './App.css'
import Navigation from './nav'
import SearchPanel from './SearchPanel'
import Genres from './Genres'
import TopMusic from './TopMusic'
import { PlayerBar } from './PlayerBar'
import { useState } from 'react'

function App() {
  const [selectedGenre,setSelectedGenre]=useState("all")
  return (
    <>
      <div className="app">
        <Navigation />
        <main className="content">
          <SearchPanel />
          <Genres onGenreSelect={setSelectedGenre}/>
          <TopMusic 
            currentGenre={selectedGenre} 
            onGenreSelect={setSelectedGenre} />
        </main>
      </div>
      <div className="player-bar">
        <PlayerBar />
      </div>
    </>
  )
}

export default App