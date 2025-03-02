import { authenticate } from '$lib/server/authService';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/app')) {
		console.log('protect');
		const token = event.cookies.get('access_token');
		if (!token) {
			return redirect(302, '/login');
		}

		const isAuthenticated = await authenticate(token);
		if (!isAuthenticated) {
			return redirect(302, '/login');
		}
	}

	const response = await resolve(event);
	return response;
};
