<template>
    <div class="ly-dialog-model" v-if="visible">
        <div class="ly-dialog-info"
             :style="{ width: width }">
            <div class="ly-title">
                <span>{{ title }}</span>
                <i v-if="showClose" @click="visible = false" class="iconfont icon--close"></i>
            </div>
            <div class="content">
                <span v-if="message">{{ message }}</span>
                <slot v-else></slot>
                <span v-if="showInput" class="show-input">
                    <ly-input @input="handleInput" type="text" size="small" />
                </span>
            </div>
            <div class="ly-dialog-footer">
                <span v-if="options">
                    <ly-button type="info" size="small" @click="cancelClose" v-if="showCancelButton">{{ options.concelButtonText }}</ly-button>
                    <ly-button type="primary" size="small" @click="successDialog">{{ options.confirmButtonText }}</ly-button>
                </span>
                <slot v-else name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    import LyButton from '../../button/index.vue'
    import LyInput from '../../input/index.vue'
    export default {
        name: "ly-message-box",
        components:{
            LyButton,
            LyInput
        },
        props:{
            title: String,
            message: String,
            options: Object,
            visible: {
                type: Boolean,
                default: false
            },
            width: {
                type: String,
                default: '400px'
            },
            showClose:{
                type: Boolean,
                default: true
            },
            close: Function,
            callback: Function,
            showCancelButton: {
                type: Boolean,
                default: false
            },
            showInput: {
                type: Boolean,
                default: false
            },
            success: Function,
            cancel: Function
        },
        data(){
            return{
                userInput: ''
            }
        },
        methods:{
            handleInput(value){
                this.userInput = value;
            },
            cancelClose(){
                this.cancel();
                this.visible = false;
            },
            successDialog(){
                if(this.showInput) this.success(this.userInput);
                else this.success();
                this.visible = false;
            }
        },
    }
</script>

<style scoped lang="scss">
    @import "index";
</style>
