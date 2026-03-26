<script>
  let { clue = '', attempt = 1 } = $props()
</script>

<div class="bg-white rounded-2xl shadow-lg p-6 mb-6">
  <div class="flex items-center justify-between mb-4">
    <span class="text-sm font-semibold text-gray-400 uppercase tracking-widest">
      Clue #{attempt}
    </span>
    <span class="bg-indigo-100 text-indigo-600 text-xs font-bold px-3 py-1 rounded-full">
      {5 - attempt + 1} clues left
    </span>
  </div>

  {#if clue}
    <p class="text-gray-700 text-lg leading-relaxed">{clue}</p>
  {:else}
    <p class="text-gray-300 italic">Loading clue...</p>
  {/if}
</div>