import { BASIC_API_URL } from '$env/static/private';

export enum FileKind {
	Audio = 'Audio',
	Image = 'Image'
}

/**
 * Generates a signed URL for a given slug.
 *
 * @param {string} slug The slug.
 *
 * @returns {Promise<string>} The signed URL.
 */
async function getSignedUrl(
	slug: string,
	accessToken: string,
	kind = FileKind.Audio
): Promise<string | null> {
	const route = BASIC_API_URL + '/signedUrl/generate/' + kind + '/' + slug;
	const result = await fetch(route, {
		method: 'GET',
		headers: {
			Authorization: 'Bearer ' + accessToken
		}
	});

	const signedUrl = await result.text();
	return signedUrl;
}

export const fileService = {
	getSignedUrl
};
