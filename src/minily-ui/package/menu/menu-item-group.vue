<template>
    <li class="ly-menu-item-group">
        <div class="ly-menu-item-title" @click="handleClick">
            <template v-if="!$slots.title">{{ title }}</template>
            <slot v-else name="title"></slot>
            <i v-if="$slots.default !== undefined" ref="rota" :class="['iconfont icon--down','ly-select',
                itemStatus ? 'ly-transform--down' : '',
                {
                    'ly-transform--up': clickStatus && !itemStatus
                }
            ]"></i>
        </div>

        <ul class="ly-children">
            <slot v-if="opened"></slot>
        </ul>
    </li>
</template>

<script>
    import Dispatch from "../../../unit/dispatch";
    export default {
        name: "ly-menu-item-group",
        inject:['rootMenu'],
        mixins:[Dispatch],
        computed:{
            levelPadding(){
                let padding = 20;
                let parent = this.$parent;
                if (this.rootMenu.collapse) return 20;
                while (parent && parent.$options.name !== 'ly-menu') {
                    if (parent.$options.name === 'ly-submenu') {
                        padding += 20;
                    }
                    parent = parent.$parent;
                }
                return padding;
            }
        },
        // props:{
        //     opened: Boolean
        // },
        data(){
            return{
                itemStatus: false,
                clickStatus: false,
                opened: false
            }
        },
        methods:{
            handleClick(){
                this.opened = !this.opened;

                this.itemStatus = !this.itemStatus;
                this.clickStatus = true;

                this.dispatch('ly-menu','openMenu',this.opened)
            }
        },
        mounted() {
            console.info(this.$slots.default)
        }
    }
</script>

<style scoped lang="scss">
    @import "main";
</style>
