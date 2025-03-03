import { BASIC_API_URL } from '$lib/server/config';
import { sampleService } from '$lib/server/sampleService';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return { samples: sampleService.getAll() };
};
