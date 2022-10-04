import { errorHandler } from './error.ts';

type Options = {
	method: 'POST';
	headers: {
		'Content-Type': 'application/json';
		'Accept': 'application/json';
	};
	body: string;
};

/**
 * Base function to make requests
 * @private
 * @export
 * @param {string} url
 * @param {Options} options
 * @returns {*}
 */
export async function request(url: string, options: Options) {
	return await fetch(url, options as Record<string, unknown>)
		.then((response) => {
			return response.json()
				.then((json) => {
					return response.ok ? json : Promise.reject(json);
				});
		})
		.then((e) => e.data)
		.catch((error) => errorHandler(error));
}

/**
 * Simplified version of request. Options and url is set, only provide the body
 * @private
 * @export
 * @param {Record<string, unknown>} body
 * @returns {*}
 */
export async function req(
	{ query, variables }: {
		query: string;
		variables: Record<string, unknown>;
	},
) {
	return await request('https://graphql.anilist.co', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
		},
		body: JSON.stringify({
			query: query,
			variables: variables,
		}),
	});
}
