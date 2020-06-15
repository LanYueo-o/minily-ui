<template>
    <div class="ly-select--info"
         :class="[
             'ly-select--' + size,
             {
                 'is-disabled': disabled
             }
         ]"
        :style="{
            width: width + 'px'
        }"
         @click="handleClick">

        <span>{{ value === '' ? placeholder : value }}</span>
        <div class="ly-option-list" v-show="optionsStatus">
            <ul class="ly-option-ul">

                <li class="ly-empty" v-if="emptyData">暂无数据</li>
                <slot v-else>
                    <ly-option></ly-option>
                </slot>
            </ul>
        </div>

        <i :class="[
            'iconfont icon--down' ,
            optionsStatus ? 'ly-transform--down' : '',
            {
                'ly-transform--up': clickStatus && !optionsStatus
            }
        ]"></i>
    </div>
</template>

<script>
    import LyOption from './option.vue'
    export default {
        name: "ly-select",
        components:{
            LyOption
        },
        props:{
            placeholder: String,
            width: String,
            disabled: Boolean,
            size: {
                type: String,
                default: 'large'
            },
        },
        data(){
            return{
                optionsStatus: false,
                clickStatus: false,
                value: '',
            }
        },
        created() {
            this.$on('handleOptionClick', this.handleOptionClick);

            // 点击其他区域，关闭下拉框
            document.addEventListener('click', (e) => {
                if (!this.$el.contains(e.target)) this.optionsStatus = false
            })
        },
        computed:{
            emptyData(){
                return this.$slots.default === undefined;
            }
        },

        methods:{
            handleClick(){
                if (this.disabled) return;
                this.optionsStatus = !this.optionsStatus;
                this.clickStatus = true;
            },
            handleOptionClick(params){
                console.info(params)
                this.value = params.label;
                this.optionsStatus = false;
            }
        },
    }
</script>

<style scoped lang="scss">
    @import "index";
</style>
