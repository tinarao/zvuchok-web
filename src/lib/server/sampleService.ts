import { FileKind, fileService } from './fileService';
import { BASIC_API_URL } from '$env/static/private';
import type { Sample, SampleWithAudioSignedUrl } from '$lib/types/sample';

export const getAll = async (): Promise<Sample[]> => {
	const route = BASIC_API_URL + '/sample';
	const result = await fetch(route);
	const data = (await result.json()) as Sample[];

	return data;
};

export const getSamplesWithSignedUrls = async (token: string) => {
	const samples = await sampleService.getAll();
	const result: SampleWithAudioSignedUrl[] = [];

	const signedUrlPreset = BASIC_API_URL + '/signedUrl/';

	await Promise.all(
		samples.map(async (sample) => {
			const audioSignedUrl = await fileService.getSignedUrl(sample.slug, token, FileKind.Audio);
			result.push({
				...sample,
				audioSignedUrl: audioSignedUrl ? `${signedUrlPreset}${audioSignedUrl}` : ''
			});
		})
	);

	return result;
};

export const sampleService = {
	getAll,
	getSamplesWithSignedUrls
};
