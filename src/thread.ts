import {
	thread as thread_query,
	thread_comment,
} from '../graphql/thread.ts';
import { req } from './utils/req.ts';

/**
 * Sub class for thread related functions
 * @since 1.0.0
 * @memberof Anilist
 */
export class Thread {
	/**
	 * Gets a forum thread
	 * @since 1.0.0
	 * @param {number} id The thread's id
	 * @returns {Thread} Thread
	 */
	async get(id: number) {
		if (typeof id !== 'number') {
			throw new TypeError(
				'Argument Id is required and must be of type number',
			);
		}
		return await req({
			query: thread_query,
			variables: {
				id: id,
			},
		})
			.then((body) => body.Thread);
	}
	/**
	 * Gets the comments of a thread
	 * @since 1.0.0
	 * @param {number} id Thread id
	 * @param {number} [page=1] Number of the page to view
	 * @param {number} [perPage=5] Amount of results per page
	 * @returns {Array<ThreadComment>} Array<ThreadComment>
	 */
	async getComments(id: number, page = 1, perPage = 5) {
		if (typeof id !== 'number') {
			throw new TypeError(
				'Argument Id is required and must be of type number',
			);
		}
		return await req({
			query: thread_comment,
			variables: {
				id,
				page,
				perPage,
			},
		})
			.then((body) => body.Page.threadComments);
	}
}
