import { req } from './utils/req.ts';
import { MEDIA_TYPE } from './utils/constants.ts';
import { media_list } from '../graphql/media_list.ts';

/**
 * Sub class for list related functions
 * @since 1.0.0
 * @memberof Anilist
 */
export class Lists {
	/**
	 * Fetch Anime lists of a user
	 * @since 1.0.0
	 * @param {(string | number)} user Can be a username or userid
	 * @returns {MediaListCollection} MediaListCollection
	 */
	async anime(user: string | number) {
		if (
			typeof user !== 'string' && typeof user !== 'number'
		) {
			throw new Error(
				'Invalid argument. User is required. Must be a string (username) or number (user id)',
			);
		}
		const vars = typeof user === 'string'
			? { username: user }
			: { userId: user };

		return await req({
			query: media_list,
			variables: {
				...vars,
				type: MEDIA_TYPE['ANIME'],
			},
		})
			.then((body) => body.MediaListCollection.lists);
	}
	/**
	 * Fetch Manga lists of a user
	 * @since 1.0.0
	 * @param {(string | number)} user Can be a username or userid
	 * @returns {MediaListCollection} MediaListCollection
	 */
	async manga(user: string | number) {
		if (
			!user || typeof user !== 'string' || typeof user !== 'number'
		) {
			throw new Error(
				'Invalid argument. User is required. Must be a string (username) or number (user id)',
			);
		}
		const vars = typeof user === 'string'
			? { username: user }
			: { userId: user };
		return await req({
			query: media_list,
			variables: {
				...vars,
				type: MEDIA_TYPE['MANGA'],
			},
		})
			.then((body) => body.MediaListCollection);
	}
}
