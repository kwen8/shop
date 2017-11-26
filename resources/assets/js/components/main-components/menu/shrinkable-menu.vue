<style lang="sass">
    @import "./style/menu.scss"   
</style>

<template>
    <div :style="{background: bgColor}" class="ivu-shrinkable-menu">
        <slot name="top"></slot>
        <sidebar-menu :menu-theme="theme"></sidebar-menu>
    </div>
</template>

<script>
    import sidebarMenu from './components/sidebarMenu'
    export default {
        components: {
            sidebarMenu
        },
        props: {
            theme: {
                type: String,
                default: 'dark'
            },
        },
        computed: {
            bgColor () {
                return this.theme === 'dark'? '#495060' : 'fff'
            }
        }
    }
</script>