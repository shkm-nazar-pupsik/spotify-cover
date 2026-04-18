import './App.css'

const tracks = [
    { number: '01', title: 'Memories', artist: 'Maroon 5', duration: '04.20', active: true },
    { number: '02', title: 'Anti Hero', artist: 'Taylor Swift', duration: '04.20' },
    { number: '03', title: 'Die For You', artist: 'The Weeknd', duration: '03.20' },
    { number: '04', title: 'Santa Tell Me', artist: 'Ariana Grande', duration: '02.20' },
    { number: '05', title: 'Last Christmas', artist: 'Wham!', duration: '04.00' },
]

export default function TopMusic() {
    return (
        <section className="top-music-section card-panel">
            <div className="section-header">
                <span className="section-label">Top Music</span>
                <button className="pill-button transparent">Show More</button>
            </div>
            <div className="track-list">
                {tracks.map((track) => (
                    <div key={track.number} className={`track-row ${track.active ? 'active-track' : ''}`}>
                        <div className="track-index">{track.number}</div>
                        <div className="track-meta">
                            <strong>{track.title}</strong>
                            <span>{track.artist}</span>
                        </div>
                        <div className="track-duration">{track.duration}</div>
                        <button className="track-action">
                            <svg className="track-icon" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}
