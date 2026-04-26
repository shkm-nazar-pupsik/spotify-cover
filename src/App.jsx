import './App.css'
import Navigation from './nav'
import SearchPanel from './SearchPanel'
import Genres from './Genres'
import TopMusic from './TopMusic'
import { PlayerBar } from './PlayerBar'
import { MusicProvider } from './MusicContext'

function App() {
  const [selectedGenre,setSelectedGenre]=useState("all")
  return (
    <MusicProvider>
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
    </MusicProvider>
  )
}

export default App
