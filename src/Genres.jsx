import './App.css'
import { useState } from 'react' // Імпортуємо useState

const genres = [
    { title: 'all', count: 'All Tracks', accent: 'all' },
    { title: 'Thrash Metal', count: '160 Tracks', accent: 'gr1' },
    { title: 'Groove Metal', count: '140 Tracks', accent: 'gr3' },
    { title: 'Heavy Metal', count: '180 Tracks', accent: 'gr4' },
    { title: 'Grunge', count: '120 Tracks', accent: 'gr2' },
]

export default function Genres({ onGenreSelect }) {
    // Стан для контролю кількості карток
    const [isExpanded, setIsExpanded] = useState(false)

    // Визначаємо, які жанри показувати (спочатку тільки 3)
    const visibleGenres = isExpanded ? genres : genres.slice(0, 3)

    return (
        <section className="genres-section card-panel">
            <div className="section-header">
                <span className="section-label">Discover Genre</span>
                
                {/* Показуємо кнопку тільки якщо жанрів більше 3 */}
                {genres.length > 3 && (
                    <button 
                        className="pill-button" 
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? 'Show Less' : 'Show More'}
                    </button>
                )}
            </div>

            <div className="genre-grid">
                {visibleGenres.map((genre) => (
                    <article 
                        key={genre.title} 
                        className={`genre-card genre-${genre.accent}`}
                        onClick={() => onGenreSelect(genre.title)} 
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="genre-title">{genre.title}</div>
                        <div className="genre-count">{genre.count}</div>
                        <button className="genre-action">▶</button>
                    </article>
                ))}
            </div>
        </section>
    )
}