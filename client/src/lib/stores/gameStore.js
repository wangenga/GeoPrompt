import { writable } from "svelte/store";

export const gameStore = writable({
    clue: '',
    city: '',
    attempt: 1,
    score: 0,
    gameOver: false,
    won: false,
    loading: false,
    error: null
})

export function resetGame() {
    gameStore.set({
        clue: '',
        city: '',
        attempt: 1,
        score: 0,
        gameOver: false,
        won: false,
        loading: false,
        error: null
    })
}