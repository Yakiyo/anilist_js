/**
 * Handle errors. If error is "Not Found", return null
 * else throw error and let user handle it
 * @private
 * @export
 * @param {{errors: Record<string, unknown>}} { errors }
 * @returns {*}
 */
export function errorHandler(
	{ errors }: { errors: Record<string, unknown> },
) {
	const error = errors[0] as Record<string, unknown>;
	if (error.message === 'Not Found.') {
		throw new Error(
			`Not found. Got status code ${error.status}`,
		);
	} else {
		throw new Error(
			`Unknown error. Got status code ${error.status}. Reason: ${error.message}`,
		);
	}
}
