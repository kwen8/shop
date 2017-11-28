<template>
    <div class="main">
        <div class="sidebar-menu-con">
            <shrinkable-menu 
                :theme="menuTheme"
                :menu-list="menuList"
            >
                <div slot="top">
                    <h1 style="color: #fff;text-align: center;">shop</h1>
                </div>
            </shrinkable-menu>
        </div>
        <div class="single-page-con" :style="{left: '200px'}">
            <div class="single-page">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    import shrinkableMenu from './main-components/menu/shrinkable-menu'
    import { appRouter } from '../router/router'
    export default {
        components: {
            shrinkableMenu
        },
        computed: {
            menuTheme () {
                return 'dark'
            },
            menuList () {
                return appRouter
            }
        }
    }
</script>

<style lang="sass">
    @import "./main.scss"
</style>