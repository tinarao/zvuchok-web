<script>
	import { Button } from '$lib/components/ui/button';

	let { children } = $props();
</script>

<div class="flex h-screen flex-col">
	<header class="bg-secondary py-2">
		<div class="container flex items-center justify-between">
			<h1>Звучок</h1>
			<Button variant="outline" href="/app/submit">Загрузить</Button>
		</div>
	</header>
	<main class="bg-background flex-1">
		{@render children()}
	</main>
</div>
