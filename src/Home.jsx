import './App.css'
import { useState, useEffect } from 'react'
import SearchPanel from './SearchPanel'
import Genres from './Genres'
import TopMusic from './TopMusic'

export default function Home() {
    const [selectedGenre, setSelectedGenre] = useState(() => {
        return localStorage.getItem('selectedGenre') || 'all'
    })

    useEffect(() => {
        localStorage.setItem('selectedGenre', selectedGenre)
    }, [selectedGenre])

    return (
        <main className="content">
            <SearchPanel />
            <Genres onGenreSelect={setSelectedGenre}/>
            <TopMusic
                currentGenre={selectedGenre}
                onGenreSelect={setSelectedGenre}
            />
        </main>
    )
}