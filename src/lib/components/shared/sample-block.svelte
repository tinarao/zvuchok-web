<script lang="ts">
	import { Button } from '../ui/button';
	import Waveform from './waveform.svelte';
	import Play from 'lucide-svelte/icons/play';

	let { sample }: { sample: Sample } = $props();
</script>

<div class="flex items-center justify-between border p-2">
	<div class="flex h-8 items-center gap-2">
		<Button variant="ghost" size="icon">
			<Play />
		</Button>
		<Waveform {sample} />
	</div>
	<h6>
		{sample.name}
	</h6>
	<div>
		{#each sample.genres as genres}
			<span>{genres}</span>
		{/each}
	</div>
</div>
