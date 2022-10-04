import { MEDIA_TYPE } from './utils/constants.ts';
import { req } from './utils/req.ts';

const media_query =
	`query ($search: String, $page: Int, $perPage: Int, $type: MediaType) {
    Page(page: $page, perPage: $perPage) {
      media(search: $search, type: $type) {
        id
        title {
          romaji
          english
          native
          userPreferred
        }
      }
    }
  }`;


/**
 * Sub class for search related functions
 * @since 1.0.0
 * @memberof Anilist
 */
export class Search {
	/**
	 * Search for animes by a search term
	 * @since 1.0.0
	 * @param {string} search Name of the anime to search for
	 * @param {number} [page=1] Page number to view result of. Defaults to 1
	 * @param {number} [amount=5] Amount of results per page
	 * @returns {AnimeSearch} AnimeSearch
	 */
	async anime(search: string, page = 1, amount = 5) {
		if (
			!search || typeof search !== 'string' ||
			typeof page !== 'number' || typeof amount !== 'number'
		) {
			throw new TypeError(
				'Invalid argument types. Search is a required string, amount and page must be of number types',
			);
		}
		return await req({
			query: media_query,
			variables: {
				search: search,
				page: page,
				perPage: amount,
				type: MEDIA_TYPE['ANIME'],
			},
		})
			.then((body) => body.Page);
	}
	/**
	 * Search for mangas by a search term
	 * @since 1.0.0
	 * @param {string} search Name of the anime to search for
	 * @param {number} [page=1] Page number to view result of. Defaults to 1
	 * @param {number} [amount=5] Amount of results per page
	 * @returns {MangaSearch} MangaSearch
	 */
	async manga(search: string, page = 1, amount = 5) {
		if (
			!search || typeof search !== 'string' ||
			typeof page !== 'number' || typeof amount !== 'number'
		) {
			throw new TypeError(
				'Invalid argument types. Search is a required string, amount and page must be of number types',
			);
		}
		return await req({
			query: media_query,
			variables: {
				search: search,
				page: page,
				perPage: amount,
				type: MEDIA_TYPE['MANGA'],
			},
		})
			.then((body) => body.Page);
	}
	/**
	 * Search for users by a search term
	 * @since 1.0.0
	 * @param {string} search Name of the anime to search for
	 * @param {number} [page=1] Page number to view result of. Defaults to 1
	 * @param {number} [amount=5] Amount of results per page
	 * @returns {UserSearch} UserSearch
	 */
	async user(search: string, page = 1, amount = 5) {
		if (
			!search || typeof search !== 'string' ||
			typeof page !== 'number' || typeof amount !== 'number'
		) {
			throw new TypeError(
				'Invalid argument types. Search is a required string, amount and page must be of number types',
			);
		}
		return await req({
			query: `query ($page: Int, $perPage: Int, $search: String) {
				Page(page: $page, perPage: $perPage) {
				  pageInfo {
					total
					currentPage
					lastPage
					hasNextPage
					perPage
				  }
				  users(search: $search) {
					id
					name
				  }
				}
			  }`,
			variables: {
				search: search,
				page: page,
				perPage: amount,
			},
		})
			.then((body) => body.Page);
	}
	/**
	 * Search for staffs by a search term
	 * @since 1.0.0
	 * @param {string} search Name of the anime to search for
	 * @param {number} [page=1] Page number to view result of. Defaults to 1
	 * @param {number} [amount=5] Amount of results per page
	 * @returns {StaffSearch} StaffSearch
	 */
	async staff(search: string, page = 1, amount = 5) {
		if (
			!search || typeof search !== 'string' ||
			typeof page !== 'number' || typeof amount !== 'number'
		) {
			throw new TypeError(
				'Invalid argument types. Search is a required string, amount and page must be of number types',
			);
		}
		return await req({
			query: `query ($page: Int, $perPage: Int, $search: String) {
				Page(page: $page, perPage: $perPage) {
				  pageInfo {
					total
					currentPage
					lastPage
					hasNextPage
					perPage
				  }
				  staff(search: $search) {
					id
					name {
					  english: full
					}
				  }
				}
			  }`,
			variables: {
				search: search,
				page: page,
				perPage: amount,
			},
		})
			.then((body) => body.Page);
	}
	/**
	 * Search for studios by a search term
	 * @since 1.0.0
	 * @param {string} search Name of the anime to search for
	 * @param {number} [page=1] Page number to view result of. Defaults to 1
	 * @param {number} [amount=5] Amount of results per page
	 * @returns {StudioSearch} StudioSearch
	 */
	async studio(search: string, page = 1, amount = 5) {
		if (
			!search || typeof search !== 'string' ||
			typeof page !== 'number' || typeof amount !== 'number'
		) {
			throw new TypeError(
				'Invalid argument types. Search is a required string, amount and page must be of number types',
			);
		}
		return await req({
			query: `query ($page: Int, $perPage: Int, $search: String) {
				Page(page: $page, perPage: $perPage) {
				  pageInfo {
					total
					currentPage
					lastPage
					hasNextPage
					perPage
				  }
				  studios(search: $search) {
					id
					name
				  }
				}
			  }`,
			variables: {
				search: search,
				page: page,
				perPage: amount,
			},
		})
			.then((body) => body.Page);
	}
}

