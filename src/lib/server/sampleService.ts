import { BASIC_API_URL } from './config';

export const getAll = async (): Promise<Sample[]> => {
	const route = BASIC_API_URL + '/sample';
	const result = await fetch(route);
	const data = (await result.json()) as Sample[];

	return data;
};

export const sampleService = {
	getAll
};
