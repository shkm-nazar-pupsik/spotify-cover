import { useState, useEffect } from 'react'
import './App.css'

const genresData = [
    { title: 'all', count: 'All Tracks', accent: 'all' },
    { title: 'Thrash Metal', count: '160 Tracks', accent: 'gr1' },
    { title: 'Groove Metal', count: '140 Tracks', accent: 'gr3' },
    { title: 'Heavy Metal', count: '180 Tracks', accent: 'gr4' },
    { title: 'Grunge', count: '120 Tracks', accent: 'gr2' },
]

export default function Genres({ onGenreSelect }) {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 780)

    // Слідкуємо за розміром екрана
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 780)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Визначаємо ліміт: 2 для мобілок, 3 для ПК
    const limit = isMobile ? 2 : 3
    const visibleGenres = isExpanded ? genresData : genresData.slice(0, limit)

    return (
        <section className="genres-section card-panel">
            <div className="section-header">
                <span className="section-label">Discover Genre</span>
                
                {genresData.length > limit && (
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
                        onClick={() => onGenreSelect && onGenreSelect(genre.title)} 
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