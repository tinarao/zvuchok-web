<script lang="ts">
	import { Button } from '../ui/button';
	import WaveSurfer from 'wavesurfer.js';
	import Play from 'lucide-svelte/icons/play';
	import Pause from 'lucide-svelte/icons/pause';

	import { onMount } from 'svelte';
	import type { SampleWithAudioSignedUrl } from '$lib/types/sample';

	let container: HTMLDivElement;
	let wavesurfer = $state<WaveSurfer | null>(null);
	let isPlaying = $state(false);

	let { sample }: { sample: SampleWithAudioSignedUrl } = $props();

	onMount(() => {
		wavesurfer = WaveSurfer.create({
			container: container!,
			waveColor: 'green',
			progressColor: undefined,
			backend: 'WebAudio',
			barRadius: 2,
			cursorColor: undefined,
			cursorWidth: 0,
			barGap: 1,
			height: 'auto',
			barWidth: 5,
			peaks: [sample.peaks],
			url: sample.audioSignedUrl
		});

		return () => {
			wavesurfer?.destroy();
		};
	});
</script>

<svelte:head>
	<title>Лучшее - Звучок</title>
</svelte:head>

<div class="flex h-12 w-fit items-center gap-x-4">
	{#if isPlaying}
		<Button
			variant="ghost"
			size="icon"
			onclick={() => {
				isPlaying = false;
				wavesurfer?.pause();
			}}
		>
			<Pause class="size-4 fill-black" />
		</Button>
	{:else}
		<Button
			variant="ghost"
			size="icon"
			onclick={() => {
				isPlaying = true;
				wavesurfer?.play();
			}}
		>
			<Play class="size-4 fill-black" />
		</Button>
	{/if}

	<div class="h-8 w-64" bind:this={container}></div>
</div>
