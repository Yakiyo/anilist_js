import { media as media_query } from '../graphql/media.ts';
import { MEDIA_TYPE } from './utils/constants.ts';
import { req } from './utils/req.ts';

/**
 * Sub class for media related functions
 * @since 1.0.0
 * @memberof Anilist
 */
export class Media {
	/**
	 * Fetch an anime based on a anime id
	 * @since 1.0.0
	 * @param {number} id
	 * @returns {Anime} Anime
	 */
	async anime(id: number) {
		if (!id || typeof id !== 'number') {
			throw new TypeError(
				'Argument id is required and must be a number',
			);
		}

		return await req({
			query: media_query,
			variables: {
				id: id,
				type: MEDIA_TYPE['ANIME'],
			},
		})
			.then((body) => body.Media);
	}
	/**
	 * Fetch a manga based on a manga id
	 * @since 1.0.0
	 * @param {number} id
	 * @returns {Manga} Manga
	 */
	async manga(id: number) {
		if (!id || typeof id !== 'number') {
			throw new TypeError(
				'Argument id is required and must be a number',
			);
		}

		return await req({
			query: media_query,
			variables: {
				id: id,
				type: MEDIA_TYPE['MANGA'],
			},
		})
			.then((body) => body.Media);
	}
}
