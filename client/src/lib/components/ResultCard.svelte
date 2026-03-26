<script>
  import { toPng } from 'html-to-image'

  let { won = false, city = '', attempt = 1, score = 0, onReplay } = $props()

  let cardRef = $state(null)

  async function shareResult() {
    if (!cardRef) return
    const dataUrl = await toPng(cardRef)
    const link = document.createElement('a')
    link.download = 'geoprompt-result.png'
    link.href = dataUrl
    link.click()
  }
</script>

<div bind:this={cardRef} class="bg-white rounded-2xl shadow-lg p-8 text-center mb-6">
  <p class="text-5xl mb-4">{won ? '🎉' : '😢'}</p>
  <h2 class="text-2xl font-bold text-gray-800 mb-2">
    {won ? 'You got it!' : 'Better luck next time!'}
  </h2>
  <p class="text-gray-500 mb-1">The city was <span class="font-bold text-indigo-500">{city}</span></p>
  <p class="text-gray-400 text-sm mb-6">
    {won ? `Guessed in ${attempt} attempt${attempt > 1 ? 's' : ''}` : 'Out of clues'}
    · Score: {score}
  </p>

  <div class="flex gap-3 justify-center">
    <button
      onclick={shareResult}
      class="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
    >
      📸 Save Result
    </button>
    <button
      onclick={onReplay}
      class="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
    >
      🔄 Play Again
    </button>
  </div>
</div>