import { BASIC_API_URL } from '$env/static/private';
import type { Like } from '$lib/types/sample';

async function getLikesBySampleId(sampleId: number, token: string): Promise<Like[]> {
	const route = BASIC_API_URL + '/like/' + sampleId;
	const response = await fetch(route, {
		headers: {
			Authorization: 'Bearer ' + token
		},
		method: 'GET'
	});

	if (response.status === 404) {
		return [];
	}

	const likes: Like[] = await response.json();
	return likes;
}

export const likeService = {
	getLikesBySampleId
};
