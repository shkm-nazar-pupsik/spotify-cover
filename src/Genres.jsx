import './App.css'

const genres = [
    { title: 'Heavy', count: '160 Tracks', accent: 'gr1' },
    { title: 'Grunge', count: '140 Tracks', accent: 'gr3' },
    { title: 'Thrash', count: '180 Tracks', accent: 'gr4' },
]

export default function Genres() {
    return (
        <section className="genres-section card-panel">
            <div className="section-header">
                <span className="section-label">Discover Genre</span>
                <button className="pill-button">Show More</button>
            </div>
            <div className="genre-grid">
                {genres.map((genre) => (
                    <article key={genre.title} className={`genre-card genre-${genre.accent}`}>
                        <div className="genre-title">{genre.title}</div>
                        <div className="genre-count">{genre.count}</div>
                        <button className="genre-action">▶</button>
                    </article>
                ))}
            </div>
        </section>
    )
}
