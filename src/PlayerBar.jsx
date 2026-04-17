import './App.css'

export function PlayerBar() {
    return (
        <div className="player-bar">
            <div className="player">
                <div className="player-left">
                    <img src="cover.jpg" alt="cover" className="cover" />

                    <div className="track-info">
                        <div className="title">Memories</div>
                        <div className="artist">Maroon 5</div>
                    </div>
                </div>

                <div className="player-center">
                    <div className="controls">
                        <button className="btn">
                            <svg className="icon-svg" viewBox="0 0 24 24">
                                <path d="M4 5v14M20 5l-10 7 10 7V5z" />
                            </svg>
                        </button>
                        <button className="btn">
                            <svg className="icon-svg" viewBox="0 0 24 24">
                                <path d="M11 19l-7-7 7-7v14zM21 19l-7-7 7-7v14z" />
                            </svg>
                        </button>
                        <button className="btn play">
                            <svg className="icon-svg icon-play" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </button>
                        <button className="btn">
                            <svg className="icon-svg" viewBox="0 0 24 24">
                                <path d="M13 5l7 7-7 7V5zM3 5l7 7-7 7V5z" />
                            </svg>
                        </button>
                        <button className="btn">
                            <svg className="icon-svg" viewBox="0 0 24 24">
                                <path d="M20 5v14M4 5l10 7-10 7V5z" />
                            </svg>
                        </button>
                    </div>

                    <div className="progress-wrapper">
                        <span className="time">02:10</span>

                        <div className="progress">
                            <div className="progress-filled"></div>
                        </div>

                        <span className="time">03:10</span>
                    </div>
                </div>

                <div className="player-right">
                    <button className="icon">
                        <svg className="icon-svg" viewBox="0 0 24 24">
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                            <path d="M15.54 8.46a6 6 0 0 1 0 8.48M18.5 4.5a10 10 0 0 1 0 15" />
                        </svg>
                    </button>

                    <div className="volume">
                        <div className="volume-filled"></div>
                    </div>

                    <button className="icon">
                        <svg className="icon-svg" viewBox="0 0 24 24">
                            <path d="M17 2l4 4-4 4M7 22l-4-4 4-4M7 8h10a4 4 0 0 1 4 4v4M17 16H7a4 4 0 0 1-4-4v-4" />
                        </svg>
                    </button>
                    <button className="icon">
                        <svg className="icon-svg" viewBox="0 0 24 24">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                    </button>
                    <button className="icon">
                        <svg className="icon-svg" viewBox="0 0 24 24">
                            <circle cx="18" cy="5" r="3" />
                            <circle cx="6" cy="12" r="3" />
                            <circle cx="18" cy="19" r="3" />
                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}