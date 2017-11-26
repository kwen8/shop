<template>
    <Menu :theme="menuTheme" active-name="member_index" width="auto" @on-select=changeMenu>   
        <template v-for="item in menuList">
            <MenuItem v-if="item.children.length<=1" :name="item.children[0].name" :key="item.path">
                <Icon :type="item.icon" :key="item.path"></Icon>
                {{item.title}}
            </MenuItem>
            <Submenu v-if="item.children.length > 1" :name="item.name" :key="item.path">
                <template slot="title">
                    <Icon :type="item.icon" :size="iconSize"></Icon>
                    <span class="layout-text">{{ item.title }}</span>
                </template>
                <template v-for="child in item.children">
                    <MenuItem :name="child.name" :key="child.name">
                        <Icon :type="child.icon" :size="iconSize" :key="child.name"></Icon>
                        <span class="layout-text" :key="child.name">{{ child.title }}</span>
                    </MenuItem>
                </template>
            </Submenu>
        </template>
    </Menu>
</template>
<script>
    export default {
        name: 'sidebarMenu',
        data () {
            return {
                
            }
        },
        props: {
            menuTheme: {
                type: String,
                default: 'dark'
            },
            menuList: Array,
            iconSize: Number
        },
        methods: {
            changeMenu (active) {
                this.$emit('on-change', active);
            }
        }
    }
</script>