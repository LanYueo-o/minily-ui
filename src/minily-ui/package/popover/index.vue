<template>
    <div @click="showPopOver = !showPopOver"
         @mouseenter="mouseenter"
         @mouseleave="mouseleave"
    >
        <transition name="slide-fade">
            <div class="ly-pop-over" v-if="showPopOver"
                 ref="popover"
                :class="[
                     placement ? 'is--' + placement : '',
                ]"
            >
                <span>{{ title }}</span>
                <p>
                    {{ content }}
                </p>
            </div>
        </transition>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ly-pop-over",
        props:{
            title: String,
            trigger: {
                type: String,
                default: 'click'
            },
            content: String,
            placement:{
                type: String,
                default: 'top'
            }
        },
        data(){
            return{
                showPopOver: false
            }
        },
        watch:{
            showPopOver(val){
                if(this.placement === 'top'){
                    if(val){
                        this.$nextTick(()=>{
                            this.$refs['popover'].style.marginTop = -(this.$refs['popover'].offsetHeight + 10) + 'px'
                        })
                    }
                }
            }
        },
        created() {
            document.addEventListener('click',(e)=>{
                if(!this.$el.contains(e.target)) this.showPopOver = false;
            })
        },
        methods:{
            mouseenter(){
                switch (this.trigger) {
                    case 'click':
                        return false;
                    case 'hover':
                        return this.showPopOver = !this.showPopOver;
                    default:
                        return false;
                }
            },

            mouseleave(){
                switch (this.trigger) {
                    case 'click':
                        return false;
                    case 'hover':
                        return this.showPopOver = false;
                    default:
                        return false;
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "index";
</style>
