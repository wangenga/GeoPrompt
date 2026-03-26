<script>
  let { attempt = 1, score = 0 } = $props()
</script>

<div class="flex items-center justify-between mb-6">
  <div class="bg-white rounded-xl shadow px-5 py-3 text-center">
    <p class="text-xs text-gray-400 uppercase tracking-widest mb-1">Attempt</p>
    <p class="text-2xl font-bold text-indigo-500">{attempt} <span class="text-gray-300 text-lg">/ 5</span></p>
  </div>

  <div class="bg-white rounded-xl shadow px-5 py-3 text-center">
    <p class="text-xs text-gray-400 uppercase tracking-widest mb-1">Score</p>
    <p class="text-2xl font-bold text-indigo-500">{score}</p>
  </div>
</div>