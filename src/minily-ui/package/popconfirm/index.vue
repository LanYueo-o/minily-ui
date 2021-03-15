<template>
    <div ref="pop" @click="showPop = !showPop">
        <slot>
            <ly-button type="primary" size="small">
                <span><slot></slot></span>
            </ly-button>
        </slot>

        <div v-show="showPop" class="ly-pop-confirm">
            <span class="content">{{ title }}</span>
            <div class="btn">
                <ly-button :type="confirmType" size="mini" @click="onConfirm">{{ confirmText }}</ly-button>
                <ly-button :type="cancelType" size="mini" @click="onCancel">{{ cancelText }}</ly-button>
            </div>
        </div>
    </div>
</template>

<script>
    import LyButton from '../button/index.vue'
    export default {
        name: "ly-pop-confirm",
        components:{
            LyButton
        },
        props:{
            confirmText: {
                type: String,
                default: '确认'
            },
            confirmType: {
                type: String,
                default: 'primary'
            },
            cancelText: {
                type: String,
                default: '取消'
            },
            cancelType: {
                type: String,
                default: 'text'
            },
            title: String,
        },
        data(){
            return{
                showPop: false
            }
        },
        created() {
            document.addEventListener('click', (e) => {
                if (!this.$el.contains(e.target)) this.showPop = false
            })
        },
        methods:{
            onConfirm(){
                this.$emit('onConfirm');
            },
            onCancel(){
                this.$emit('onCancel');
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "index.scss";
</style>
