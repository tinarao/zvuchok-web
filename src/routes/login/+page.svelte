<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Label } from '$lib/components/ui/label';
	import Input from '$lib/components/ui/input/input.svelte';

	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	let { form } = $props();
	let isSubmitting = $state(false);

	$effect(() => {
		if (form?.error) {
			console.log(form.error);
		}
	});

	$effect(() => {
		if (form?.ok) {
			goto('/app');
		}
	});
</script>

<div class="flex h-screen items-center justify-center">
	<form
		method="POST"
		action="?/login"
		use:enhance={() => {
			isSubmitting = true;

			return async ({ update, result }) => {
				await update();
				isSubmitting = false;
			};
		}}
		class="w-72 space-y-2"
	>
		<div>
			<Label>Имя пользователя</Label>
			<Input autocomplete="name" name="username" />
		</div>
		<div>
			<Label>Пароль</Label>
			<Input autocomplete="current-password" type="password" name="password" />
		</div>
		<hr />
		<div class="space-y-1">
			<Button type="submit" size="sm" class="w-full">Войти</Button>
			<Button href="/sign-up" size="sm" variant="outline" class="w-full">Зарегистрироваться</Button>
		</div>
	</form>
</div>
