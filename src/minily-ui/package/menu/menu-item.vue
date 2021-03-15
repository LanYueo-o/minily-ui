<template>
    <li class="ly-menu-item"
        role="menuitem"
        tabindex="-1"
        :style="[paddingStyle]"
        :class="{
            'is-active': active,
            'is-disabled': disabled
        }">
        <!--正常大小显示-->
        <template>
            <slot></slot>
            <slot name="title"></slot>
        </template>
    </li>
</template>

<script>
    import Menu from './menuMixin.js'
    export default {
        name: "ly-menu-item",
        mixins:[Menu],
        props:{
            active: Boolean,
            disabled: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "main";
</style>
