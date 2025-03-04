import { BASIC_API_URL } from '$env/static/private';
import type { User } from '$lib/types/user';

async function getUserData(token: string): Promise<User | null> {
	try {
		const route = BASIC_API_URL + '/auth/verify';
		const response = await fetch(route, {
			headers: {
				Authorization: 'Bearer ' + token
			}
		});

		if (response.status === 200) {
			return (await response.json()) as User;
		} else {
			return null;
		}
	} catch {
		return null;
	}
}

async function authenticate(token: string): Promise<boolean> {
	const user = await getUserData(token);

	return user !== null;
}

export const authService = {
	verify: authenticate,
	getUserData
};
