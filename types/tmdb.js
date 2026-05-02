/**
 * @typedef {Object} Genre
 * @property {number} id
 * @property {string} name
 */

/**
 * @typedef {Object} ProductionCompany
 * @property {number} id
 * @property {string} name
 * @property {string|null} logo_path
 * @property {string} origin_country
 */

/**
 * Basic movie object from TMDB API list/search endpoints.
 * @typedef {Object} Movie
 * @property {number} id
 * @property {string} title
 * @property {string} overview
 * @property {string|null} poster_path
 * @property {string|null} backdrop_path
 * @property {number} vote_average
 * @property {number} vote_count
 * @property {string} release_date
 * @property {number[]} genre_ids
 * @property {boolean} adult
 * @property {string} original_language
 * @property {string} original_title
 * @property {number} popularity
 */

/**
 * Full movie detail from single-movie endpoint.
 * Note: has full `genres` objects instead of `genre_ids`.
 * @typedef {Object} MovieDetail
 * @property {number} id
 * @property {string} title
 * @property {string} overview
 * @property {string|null} poster_path
 * @property {string|null} backdrop_path
 * @property {number} vote_average
 * @property {number} vote_count
 * @property {string} release_date
 * @property {Genre[]} genres
 * @property {number} runtime
 * @property {string} status
 * @property {string|null} tagline
 * @property {number} budget
 * @property {number} revenue
 * @property {ProductionCompany[]} production_companies
 * @property {boolean} adult
 * @property {string} original_language
 * @property {string} original_title
 * @property {number} popularity
 */

/**
 * @typedef {Object} CastMember
 * @property {number} id
 * @property {string} name
 * @property {string} character
 * @property {string|null} profile_path
 * @property {number} order
 * @property {number} cast_id
 * @property {string} credit_id
 * @property {string} known_for_department
 */

/**
 * @typedef {Object} CrewMember
 * @property {number} id
 * @property {string} name
 * @property {string} job
 * @property {string} department
 * @property {string|null} profile_path
 * @property {string} credit_id
 * @property {string} known_for_department
 */

/**
 * @typedef {Object} TVSeries
 * @property {number} id
 * @property {string} name
 * @property {string} overview
 * @property {string|null} poster_path
 * @property {string|null} backdrop_path
 * @property {number} vote_average
 * @property {number} vote_count
 * @property {string} first_air_date
 * @property {number[]} genre_ids
 * @property {string} original_language
 * @property {string} original_name
 * @property {number} popularity
 */

/**
 * @template T
 * @typedef {Object} TMDBListResponse
 * @property {number} page
 * @property {T[]} results
 * @property {number} total_pages
 * @property {number} total_results
 */

/**
 * Shared display shape for both Movie and TVSeries list items.
 * Fields that only exist on one type are marked optional so the
 * template can access them without type errors.
 *
 * @typedef {Object} MediaItem
 * @property {number} id
 * @property {string} [title] - Movies only
 * @property {string} [name] - TV series only
 * @property {string} [original_name] - TV series only
 * @property {string|null} poster_path
 * @property {string|null} backdrop_path
 * @property {number} vote_average
 * @property {string} overview
 */

export {}
