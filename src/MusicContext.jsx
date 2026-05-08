import { createContext, useState, useCallback, useEffect } from 'react'

export const MusicContext = createContext()

export function MusicProvider({ children }) {
    const [currentTrack, setCurrentTrack] = useState(null)
    const [queue, setQueue] = useState([])
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [favorites, setFavorites] = useState(() => {
        const saved = sessionStorage.getItem('favorites')
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        sessionStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const playTrack = useCallback((track, allTracks = []) => {
        setCurrentTrack(track)
        setCurrentIndex(allTracks.findIndex(t => t.id === track.id))
        setQueue(allTracks)
        setIsPlaying(true)
    }, [])

    const playNext = useCallback(() => {
        if (queue.length > 0 && currentIndex < queue.length - 1) {
            const nextIndex = currentIndex + 1
            setCurrentIndex(nextIndex)
            setCurrentTrack(queue[nextIndex])
            setIsPlaying(true)
        }
    }, [queue, currentIndex])

    const playPrevious = useCallback(() => {
        if (queue.length > 0 && currentIndex > 0) {
            const prevIndex = currentIndex - 1
            setCurrentIndex(prevIndex)
            setCurrentTrack(queue[prevIndex])
            setIsPlaying(true)
        }
    }, [queue, currentIndex])

    const setPlayingState = useCallback((state) => {
        setIsPlaying(state)
    }, [])

    const toggleFavorite = useCallback((track) => {
        setFavorites(prev => {
            const isFav = prev.some(fav => fav.id === track.id)
            if (isFav) {
                return prev.filter(fav => fav.id !== track.id)
            } else {
                return [...prev, track]
            }
        })
    }, [])

    const isFavorite = useCallback((trackId) => {
        return favorites.some(fav => fav.id === trackId)
    }, [favorites])

    return (
        <MusicContext.Provider
            value={{
                currentTrack,
                queue,
                isPlaying,
                currentIndex,
                favorites,
                playTrack,
                playNext,
                playPrevious,
                setPlayingState,
                setCurrentTrack,
                setQueue,
                setCurrentIndex,
                toggleFavorite,
                isFavorite,
            }}
        >
            {children}
        </MusicContext.Provider>
    )
}

