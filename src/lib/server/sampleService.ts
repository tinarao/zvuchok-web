import { FileKind, fileService } from './fileService';
import { BASIC_API_URL } from '$env/static/private';
import { likeService } from './likeService';
import type { Sample, SampleWithAudioSignedUrlAndLikes } from '$lib/types/sample';

export const getAll = async (): Promise<Sample[]> => {
	const route = BASIC_API_URL + '/sample';
	const result = await fetch(route);
	const data = (await result.json()) as Sample[];

	return data;
};

export const getSamplesWithSignedUrls = async (token: string) => {
	const samples = await sampleService.getAll();
	const result: SampleWithAudioSignedUrlAndLikes[] = [];

	const signedUrlPreset = BASIC_API_URL + '/signedUrl/';

	console.time('Fetch full sample data');
	await Promise.all(
		samples.map(async (sample) => {
			const audioSignedUrl = await fileService.getSignedUrl(sample.slug, token, FileKind.Audio);
			const likes = await likeService.getLikesBySampleId(sample.id, token);

			result.push({
				...sample,
				likes,
				audioSignedUrl: audioSignedUrl ? `${signedUrlPreset}${audioSignedUrl}` : ''
			});
		})
	);
	console.timeEnd('Fetch full sample data');

	return result;
};

export const sampleService = {
	getAll,
	getSamplesWithSignedUrls
};
