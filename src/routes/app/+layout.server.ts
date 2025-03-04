import { authService } from '$lib/server/authService';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const token = cookies.get('access_token');
	if (!token) return { user: null };

	const user = await authService.getUserData(token);
	if (!user) {
		return redirect(302, '/login');
	}

	return { user };
};
