import { useState } from 'react';

export function useLogin(): [
	(opts: { username: string; password: string }) => void,
	string | undefined,
	string | undefined
] {
	const [sessionToken, setSessionToken] = useState<string | undefined>(
		undefined
	);
	const [error, setError] = useState<string | undefined>(undefined);

	/**
	 * used to authenticate an account
	 * @param opts
	 */
	async function login(opts: { username: string; password: string }) {
		try {
			const response = await fetch('http://localhost:8080/graphql', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					query: `
					query login($username: String, $password: String) {
						login(username: $username, password: $password) {
							token
							error {
								message
							}
						}
					}
				`,
					variables: {
						username: opts.username,
						password: opts.password,
					},
				}),
			});
			const body = await response.json();
			const token = body.token;
			setSessionToken(token);

			if (body.error) {
				setError(body.error.message);
			}
		} catch (error) {
			setError((error as Error).message);
		}
	}

	return [login, sessionToken, error];
}
