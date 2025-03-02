<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Label } from '$lib/components/ui/label';
	import Input from '$lib/components/ui/input/input.svelte';

	import { enhance } from '$app/forms';

	let { form } = $props();
	let isSubmitting = $state(false);

	$effect(() => {
		if (form?.error) {
			console.log(form.error);
		}
	});

	$effect(() => {
		if (form?.ok) {
			console.log('Ok');
		}
	});
</script>

<div class="flex h-screen items-center justify-center">
	<form
		method="POST"
		action="?/signup"
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
			<Label>Адрес электронной почты</Label>
			<Input autocomplete="email" name="email" />
		</div>
		<div>
			<Label>Имя пользователя</Label>
			<Input autocomplete="username" name="username" />
		</div>
		<div>
			<Label>Пароль</Label>
			<Input autocomplete="current-password" type="password" name="password" />
		</div>
		<hr />
		<div class="space-y-1">
			<Button type="submit" size="sm" class="w-full">Зарегистрироваться</Button>
			<Button href="/login" size="sm" variant="outline" class="w-full">Войти</Button>
		</div>
	</form>
</div>
