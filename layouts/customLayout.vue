<template>
    <div class="layout">
        <navbar />
        <div class="hero">
            <div class="content">
                <Nuxt />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'customLayout'
}
</script>

<style lang="scss">
.layout {
    height: 100vh;
    .hero {
        display: flex;
        width: 100%;
        height: auto;
        .content {
            border-top-left-radius: 30px;
            width: 100%;
            background-color: $secondary-background-color;
        }
    }
}
</style>
