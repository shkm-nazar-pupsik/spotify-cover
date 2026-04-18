import './App.css'
import { allTracks } from './data/traks.js'
import { useState, useRef } from 'react'

export default function TopMusic() {
    const [currentTrack, setCurrentTrack] = useState(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef(null)

    const playTrack = (track) => {
        const trackPath = track.track.replace('../public', '')
        if (currentTrack?.id === track.id) {
            // Same track, toggle play/pause
            if (isPlaying) {
                audioRef.current.pause()
                setIsPlaying(false)
            } else {
                audioRef.current.play()
                setIsPlaying(true)
            }
        } else {
            // Different track
            setCurrentTrack(track)
            setIsPlaying(true)
            if (audioRef.current) {
                audioRef.current.src = trackPath
                audioRef.current.play()
            }
        }
    }

    const topTracks = allTracks.map((track, index) => ({
        ...track,
        number: (index + 1).toString().padStart(2, '0'),
        duration: '04:20', // Placeholder duration
        active: currentTrack?.id === track.id
    }));

    return (
        <>
            <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />
            <section className="top-music-section card-panel">
                <div className="section-header">
                    <span className="section-label">Top Music</span>
                    <button className="pill-button transparent">Show More</button>
                </div>
                <div className="track-list">
                    {topTracks.map((track) => (
                        <div key={track.id} className={`track-row ${track.active ? 'active-track' : ''}`}>
                            <div className="track-index">{track.number}</div>
                            <div className="track-meta">
                                <strong>{track.title}</strong>
                                <span>{track.artist}</span>
                            </div>
                            <div className="track-duration">{track.duration}</div>
                            <button className="track-action" onClick={() => playTrack(track)}>
                                <svg className="track-icon" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d={track.active && isPlaying ? "M6 19h4V5H6v14zm8-14v14h4V5h-4z" : "M8 5v14l11-7z"} />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
