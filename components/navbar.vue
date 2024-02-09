<template>
    <div class="navbar">
        <div class="logo">
            <img src="../assets/images/appLogo.png" alt="">
        </div>
        <div class="nav-links">
            <nuxt-link to="/movies">
                <span class="link">Movie</span>
            </nuxt-link>
            <nuxt-link to="/tvShows">
                <span class="link">TV Show</span>
            </nuxt-link>
            <nuxt-link to="/watchList">
                <span class="link">Watchlist</span>
            </nuxt-link>
            <div class="profile">
                <img src="../assets/images/profilepic.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>

<style lang="scss">
/* colors */
$primary-background-color     : #0f1115;
$secondary-background-color: #19181f;
$accent-color         : #222128;

/* text color */
$text-color-white : #ffffff;
$text-color-grey : #57585b; 

.navbar {
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $primary-background-color;
    .logo {
        height: 100%;
        width: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            height: 30px;
            width: 40px;
        }
    }
    .nav-links {
        display: flex;
        gap: 50px;
        font-size: 20px;
        padding: 10px;

        .link:hover {
        text-decoration: underline;
        cursor: pointer;
    }
        .profile {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            background-color: $text-color-white;
            position: relative;
            img {
                position: absolute;
                width: 35px;
                height: 35px;
                border-radius: 50%;
                border: 1px solid $text-color-white;
            }
        }
    }
}

</style>