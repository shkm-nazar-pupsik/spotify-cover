import './App.css'

const genres = [
    { title: 'Thrash Metal', count: '160 Tracks', accent: 'gr1' },
    { title: 'Groove Metal', count: '140 Tracks', accent: 'gr3' },
    { title: 'Heavy Metal', count: '180 Tracks', accent: 'gr4' },
]

export default function Genres({ onGenreSelect }) {
    return (
        <section className="genres-section card-panel">
            <div className="section-header">
                <span className="section-label">Discover Genre</span>
                <button className="pill-button">Show More</button>
            </div>
            <div className="genre-grid">
                {genres.map((genre) => (
                    <article key={genre.title} 
                    className={`genre-card genre-${genre.accent}`}
                    onClick={() => onGenreSelect(genre.title)} 
            style={{ cursor: 'pointer' }}>
                        <div className="genre-title">{genre.title}</div>
                        <div className="genre-count">{genre.count}</div>
                        <button className="genre-action">▶</button>
                    </article>
                ))}
            </div>
        </section>
    )
}
