import './App.css'
import Navigation from './nav'
import SearchPanel from './SearchPanel'
import Genres from './Genres'
import TopMusic from './TopMusic'
import { PlayerBar } from './PlayerBar'

function App() {
  return (
    <>
      <div className="app">
        <Navigation />
        <main className="content">
          <SearchPanel />
          <Genres />
          <TopMusic />
        </main>
      </div>
      <div className="player-bar">
        <PlayerBar />
      </div>
    </>
  )
}

export default App
