import type { User } from './user';

export enum AvailabilityStatus {
	Public,
	OnModeration,
	Rejected,
	OnAnalysis
}

export type Sample = {
	id: number;
	name: string;
	slug: string;
	description?: string;
	durationMs: number;
	peaks: number[];
	updateMetadataToken: string;
	availabilityStatus: AvailabilityStatus;
	sampleFilePath: string;
	tags: string[];
	genres: string[];
	// samplePack?: SamplePack;
	// samplePackId?: number;
	// author: User;
	authorId: number;
	downloads: number;
	likesCount: number;
	isFeatured: boolean;
	isOnSale: boolean;
	isFree: boolean;
	createdAt: Date;
};

export type SampleWithAudioSignedUrl = Sample & { audioSignedUrl: string };
export type SampleWithAudioSignedUrlAndLikes = Sample & { audioSignedUrl: string; likes: Like[] };

export type Like = {
	id: number;
	userId: number;
	sampleId: number;
	user: User;
	sample: Sample;
	createdAt: string;
};
