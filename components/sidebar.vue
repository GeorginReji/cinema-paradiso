<template>
    <div class="sidebar">
        <div class="genre">
            <div class="label">Genre</div>
            <ul v-for="item in genre">
                <li>{{ item }}</li>
            </ul>
        </div>
        <div class="language">
            <div class="label">Language</div>
            <ul v-for="item in language">
                <li>{{ item }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sideBar',
    data() {
        return {
            genre: [
                'Action',
                'Horror',
                'Comedy',
                'Adventure',
                'Drama',
                'Sci-Fi'
            ],
            language: ['English', 'Hindi', 'Tamil', 'Malayalam', 'Japanese']
        }
    }
}
</script>

<style lang="scss">
.sidebar {
    margin-top: 8%;
    width: 11%;
    height: 100%;
    background-color: $primary-background-color;
    display: flex;
    flex-direction: column;
    .genre,
    .language {
        width: 100%;
        padding: 1rem;
        ul,
        li {
            text-align: left;
            list-style: none;
            color: $text-color-grey;
            font-size: 19px;
            padding: 0px 0px 3px 3px;
            &:hover {
                cursor: pointer;
                color: $accent-color;
            }
        }
        .label {
            margin-bottom: 20px;
            color: $text-color-white;
        }
    }
}
</style>
