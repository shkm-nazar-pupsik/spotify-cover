import './App.css'
import { useContext } from 'react'
import { MusicContext } from './MusicContext'

export default function Favorites() {
    const { currentTrack, isPlaying, playTrack, favorites, toggleFavorite } = useContext(MusicContext)

    const favoriteTracks = favorites.map((track, index) => ({
        ...track,
        number: (index + 1).toString().padStart(2, '0'),
        duration: track.duration || '0:00',
        active: currentTrack?.id === track.id
    }))

    return (
        <section className="top-music-section card-panel">
            <div className="section-header">
                <span className="section-label">Favorites</span>
            </div>
            <div className="track-list">
                {favoriteTracks.length === 0 ? (
                    <p>No favorites yet. Add some tracks to your favorites!</p>
                ) : (
                    favoriteTracks.map((track) => (
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
                            <button className="track-action" onClick={() => playTrack(track, favorites)}>
                                <svg className="track-icon" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        d={track.active && isPlaying ?
                                            'M6 19h4V5H6v14zm8-14v14h4V5h-4z'
                                            : 'M8 5v14l11-7z'}
                                    />
                                </svg>
                            </button>
                            <button className="track-action" onClick={() => toggleFavorite(track)}>
                                <svg className="track-icon filled" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                </svg>
                            </button>
                        </div>
                    ))
                )}
            </div>
        </section>
    )
}
