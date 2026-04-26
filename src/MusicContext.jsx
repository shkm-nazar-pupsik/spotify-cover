import { createContext, useState, useCallback } from 'react'

export const MusicContext = createContext()

export function MusicProvider({ children }) {
    const [currentTrack, setCurrentTrack] = useState(null)
    const [queue, setQueue] = useState([])
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

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

    return (
        <MusicContext.Provider
            value={{
                currentTrack,
                queue,
                isPlaying,
                currentIndex,
                playTrack,
                playNext,
                playPrevious,
                setPlayingState,
                setCurrentTrack,
                setQueue,
                setCurrentIndex,
            }}
        >
            {children}
        </MusicContext.Provider>
    )
}
