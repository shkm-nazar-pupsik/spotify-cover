import './App.css'
import { useState, useEffect } from 'react'
import Navigation from './nav'
import SearchPanel from './SearchPanel'
import SearchResults from './SearchResults'
import Genres from './Genres'
import TopMusic from './TopMusic'
import { PlayerBar } from './PlayerBar'
import { MusicProvider } from './MusicContext'
import { allTracks } from './data/traks.js'

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState(() => {
    return localStorage.getItem('selectedGenre') || 'all'
  })

  const searchResultTracks = searchQuery.length > 0
    ? allTracks.filter(track =>
        track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        track.artist.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  useEffect(() => {
    localStorage.setItem('selectedGenre', selectedGenre)
  }, [selectedGenre])

  return (
    <MusicProvider>
      <div className="app">
        <Navigation />
        <main className="content">
          <div className="search-container">
            <SearchPanel onSearch={setSearchQuery} />
            {searchQuery && (
              <SearchResults 
                results={searchResultTracks} 
                clearSearch={setSearchQuery} 
              />
            )}
          </div>
          <Genres onGenreSelect={setSelectedGenre} />
          <TopMusic 
            currentGenre={selectedGenre} 
            onGenreSelect={setSelectedGenre} 
          />
        </main>
      </div>
      <div className="player-bar">
        <PlayerBar />
      </div>
    </MusicProvider>
  )
}

export default App