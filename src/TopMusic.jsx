import './App.css'
import { allTracks } from './data/traks.js'
import { useContext } from 'react'
import { MusicContext } from './MusicContext'

export default function TopMusic({ currentGenre, onGenreSelect }) {
    const { currentTrack, isPlaying, playTrack } = useContext(MusicContext)

    const filteredTracks = allTracks.filter((track) => {
        if (currentGenre === 'all') return true
        return track.genre?.toLowerCase() === currentGenre.toLowerCase()
    })

    const topTracks = filteredTracks.map((track, index) => ({
        ...track,
        number: (index + 1).toString().padStart(2, '0'),
        duration: '04:20',
        active: currentTrack?.id === track.id
    }))

    return (
        <section className="top-music-section card-panel">
            <div className="section-header">
                <span className="section-label">Top Music</span>
                {currentGenre !== 'all' && (
                    <button
                        className="pill-button transparent"
                        onClick={() => onGenreSelect('all')}
                    >
                        ← Back to All
                    </button>
                )}
                <button className="pill-button transparent">Show More</button>
            </div>
            <div className="track-list">
                {topTracks.map((track) => (
                    <div
                        key={track.id}
                        className={`track-row ${track.active ? 'active-track' : ''}`}
                    >
                        <div className="track-index">{track.number}</div>
                        <div className="track-meta">
                            <strong>{track.title}</strong>
                            <span>{track.artist}</span>
                        </div>
                        <div className="track-duration">{track.duration}</div>
                        <button className="track-action" onClick={() => playTrack(track, filteredTracks)}>
                            <svg className="track-icon" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    d={track.active && isPlaying ?
                                        'M6 19h4V5H6v14zm8-14v14h4V5h-4z'
                                        : 'M8 5v14l11-7z'}
                                />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}