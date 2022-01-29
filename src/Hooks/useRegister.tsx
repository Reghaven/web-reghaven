import { useState } from 'react';

export function useRegister() {
	const [error, setError] = useState<string | undefined>(undefined);
	const [registrationSuccessful, setRegistrationSuccessful] = useState<
		boolean | undefined
	>(undefined);

	/**
	 * used to create new accounts
	 * @param opts
	 */
	async function register(opts: {
		username: string;
		email: string;
		password: string;
	}) {
		try {
			const response = await fetch('http://localhost:8080/graphql', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					query: `
					query register($username: String, email: $string, $password: String) {
						register(username: $username, email: $email, password: $password) {
							registered
							error {
								message
							}
						}
					}
				`,
					variables: {
						username: opts.username,
						email: opts.email,
						password: opts.password,
					},
				}),
			});
			const body = await response.json();
			const registered = body.registered;
			setRegistrationSuccessful(registered);
			if (body.error) {
				setError(body.error.message);
			}
		} catch (error) {
			setRegistrationSuccessful(false);
			setError((error as Error).message);
		}
	}

	return [register, registrationSuccessful, error];
}
