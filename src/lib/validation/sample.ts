import { z } from 'zod';

const genre = z.string({ message: 'Genre cannot be empty' }).max(64, 'Genre is too long');

const validators = {
	name: z
		.string({ message: 'Name cannot be empty' })
		.min(3, 'Name is too short')
		.max(256, 'Name is too long'),
	description: z.optional(
		z.string({ message: 'Description cannot be empty' }).max(512, 'Description is too long')
	),
	genre: genre,
	genres: z.array(genre).max(5, 'Too many genres'),
	tags: z.array(genre).max(5, 'Too many tags'),
	file: z.instanceof(File).refine((file) => file.size < 10 * 1024 * 1024, {
		message: 'File is too large'
	})
};

export const submitSampleValidation = z.object({
	name: validators.name,
	description: validators.description,
	genres: validators.genre,
	tags: validators.genre,
	file: validators.file
});

export type SubmitSampleDTO = z.infer<typeof submitSampleValidation>;
