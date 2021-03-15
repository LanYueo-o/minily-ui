<template>
    <ul class="ly-menu ly-menu-vertical"
        :style="{ backgroundColor: backgroundColor,color:textColor }">
        <slot></slot>
    </ul>
</template>
<script type="text/jsx">
    export default {
        name: "ly-menu",
        provide() {
            return {
                rootMenu: this
            };
        },
        props:{
            backgroundColor: String,
            textColor: String
        },
        mounted() {
            this.$on('openMenu', this.openMenu);
        },
        methods:{
            openMenu(item){
                console.info(item)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "main.scss";
</style>
