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
                    'is-round': round,
                    'is-loading': loading
                }
            ]"
        >
            <i v-if="loading" class="iconfont icon--loading animation-icon"></i>
            <span><slot></slot></span>
        </button>
    </div>
</template>

<script>
    export default {
        name: "ly-button",
        props:{
            type:{
                type: String,
                default: 'primary'
            },
            size: {
                type: String,
                default: 'small'
            },
            disabled: Boolean,
            round: Boolean,
            loading: Boolean
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
                if(this.loading) return false;
                this.$emit('click',evt);
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "index";
</style>
