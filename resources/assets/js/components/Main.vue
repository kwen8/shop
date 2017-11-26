<template>
    <div class="main">
        <div class="sidebar-menu-con">
            <shrinkable-menu :theme="menuTheme"></shrinkable-menu>
        </div>
    </div>
</template>

<script>
    import shrinkableMenu from './main-components/menu/shrinkable-menu'
    export default {
        components: {
            shrinkableMenu
        },
        computed: {
            menuTheme () {
                return 'dark'
            }
        }
    }
</script>

<style lang="sass">
    @import "./main.scss"
</style>