<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';

	import { enhance } from '$app/forms';

	let { form } = $props();
	let isSubmitting = $state(false);

	$effect(() => {
		if (form?.ok) {
			console.log('ok');
		}
	});

	$effect(() => {
		if (form?.error) {
			console.log(form.error);
		}
	});
</script>

<div class="container">
	<form
		class="space-y-2"
		method="POST"
		enctype="multipart/form-data"
		action="?/submit"
		use:enhance={() => {
			isSubmitting = true;

			return async ({ update, result }) => {
				console.log(result);
				await update();
				isSubmitting = false;
			};
		}}
	>
		<div>
			<Label>Название <span class="text-red-500">*</span></Label>
			<Input required name="name" />
		</div>
		<div>
			<Label>Описание</Label>
			<Textarea maxlength={512} rows={4} name="description" class="resize-none" />
		</div>
		<div>
			<Label>Файл <span class="text-red-500">*</span></Label>
			<Input required accept=".mp3, .wav" type="file" name="file" />
		</div>
		<div>
			<Label
				>Тег (один, после одобрения модерацией можно будет добавить больше) <span
					class="text-red-500">*</span
				></Label
			>
			<Input maxlength={32} required placeholder="drums, percussion" name="tags" />
		</div>
		<div>
			<Label
				>Жанр (один, после одобрения модерацией можно будет добавить больше) <span
					class="text-red-500">*</span
				></Label
			>
			<Input maxlength={32} required placeholder="uk garage, dubstep" name="genres" />
		</div>
		<div class="py-2">
			<Button type="submit">Отправить</Button>
		</div>
	</form>
</div>
