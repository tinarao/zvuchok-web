import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/app')) {
		console.log('protect');
	}

	const response = await resolve(event);
	return response;
};
