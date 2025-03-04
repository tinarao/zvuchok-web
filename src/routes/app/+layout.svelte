<script>
	import { Button } from '$lib/components/ui/button';

	import Coins from 'lucide-svelte/icons/coins';

	let { children, data } = $props();
	const navbarLinks = [
		{ title: 'Explore', href: '/' },
		{ title: 'Submit', href: '/app/submit' }
	];
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
			<div class="flex items-center gap-x-4">
				<p class="bg-secondary flex items-center rounded-full">
					<Coins class="mr-2 size-4" />
					<span class="text-sm font-medium">
						{data.user?.credits}
					</span>
				</p>
				<p class="text-sm font-medium">
					{data.user?.username}
				</p>
			</div>
		</div>
	</header>
	<main class="bg-background flex-1">
		{@render children()}
	</main>
</div>
