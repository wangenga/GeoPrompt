<script>
  let { onGuess, loading = false } = $props()

  let guess = $state('')

  function handleSubmit() {
    if (guess.trim() === '') return
    onGuess(guess)
    guess = ''
  }

  function handleKeydown(e) {
    if (e.key === 'Enter') handleSubmit()
  }
</script>

<div class="flex gap-3 mb-6">
  <input
    type="text"
    bind:value={guess}
    onkeydown={handleKeydown}
    placeholder="Type your guess..."
    disabled={loading}
    class="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-gray-700 
           focus:outline-none focus:ring-2 focus:ring-indigo-400 
           disabled:opacity-50 disabled:cursor-not-allowed"
  />
  <button
    onclick={handleSubmit}
    disabled={loading || guess.trim() === ''}
    class="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold 
           px-6 py-3 rounded-xl transition-colors duration-200
           disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {loading ? 'Checking...' : 'Guess'}
  </button>
</div>