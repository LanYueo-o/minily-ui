<template>
    <div>
        <!--info-->
        <button
            class="ly-button"
            @click="handleClick"
            :disabled="buttonDisabled"
            :class="[
                type ? 'ly-button--' + type : '',
                buttonSize ? 'ly-button--' + buttonSize : '',
                {
                    'is-disabled': buttonDisabled,
                    'is-round': round
                }
            ]"
        >
            <span><slot></slot></span>
        </button>
    </div>
</template>

<script>
    export default {
        name: "ly-button",
        props:{
            type:String,
            size: String,
            disabled: Boolean,
            round: Boolean
        },
        computed:{
            buttonSize(){
                return this.size;
            },
            buttonDisabled(){
                return this.disabled;
            }
        },
        methods:{
            handleClick(evt){
                this.$emit('click',evt);
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "index";
</style>
