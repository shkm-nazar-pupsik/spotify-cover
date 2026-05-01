import React, { useContext } from 'react'; // Додай { useContext } сюди
import { MusicContext } from './MusicContext';

export default function SearchResults({ results, clearSearch }) {
    const { playTrack } = useContext(MusicContext)

    if (results.length === 0) return null;

    return (
        <div className="search-results-dropdown card-panel">
            <div className="results-header">
                <span>Результати пошуку</span>
                <button className="close-btn" onClick={() => clearSearch("")}>✕</button>
            </div>
            <div className="results-list">
                {results.map((track) => (
                    <div 
                        key={track.id} 
                        className="result-item" 
                        onClick={() => {
                            playTrack(track, results);
                            clearSearch("");
                        }}
                    >
                        <div className="result-meta">
                            <strong className="result-title">{track.title}</strong>
                            <span className="result-artist"> — {track.artist}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}