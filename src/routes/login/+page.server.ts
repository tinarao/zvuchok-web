import { BASIC_API_URL } from '$env/static/private';
import { ACCESS_TOKEN_NAME } from '$lib/utils';
import { fail, type Actions } from '@sveltejs/kit';

export const actions = {
	login: async (event) => {
		const formData = await event.request.formData();
		const username = formData.get('username')?.toString();
		const password = formData.get('password')?.toString();

		if (!username || !password) {
			return fail(422, { error: 'Форма заполнена неверно' });
		}

		const route = BASIC_API_URL + '/auth/login';
		const response = await fetch(route, {
			method: 'POST',
			body: JSON.stringify({ username, password }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (response.status !== 200) {
			const text = await response.text();
			return fail(response.status, { error: text });
		}

		const json = await response.json();
		if (json.accessToken) {
			event.cookies.set(ACCESS_TOKEN_NAME, json.accessToken, { path: '/', httpOnly: true });
		}

		return { ok: true };
	}
} satisfies Actions;
