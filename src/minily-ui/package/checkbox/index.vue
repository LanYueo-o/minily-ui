<template>
    <label
        class="ly-check-box"
        :class="[
            { 'is-checked': isChecked },
            { 'is-disabled': disabled }
        ]"
    >
        <span class="ly-checkbox--input">
            <span class="ly-checkbox--info"
                :class="[
                    {'is-checked': isChecked},
                    { 'is-disabled': disabled }
                ]"
            ></span>
            <input
                type="checkbox"
                v-model="model"
                class="ly-checkbox--none"
                @change="handleChange"
            />
        </span>
        <span :class="[
                {'ly-checkbox--span': isChecked},
                { 'is-disabled': disabled }
            ]">
            <slot></slot>
        </span>
    </label>
</template>

<script>
    export default {
        name: "ly-check-box",
        props:{
            value: Boolean,
            disabled: Boolean
        },
        computed: {
            model: {
                get() {
                    return this.value;
                },
                set(val) {
                    if(!this.disabled){
                        this.$emit('input', val);
                    }else {
                        return false;
                    }
                }
            },
            isChecked(){
                if({}.toString.call(this.model) === '[object Boolean]'){
                    return this.model;
                }
            }
        },
        methods:{
            handleChange(){
                if(!this.disabled){
                    this.$emit('change', !this.value);
                }else {
                    return false;
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "index";
</style>
