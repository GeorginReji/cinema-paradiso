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
                genre:[
                    'Action',
                    'Horror',
                    'Comedy',
                    'Adventure',
                    'Drama',
                    'Sci-Fi'
                ],
                language: [
                    'English',
                    'Hindi',
                    'Tamil',
                    'Malayalam',
                    'Japanese'
                ]
            }
        }
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
.sidebar {
    width: 11%;
    height: 100%;
    background-color: $primary-background-color;
    display: flex;
    flex-direction: column;
    .genre, .language {
        // padding-top: 50px;
        width: 100%;
        padding: 1rem;
        // padding-left: 1rem;
        ul, li {
            text-align: left;
            list-style: none;
            color: $text-color-grey;
            font-size: 19px;
            padding: 0px 0px 3px 3px;
            &:hover {
                cursor: pointer;
                color: #449845;
            }
        }
        .label {
            margin-bottom: 20px;
            color: $text-color-white;
        }
    }
}
</style>