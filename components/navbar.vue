<template>
    <div class="navbar">
        <div class="toggle-button-group">
            <nuxt-link class="toggle-button" to="/movies">
                <span class="link">Movie</span>
            </nuxt-link>
            <nuxt-link class="toggle-button" to="/tvShows">
                <span class="link">TV Show</span>
            </nuxt-link>
        </div>
        <div class="profile">
            <img src="../assets/images/profilepic.jpg" alt="profile-picture" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style lang="scss">
.navbar {
    min-height: 80px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    position: sticky;
    gap: 2rem;
    background-color: $primary-background-color;

    .toggle-button-group {
        display: flex;
        background-color: $secondary-background-color;
        border-radius: 6px;
        padding: 4px;
        border: 1px solid rgba($accent-color, 0.2);
    }

    .toggle-button {
        text-decoration: none;
        background-color: transparent;
        border: none;
        color: $text-color-grey;
        padding: 0.75rem 1.5rem;
        border-radius: 6px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 0.95rem;

        .link {
            display: block;
        }

        &:hover {
            background-color: rgba($accent-color, 0.15);
            color: $text-color-white;
        }

        &.nuxt-link-active {
            background-color: $accent-color;
            color: $text-color-white;
            box-shadow: 0 2px 8px rgba($accent-color, 0.3);
        }
    }

    .profile {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        border: 2px solid $accent-color;
        cursor: pointer;
        transition: all 0.3s ease;
        flex-shrink: 0;
        margin-right: 1rem;
        &:hover {
            box-shadow: 0 0 12px rgba($accent-color, 0.5);
            transform: scale(1.05);
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>
