<script>
	import { Button } from '$lib/components/ui/button';

	let { children } = $props();

	const navbarLinks = [{ title: 'Explore', href: '/' }];
</script>

<div class="flex h-screen flex-col">
	<header class="bg-secondary flex items-center py-2">
		<div class="container flex items-center justify-between">
			<h1>Звучок</h1>
			<nav>
				<ul class="flex items-center">
					{#each navbarLinks as link}
						<Button variant="link" href={link.href}>
							{link.title}
						</Button>
					{/each}
				</ul>
			</nav>
			<Button variant="outline" href="/app/submit">Загрузить</Button>
		</div>
	</header>
	<main class="bg-background flex-1">
		{@render children()}
	</main>
</div>
