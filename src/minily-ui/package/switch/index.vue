<template>
    <div class="ly-switch--box">
        <span class="ly-active-text" v-if="activeText" :style="active">{{ activeText }}</span>
        <div class="ly-switch"
             :class="[
                  { 'is-disabled': disabled }
              ]"
             :style="backGround"
             @click="handleChange">
        <span class="ly-switch--circle"
              :class="[
                  { 'is-move': isMove },
                  { 'is-move--status': isMoveStatus },
                  { 'is-disabled': disabled }
              ]"
        ></span>
        </div>
        <span class="ly-active-text un-active" v-if="untiveText" :style="unActive">{{ untiveText }}</span>
    </div>
</template>

<script>
    export default {
        name: "ly-switch",
        props:{
            activeColor: String,
            activeText: String,
            untiveColor: String,
            untiveText: String,
            value: Boolean,
            disabled: Boolean
        },
        data(){
            return{
                isMove: false,
                isMoveStatus: null
            }
        },
        computed:{
            backGround(){
                if (this.isMove) return 'background:' + this.activeColor;
                else return 'background:' + this.untiveColor
            },
            active(){
                if (this.isMove) return 'color:' + this.activeColor;
                else return 'color:' + this.untiveColor
            },
            unActive(){
                if (this.isMove) return 'color:' + this.untiveColor;
                else return 'color:' + this.activeColor
            }
        },
        mounted() {
            this.isMove = this.value;
        },
        methods:{
            handleChange(){
                if(!this.disabled){

                    this.isMove = !this.isMove;
                    this.isMoveStatus = !this.isMove;
                    this.$emit('change',this.isMove);
                }else {
                    return false
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "index";
</style>
