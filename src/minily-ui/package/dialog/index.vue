<template>
    <div class="ly-dialog-model" v-if="visible">
        <div class="ly-dialog-info"
             :style="{ width: width }">
            <div class="ly-title">
                <span>{{ title }}</span>
                <i v-if="showClose" @click="closeDialog" class="iconfont icon--close"></i>
            </div>
            <div class="content">
                <slot></slot>
            </div>
            <div class="ly-dialog-footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ly-dialog",
        props:{
            title: String,
            visible: {
                type: Boolean,
                default: false
            },
            width: {
                type: String,
                default: '450px'
            },
            showClose:{
                type: Boolean,
                default: true
            },
            close: Function
        },
        methods:{
            closeDialog(){
               if(typeof this.close === 'function'){
                   this.close(this.hide());
               }else {
                   this.hide();
               }
            },
            hide(cancel) {
                if (cancel !== false) {
                    this.$emit('update:visible', false);
                    this.$emit('close');
                }
            }
        },
        // watch:{
        //     visible(oldValue,val){
        //         if(oldValue){
        //
        //         }else {
        //
        //         }
        //     }
        // }
    }
</script>

<style scoped lang="scss">
    @import "src/minily-ui/package/messagebox/src/index";
</style>
