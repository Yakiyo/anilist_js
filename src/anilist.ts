import { Media } from './media.ts';
import { People } from './people.ts';
import { Search } from './search.ts';
import { Lists } from './lists.ts';
import { Thread } from './thread.ts';

/**
 * Base class to interact with the Anilist api
 * @since 1.0.0
 * @export
 * @public
 * @class Anilist
 */
export class Anilist {
	public media;
	public people;
	public search;
	public lists;
	public thread;
	/**
	 * Creates an instance of Anilist.
	 * @memberof Anilist
	 * @ignore
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

		/**
		 * @augments Media
		 * @see {@Link AniList.Media}
		 * @since 1.1.0
		 */
		this.media = new Media();
		/**
		 * @augments People
		 * @see {@Link AniList.People}
		 * @since 1.1.0
		 */
		this.people = new People();
		/**
		 * @augments Search
		 * @see {@Link AniList.Search}
		 * @since 1.1.0
		 */
		this.search = new Search();
		/**
		 * @augments Lists
		 * @see {@Link AniList.Lists}
		 * @since 1.1.0
		 */
		this.lists = new Lists();
		/**
		 * @augments Thread
		 * @see {@Link AniList.Thread}
		 * @since 1.1.0
		 */
		this.thread = new Thread();
	}
}
