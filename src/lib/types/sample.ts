enum AvailabilityStatus {
	Public,
	OnModeration,
	Rejected,
	OnAnalysis
}

type Sample = {
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
	likes: number;
	isFeatured: boolean;
	isOnSale: boolean;
	isFree: boolean;
	createdAt: Date;
};
