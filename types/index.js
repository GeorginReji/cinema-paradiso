/**
 * @typedef {Object} MoviesState
 * @property {import('./tmdb').Movie[]} list
 * @property {import('./tmdb').MovieDetail|null} data
 * @property {import('./tmdb').CastMember[]} cast
 * @property {import('./tmdb').CrewMember[]} crew
 */

/**
 * @typedef {Object} SeriesState
 * @property {import('./tmdb').TVSeries[]} list
 * @property {import('./tmdb').TVSeries|null} data
 */

/**
 * @typedef {Object} Utils
 * @property {(path: string, width?: string) => string} getImageUrl
 */

/**
 * @typedef {Object} NavLink
 * @property {string} id
 * @property {string} label
 * @property {string} icon
 * @property {string} route
 */

/**
 * @typedef {Object} SectionItem
 * @property {string} id
 * @property {string} label
 */

/**
 * @typedef {Object} ExpandableSection
 * @property {string} id
 * @property {string} label
 * @property {string} icon
 * @property {SectionItem[]} items
 */

export {}
