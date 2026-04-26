import './App.css'
import { useState, useRef, useEffect, useContext } from 'react'
import { MusicContext } from './MusicContext'

export function PlayerBar() {
    const { 
        currentTrack, 
        queue, 
        isPlaying, 
        currentIndex, 
        playNext, 
        playPrevious, 
        setPlayingState 
    } = useContext(MusicContext)
    
    const [localIsPlaying, setLocalIsPlaying] = useState(isPlaying)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [volume, setVolume] = useState(0.7)
    const [queueMode, setQueueMode] = useState('sequential') // 'sequential' or 'repeat'
    const [shuffleMode, setShuffleMode] = useState(false)
    const audioRef = useRef(null)

    // Sync local playing state with context
    useEffect(() => {
        setLocalIsPlaying(isPlaying)
    }, [isPlaying])

    // Update audio element when track changes
    useEffect(() => {
        if (currentTrack && audioRef.current) {
            const trackPath = currentTrack.track.replace('../public', '')
            audioRef.current.src = trackPath
            if (isPlaying) {
                audioRef.current.play()
                setLocalIsPlaying(true)
            }
        }
    }, [currentTrack])

    // Spacebar play/pause
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.code === 'Space' && currentTrack) {
                e.preventDefault()
                handlePlayPause()
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [localIsPlaying, currentTrack])

    // Format time in MM:SS
    const formatTime = (time) => {
        if (isNaN(time)) return '0:00'
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    }

    // Play/Pause handler
    const handlePlayPause = () => {
        if (audioRef.current) {
            if (localIsPlaying) {
                audioRef.current.pause()
                setLocalIsPlaying(false)
                setPlayingState(false)
            } else {
                audioRef.current.play()
                setLocalIsPlaying(true)
                setPlayingState(true)
            }
        }
    }

    // Update time
    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime)
        }
    }

    // Song ended handler
    const handleEnded = () => {
        if (queueMode === 'repeat' && audioRef.current) {
            audioRef.current.currentTime = 0
            audioRef.current.play()
        } else if (currentIndex < queue.length - 1) {
            playNext()
        } else {
            setLocalIsPlaying(false)
            setPlayingState(false)
        }
    }

    // Set duration
    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration)
        }
    }

    // Seek handler
    const handleSeek = (e) => {
        const progressBar = e.currentTarget
        const rect = progressBar.getBoundingClientRect()
        const percent = (e.clientX - rect.left) / rect.width
        const newTime = percent * duration

        if (audioRef.current) {
            audioRef.current.currentTime = newTime
            setCurrentTime(newTime)
        }
    }

    // Volume handler
    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value)
        setVolume(newVolume)
        if (audioRef.current) {
            audioRef.current.volume = newVolume
        }
    }

    // Skip forward 10 seconds
    const skipForward = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = Math.min(audioRef.current.currentTime + 10, duration)
            setCurrentTime(audioRef.current.currentTime)
        }
    }

    // Skip backward 10 seconds
    const skipBackward = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = Math.max(audioRef.current.currentTime - 10, 0)
            setCurrentTime(audioRef.current.currentTime)
        }
    }

    // Toggle queue mode
    const handleQueueModeToggle = () => {
        setQueueMode(prev => prev === 'sequential' ? 'repeat' : 'sequential')
    }

    // Toggle shuffle mode
    const handleShuffleToggle = () => {
        setShuffleMode(prev => !prev)
    }

    // Next track
    const handleNext = () => {
        if (currentIndex < queue.length - 1) {
            playNext()
        }
    }

    // Previous track
    const handlePrevious = () => {
        if (currentIndex > 0) {
            playPrevious()
        }
    }

    // Calculate progress percentage
    const progressPercent = duration ? (currentTime / duration) * 100 : 0

    if (!currentTrack) {
        return (
            <div className="player-bar">
                <div className="player">
                    <div className="player-left">
                        <div className="cover" style={{ backgroundColor: '#333' }} />
                        <div className="track-info">
                            <div className="title">No track selected</div>
                            <div className="artist">Select a song to play</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="player-bar">
            <audio
                ref={audioRef}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={handleEnded}
                volume={volume}
            />
            
            <div className="player">
                <div className="player-left">
                    <img src={currentTrack.cover} alt="cover" className="cover" />

                    <div className="track-info">
                        <div className="title">{currentTrack.title}</div>
                        <div className="artist">{currentTrack.artist}</div>
                    </div>
                </div>

                <div className="player-center">
                    <div className="controls">
                        <button 
                            className="btn" 
                            onClick={handlePrevious}
                            disabled={currentIndex === 0}
                            title="Previous Track"
                        >
                            <svg className="icon-svg" viewBox="0 0 24 24">
                                <path d="M4 5v14M20 5l-10 7 10 7V5z" />
                            </svg>
                        </button>
                        <button 
                            className="btn" 
                            onClick={skipBackward}
                            title="Backward 10s"
                        >
                            <svg className="icon-svg" viewBox="0 0 24 24">
                                <path d="M11 19l-7-7 7-7v14zM21 19l-7-7 7-7v14z" />
                            </svg>
                        </button>
                        <button 
                            className="btn play" 
                            onClick={handlePlayPause}
                            title={localIsPlaying ? 'Pause (Space)' : 'Play (Space)'}
                        >
                            {localIsPlaying ? (
                                <svg className="icon-svg" viewBox="0 0 24 24">
                                    <rect x="6" y="4" width="4" height="16"></rect>
                                    <rect x="14" y="4" width="4" height="16"></rect>
                                </svg>
                            ) : (
                                <svg className="icon-svg icon-play" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            )}
                        </button>
                        <button 
                            className="btn" 
                            onClick={skipForward}
                            title="Forward 10s"
                        >
                            <svg className="icon-svg" viewBox="0 0 24 24">
                                <path d="M13 5l7 7-7 7V5zM3 5l7 7-7 7V5z" />
                            </svg>
                        </button>
                        <button 
                            className={`btn ${queueMode === 'repeat' ? 'active' : ''}`}
                            onClick={handleQueueModeToggle}
                            title={queueMode === 'sequential' ? 'Sequential mode' : 'Repeat mode'}
                        >
                            <svg className="icon-svg" viewBox="0 0 24 24">
                                {queueMode === 'repeat' ? (
                                    <g>
                                        <path d="M17 2l4 4-4 4M7 22l-4-4 4-4M7 8h10a4 4 0 0 1 4 4v4M17 16H7a4 4 0 0 1-4-4v-4" />
                                        <circle cx="12" cy="12" r="1" fill="currentColor" />
                                    </g>
                                ) : (
                                    <path d="M20 5v14M4 5l10 7-10 7V5z" />
                                )}
                            </svg>
                        </button>
                    </div>

                    <div className="progress-wrapper">
                        <span className="time">{formatTime(currentTime)}</span>

                        <div 
                            className="progress"
                            onClick={handleSeek}
                            style={{ cursor: 'pointer' }}
                        >
                            <div 
                                className="progress-filled"
                                style={{ width: `${progressPercent}%` }}
                            ></div>
                            <div 
                                className="progress-handle"
                                style={{ left: `${progressPercent}%` }}
                            ></div>
                        </div>

                        <span className="time">{formatTime(duration)}</span>
                    </div>
                </div>

                <div className="player-right">
                    <div className="volume-container">
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="volume-slider"
                            title="Volume"
                        />
                        <div 
                            className="volume"
                            style={{ width: `${volume * 100}%` }}
                        ></div>
                    </div>

                    <button
                        className={`icon ${shuffleMode ? 'active' : ''}`}
                        onClick={handleShuffleToggle}
                        title="Shuffle"
                    >
                        <svg className="icon-svg" viewBox="0 0 24 24">
                            <path d="M4 7h4.5l5 5 5-5H22v3l-3-3-5 5 5 5 3-3v3h-3.5l-5-5-5 5H4V7z" />
                        </svg>
                    </button>

                    <button
                        className={`icon ${queueMode === 'repeat' ? 'active' : ''}`}
                        onClick={handleQueueModeToggle}
                        title={queueMode === 'repeat' ? 'Repeat' : 'Sequential'}
                    >
                        <svg className="icon-svg" viewBox="0 0 24 24">
                            <path d="M17 1l4 4-4 4M21 5H7a4 4 0 0 0-4 4v3M7 19l-4-4 4-4M3 15h14a4 4 0 0 1 4 4v3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
