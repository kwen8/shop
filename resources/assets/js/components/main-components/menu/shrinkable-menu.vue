<style lang="sass">
    @import "./style/menu.scss"   
</style>

<template>
    <div :style="{background: bgColor}" class="ivu-shrinkable-menu">
        <slot name="top"></slot>
        <sidebar-menu 
            :menu-theme="theme"
            @on-change="handleChange"
            :menu-list="menuList"
        >
        </sidebar-menu>
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
            menuList: Array
        },
        computed: {
            bgColor () {
                return this.theme === 'dark'? '#495060' : 'fff'
            }
        },
        methods: {
            handleChange (name) {
                this.$router.push({
                    name: name
                })
            }
        }
    }
</script>