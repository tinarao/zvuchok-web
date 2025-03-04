import type { Sample } from './sample';

export type User = {
	id: number;
	username: string;
	normalizedUsername: string;
	slug: string;
	credits: number;
	bio?: string;
	avatarPath?: string;
	// createdSamplePacks: SamplePack[],
	createdSamples: Sample[];
	// favoriteSamplePacks: SamplePack[],
	favoriteSamples: Sample[];
	createdAt: string;
};
