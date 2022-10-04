import { req } from './utils/req.ts';
import { character as chara_query } from '../graphql/character.ts';
import { staff as staff_query } from '../graphql/staff.ts';

/**
 * Sub class for people related functions
 * @since 1.0.0
 * @memberof Anilist
 */
export class People {
	/**
	 * Fetch a character based on character id
	 * @since 1.0.0
	 * @param {number} id
	 * @returns {Character} Character
	 */
	async character(id: number) {
		if (!id || typeof id !== 'number') {
			throw new TypeError(
				'Argument id is required and must be a number',
			);
		}
		return await req({
			query: chara_query,
			variables: {
				id: id,
			},
		})
			.then((body) => body.Character);
	}
	/**
	 * Fetch a staff based on staff id
	 * @since 1.0.0
	 * @param {number} id
	 * @returns {Staff} Staff
	 */
	async staff(id: number) {
		if (!id || typeof id !== 'number') {
			throw new TypeError(
				'Argument id is required and must be a number',
			);
		}
		return await req({
			query: staff_query,
			variables: {
				id: id,
			},
		})
			.then((body) => body.Staff);
	}
}
