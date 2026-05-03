<template>
    <div class="layout">
        <sidebar />
        <div class="hero">
            <navbar />
            <Nuxt />
        </div>
    </div>
</template>

<script>
export default {
    name: 'defaultLayout'
}
</script>

<style lang="scss" scoped>
.layout {
    min-height: 100vh;
    display: flex;
    flex-direction: row;

    .sidebar {
        width: 240px;
        min-height: 100vh;
        flex: 0 0 240px;
        position: sticky;
        top: 0;
        align-self: flex-start;
    }

    .hero {
        display: flex;
        flex: 1;
        flex-direction: column;
        min-width: 0;
    }

    .navbar {
        top: 0;
        z-index: 10;
    }
}
</style>
