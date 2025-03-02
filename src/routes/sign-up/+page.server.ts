import { BASIC_API_URL } from '$lib/server/config';
import { fail, type Actions } from '@sveltejs/kit';

export const actions = {
	signup: async (event) => {
		const formData = await event.request.formData();

		console.log(formData);

		const email = formData.get('email')?.toString();
		const username = formData.get('username')?.toString();
		const password = formData.get('password')?.toString();

		if (!username || !password || !email) {
			return fail(422, { error: 'Форма заполнена неверно' });
		}

		const route = BASIC_API_URL + '/auth/register';
		const response = await fetch(route, {
			method: 'POST',
			body: JSON.stringify({ username, password, email }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (response.status !== 201) {
			const text = await response.text();
			return fail(response.status, { error: text });
		}

		return { ok: true };
	}
} satisfies Actions;
