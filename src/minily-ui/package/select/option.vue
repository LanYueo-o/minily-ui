<template>
    <li ref="active" class="ly-option-li" @click.stop="clickItem">
        <span class="ly-item">{{ label }}</span>
    </li>
</template>

<script>
    import Dispatch from '../../../unit/dispatch';
    export default {
        name: "ly-option",
        mixins: [Dispatch],
        props:{
            label: [String, Number],
            value: [String, Number],
        },
        methods:{
            clickItem(evt){
                let arr = evt.currentTarget.parentElement.childNodes;
                Object.keys(arr).forEach((key)=>{
                    arr[key].classList.remove('active')
                })

                this.$refs['active'].classList.add('active')

                this.dispatch('ly-select', 'handleOptionClick', {
                    value: this.value,
                    label: this.label
                });
            }
        },
    }
</script>

<style scoped lang="scss">
    @import "index";
</style>
