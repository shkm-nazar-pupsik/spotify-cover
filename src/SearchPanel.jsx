import './App.css'

export default function SearchPanel() {
    return (
        <section className="search-panel card-panel">
            <div className="search-input-wrap">
                <svg className="search-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="10" cy="10" r="6" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
                <input type="text" placeholder="Search music, artist, genre" />
            </div>
            <p className="search-hint">Find tracks, playlists and genres in one place.</p>
        </section>
    )
}
