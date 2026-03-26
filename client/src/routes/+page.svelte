<script>
  import { gameStore, resetGame } from '$lib/stores/gameStore'
  import { onMount } from 'svelte';
  import ClueBox from '$lib/components/ClueBox.svelte'
  import GuessInput from '$lib/components/GuessInput.svelte'
  import ScoreBoard from '$lib/components/ScoreBoard.svelte'
  import ResultCard from '$lib/components/ResultCard.svelte'
  
  let highScore = $state(
    typeof localStorage !== 'undefined' 
    ? parseInt(localStorage.getItem('geoprompt_highscore') || '0') 
    : 0
)

    let state = $state({
        clue: '',
        city: '',
        attempt: 1,
        score: 0,
        gameOver: false,
        won: false,
        loading: false
    })

    async function fetchClue(attempt) {
        state.loading = true
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/clue`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ attempt })
        })
        const data = await res.json()
        state.clue = data.clue
        state.city = data.city
        state.loading = false
    }
    
    async function handleGuess(guess) {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/guess`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ guess, city: state.city })
        })
        const data = await res.json()

        if (data.correct) {
            state.score = Math.max(0, 6 - state.attempt)
            state.won = true
            state.gameOver = true
            if (state.score > highScore) {
            highScore = state.score
            localStorage.setItem('geoprompt_highscore', highScore)
}
        } else if (state.attempt >= 5) {
            state.gameOver = true
            state.won = false
        } else {
            state.attempt += 1
            await fetchClue(state.attempt)
        }
    }

    function handleReplay() {
        state = {
        clue: '',
        city: '',
        attempt: 1,
        score: 0,
        gameOver: false,
        won: false,
        loading: false
        }
        fetchClue(1)
    }

    onMount(() => {
        fetchClue(1)
    })
</script>

<main class="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-4">
  <div class="w-full max-w-lg">

    <div class="text-center mb-8">
      <h1 class="text-4xl font-extrabold text-indigo-600 mb-1">🌍 GeoPrompt</h1>
      <p class="text-gray-400 text-sm">Guess the mystery city from given clues</p>
      <p class="text-indigo-400 text-sm font-semibold mt-1">🏆 High Score: {highScore}</p>
    </div>

    {#if state.gameOver}
      <ResultCard
        won={state.won}
        city={state.city}
        attempt={state.attempt}
        score={state.score}
        onReplay={handleReplay}
      />
    {:else}
      <ScoreBoard attempt={state.attempt} score={state.score} />
      <ClueBox clue={state.clue} attempt={state.attempt} />
      <GuessInput onGuess={handleGuess} loading={state.loading} />
    {/if}

  </div>
</main>