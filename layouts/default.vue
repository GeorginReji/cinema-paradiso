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

<style lang="scss">
.layout {
    display: grid;
    grid-template-columns: minmax(200px, 10%) 1fr;
}
</style>
