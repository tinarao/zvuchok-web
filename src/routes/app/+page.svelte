<script>
	import SampleBlock from '$lib/components/shared/sample-block.svelte';
	import LoaderCircle from 'lucide-svelte/icons/loader-circle';

	let { data } = $props();
</script>

{#await data.samples}
	<div class="flex h-full items-center justify-center">
		<LoaderCircle class="animate-spin" />
	</div>
{:then samples}
	<div class="container py-2">
		{#each samples as sample}
			<SampleBlock {sample} />
		{/each}
	</div>
{:catch error}
	<div>{error.message}</div>
{/await}
