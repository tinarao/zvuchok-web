import { sampleService } from '$lib/server/sampleService';
import { ACCESS_TOKEN_NAME } from '$lib/utils';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	const token = cookies.get(ACCESS_TOKEN_NAME);
	if (!token) redirect(302, '/login');

	return {
		samples: sampleService.getSamplesWithSignedUrls(token)
	};
};
