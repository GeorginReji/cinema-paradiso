<template>
    <aside class="sidebar">
        <!-- Logo -->
        <header>
            <img src="../assets/images/appLogo.png" alt="" />
            <h1>Cinema Paradiso</h1>
        </header>
        <!-- Links Section -->
        <div class="links-section">
            <div
                v-for="item in simpleLinks"
                :key="item.id"
                class="menu-item"
                :class="{ active: activeLink === item.id }"
                @click="handleLinkClick(item)"
            >
                <i class="icon" :class="item.icon"></i>
                <span class="label">{{ item.label }}</span>
            </div>
        </div>
        <!-- Expandable Sections -->
        <div
            v-for="section in expandableSections"
            :key="section.id"
            class="expand-section"
        >
            <div
                class="section-header menu-item"
                :class="{ expanded: expandedSections[section.id] }"
                @click="toggleSection(section.id)"
            >
                <i class="icon" :class="section.icon"></i>
                <span class="label">{{ section.label }}</span>
                <i class="toggle-icon" :class="'ri-arrow-down-s-line'"></i>
            </div>
            <transiton name="expand">
                <ul v-show="expandedSections[section.id]" class="section-items">
                    <li
                        v-for="item in section.items"
                        :key="item.id"
                        class="menu-item"
                    >
                        <span class="label">{{ item.label }}</span>
                    </li>
                </ul>
            </transiton>
        </div>
    </aside>
</template>

<script>
/**
 * @typedef {import('../types').NavLink} NavLink
 * @typedef {import('../types').ExpandableSection} ExpandableSection
 * @typedef {import('../types').SectionItem} SectionItem
 */

export default {
    name: 'SideBar',

    data() {
        return {
            /** @type {NavLink[]} */
            simpleLinks: [
                { id: 'home', label: 'Home', icon: 'ri-home-line', route: '/' },
                {
                    id: 'watchlist',
                    label: 'Watchlist',
                    icon: 'ri-bookmark-line',
                    route: '/watchlist'
                },
                {
                    id: 'favorites',
                    label: 'Favorites',
                    icon: 'ri-heart-fill',
                    route: '/favorites'
                }
            ],

            /** @type {ExpandableSection[]} */
            expandableSections: [
                {
                    id: 'genres',
                    label: 'Genres',
                    icon: 'ri-film-line',
                    items: [
                        { id: 'action', label: 'Action' },
                        { id: 'horror', label: 'Horror' },
                        { id: 'comedy', label: 'Comedy' },
                        { id: 'adventure', label: 'Adventure' },
                        { id: 'drama', label: 'Drama' },
                        { id: 'sci-fi', label: 'Sci-Fi' }
                    ]
                },
                {
                    id: 'language',
                    label: 'Language',
                    icon: 'ri-globe-line',
                    items: [
                        { id: 'english', label: 'English' },
                        { id: 'hindi', label: 'Hindi' },
                        { id: 'tamil', label: 'Tamil' },
                        { id: 'malayalam', label: 'Malayalam' },
                        { id: 'japanese', label: 'Japanese' }
                    ]
                }
            ],

            expandedSections: { genres: true, language: false },

            activeLink: 'home'
        }
    },

    methods: {
        /**
         * Toggles a sidebar section open/closed.
         * @param {string} sectionId
         * @returns {void}
         */
        toggleSection(sectionId) {
            this.$set(
                this.expandedSections,
                sectionId,
                !this.expandedSections[sectionId]
            )
        },

        /**
         * Handles a nav link click — sets the active state and navigates.
         * @param {NavLink} item
         * @returns {void}
         */
        handleLinkClick(item) {
            this.activeLink = item.id
            // this.$router.push(item.route)
        }
    }
}
</script>

<style lang="scss">
.sidebar {
    padding-top: 0.5rem;
    background-color: $primary-background-color;
    display: flex;
    flex-direction: column;
    header {
        height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-bottom: 4rem;
        h1 {
            color: $accent-color;
            font-size: 1rem;
            font-weight: 700;
        }

        img {
            width: 3rem;
            height: 2.5rem;
        }
    }

    .links-section {
        padding: 0 0 1rem 0;
        border-bottom: 1px solid rgba($accent-color, 0.1);
    }

    .expandable-section {
        width: 100%;
        padding: 0;
    }

    .menu-item {
        display: flex;
        align-items: center;
        padding: 0.75rem 1rem 0.75rem 3rem;
        color: $text-color-grey;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.2s ease;
        border-left: 3px solid transparent;

        .icon {
            margin-right: 0.75rem;
            font-size: 1.2rem;
        }

        .label {
            flex: 1;
        }

        &:is(:hover, .active) {
            color: $accent-color;
            background-color: rgba($accent-color, 0.1);
            border-left-color: $accent-color;
        }
    }

    .section-header {
        display: flex;
        align-items: center;
        transition: all 0.3s ease;
        user-select: none;

        .label {
            flex: 1;
            color: $text-color-grey;
            font-size: 1rem;
            margin: 0 0.5rem;
        }

        .toggle-icon {
            font-size: 12px;
            color: $text-color-grey;
            transition: transform 0.3s ease;
        }

        &.expanded .toggle-icon {
            transform: rotate(0deg);
        }

        &:not(.expanded) .toggle-icon {
            transform: rotate(-90deg);
        }
    }

    .section-items {
        list-style: none;
        padding: 0;
        margin: 0;
        background-color: rgba($accent-color, 0.05);
    }
}

// Transition animations
.expand-enter-active,
.expand-leave-active {
    transition: all 0.3s ease;
    max-height: 500px;
    overflow: hidden;
}

.expand-enter,
.expand-leave-to {
    max-height: 0;
    opacity: 0;
}
</style>
