import { BASIC_API_URL } from './config';

export async function authenticate(token: string): Promise<boolean> {
	const route = BASIC_API_URL + '/auth/verify';
	const response = await fetch(route, {
		headers: {
			Authorization: 'Bearer ' + token
		}
	});

	return response.status === 200;
}
