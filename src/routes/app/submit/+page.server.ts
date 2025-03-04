import { BASIC_API_URL } from '$env/static/private';
import { ACCESS_TOKEN_NAME } from '$lib/utils';
import { submitSampleValidation } from '$lib/validation/sample';
import { fail, redirect, type Actions } from '@sveltejs/kit';

export const actions = {
	submit: async (e) => {
		try {
			const formdata = await e.request.formData();
			const file = formdata.get('file') as File;
			const values = Object.fromEntries(formdata.entries());

			const data = {
				...values,
				genres: (formdata.get('genres') as string).split(', '),
				tags: (formdata.get('tags') as string).split(', '),
				file
			};

			const result = submitSampleValidation.safeParse(data);
			if (!result.success) {
				return fail(400, { error: result.error.errors[0].message });
			}

			const token = e.cookies.get(ACCESS_TOKEN_NAME);
			if (!token) {
				redirect(302, '/login');
			}

			const route = BASIC_API_URL + '/sample';
			const submitResult = await fetch(route, {
				method: 'POST',
				headers: {
					// 'Content-Type': 'multipart/form-data',
					Authorization: `Bearer ${token}`
				},
				body: formdata
			});

			if (submitResult.status !== 201) {
				const text = await submitResult.text();
				return fail(submitResult.status, { error: text });
			}

			const submitResultJson = await submitResult.json();

			return { ok: true, data: submitResultJson };
		} catch (e) {
			console.error(e);
			return fail(400, { error: 'Failed' });
		}
	}
} satisfies Actions;
