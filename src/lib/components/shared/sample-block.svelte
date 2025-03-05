<script lang="ts">
	import Waveform from './waveform.svelte';
	import Download from 'lucide-svelte/icons/download';
	import Ear from 'lucide-svelte/icons/ear';
	import { Button } from '../ui/button';

	import type { SampleWithAudioSignedUrlAndLikes } from '$lib/types/sample';
	import { onMount } from 'svelte';

	let { sample }: { sample: SampleWithAudioSignedUrlAndLikes } = $props();

	onMount(() => {
		console.log(sample);
	});
</script>

<article class="hover:bg-secondary/30 flex items-center justify-between rounded-md p-1 transition">
	<Waveform {sample} />
	<div class="flex items-center gap-x-12 text-sm font-medium">
		<p>{sample.name}</p>
		<p title={sample.downloads + ' прослушиваний'} class="text-muted-foreground flex items-center">
			<Ear class="size-4" />
			{sample.downloads}
		</p>
		<div class="flex items-center">
			{#each sample.tags as tag}
				<p class="bg-secondary rounded-full px-2 py-0.5">#{tag}</p>
			{/each}
		</div>
	</div>
	<Button size="icon" variant="ghost">
		<Download class="size-4" />
	</Button>
</article>
