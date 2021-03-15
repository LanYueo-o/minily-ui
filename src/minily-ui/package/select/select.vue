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

        <input
            class="ly-input"
            :class="[
                {
                    'is-disabled': disabled
                }
            ]"
            :value="value"
            :disabled="disabled"
            :placeholder="placeholder"
        />
        <div class="ly-option-list" v-show="optionsStatus">
            <ul class="ly-option-ul">

                <li class="ly-empty" v-if="emptyData">暂无数据</li>
                <slot v-else>
                    <ly-option></ly-option>
                </slot>
            </ul>
        </div>

        <i v-if="!clearable || value === ''" :class="[
            'iconfont icon--down' ,
            optionsStatus ? 'ly-transform--down' : '',
            {
                'ly-transform--up': clickStatus && !optionsStatus
            }
        ]"></i>

        <i v-if="clearable && value !== ''" class="iconfont icon--clearable" @click="handleClean"></i>
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
            placeholder: {
                type: String,
                default: '请选择'
            },
            width: String,
            disabled: Boolean,
            size: {
                type: String,
                default: 'large'
            },
            clearable: {
                type: Boolean,
                default: false
            }
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
                this.value = params.label;
                this.optionsStatus = false;
            },

            handleClean(){
                this.value = '';
            }
        },
    }
</script>

<style scoped lang="scss">
    @import "index";
</style>
