import { media } from './media.ts';
import { people } from './people.ts';
import { search } from './search.ts';
import { lists } from './lists.ts';
import { thread } from './thread.ts';

/**
 * Base class to interact with the Anilist api
 * @since 1.0.0
 * @export
 * @class Anilist
 */
export class Anilist {
	media;
	people;
	search;
	lists;
	thread;
	/**
	 * Creates an instance of Anilist.
	 * @memberof Anilist
	 * @hideconstructor
	 */
	constructor() {
		// Run a check if permissions were granted or not. If not, then throw error. Else move on
		(async () => {
			const perm = await Deno.permissions.query({
				name: 'net',
				host: 'graphql.anilist.co',
			});
			if (perm.state !== 'granted') {
				throw new Error(
					'Missing permissions to access net. Please restart process with `--allow-net=graphql.anilist.co`',
				);
			}
		})();

		this.media = media;
		this.people = people;
		this.search = search;
		this.lists = lists;
		this.thread = thread;
	}
}
