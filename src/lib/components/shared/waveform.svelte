<script lang="ts">
	import { onMount } from 'svelte';
	import WaveSurfer from 'wavesurfer.js';

	let container: HTMLDivElement;
	let wavesurfer: WaveSurfer;
	let { sample }: { sample: Sample } = $props();

	onMount(() => {
		wavesurfer = WaveSurfer.create({
			container: container!,
			waveColor: 'green',
			progressColor: undefined,
			backend: 'MediaElement',
			barRadius: 2,
			cursorColor: undefined,
			cursorWidth: 0,
			barGap: 1,
			height: 'auto',
			barWidth: 9,
			peaks: [sample.peaks],
			url: 'http://localhost:5129/api/file/audio/' + sample.id
		});
	});
</script>

<div class="h-8 w-64" bind:this={container}></div>
