<template>
    <div class="ly-input--container"
        @mouseenter="hovering = true"
        @mouseleave="hovering = false"
    >

        <!--输入编辑器前置append内容-->
        <span class="ly-input-before" v-if="beforeIcon">
            <i :class="'iconfont ' + beforeIcon"></i>
        </span>
        <input
            class="ly-input--info"
            :class="[
                size ? 'ly-input--' + size : '',
                beforeIcon ? 'padding-move' : '',
                {
                    'is-disabled': disabled
                }
            ]"
            :style="{ width : width + 'px'}"
            :value="value"
            :maxlength="maxlength"
            :minlength="minlength"
            :placeholder="placeholder"
            :disabled="disabled"
            :type="showPassword ? (passwordVisible ? 'text': 'password') : type"
            @compositionstart="handleCompositionStart"
            @compositionupdate="handleCompositionUpdate"
            @compositionend="handleCompositionEnd"
            @input="handleInput"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"
            @search="handleSearch"
        />
        <!--此处涉及\s:匹配任意空白符  \S:匹配任意非空白字符-->

        <!--输入编辑器后置append内容-->
        <span class="ly-input-fix" v-if="showClearAble || showPass || afterIcon">
            <!--clearable-->
            <span v-if="showClearAble" @click="handleClear">
                <i class="iconfont icon--clearable"></i>
            </span>

            <!--password-->
            <span v-if="showPass" class="ly-input--psw" @click="handlePswChange">
                <i v-if="!passwordVisible" class="iconfont icon--password-close"></i>
                <i v-else class="iconfont icon--password-open"></i>
            </span>

            <i v-if="afterIcon" @click="handleClick(afterIcon)" :class="'iconfont ' + afterIcon"></i>
        </span>

    </div>
</template>

<script>
    export default {
        name: "ly-input",
        props:{
            value:[String, Number],
            placeholder: String,
            disabled: Boolean,
            clearable:{
                type: Boolean,
                default: false
            },
            showPassword:{
                type: Boolean,
                default: false
            },
            type:{
                type: String,
                default: 'text'
            },
            size: {
                type: String,
                default: 'larger'
            },
            beforeIcon: String,
            afterIcon: String,
            width: String,
            maxlength: Number,
            minlength: Number
        },
        data(){
            return{
                isComposition: false,
                isFocus: false,
                hovering: false,
                passwordVisible: false
            }
        },
        computed:{
            showClearAble(){
                return  this.clearable &&
                    !this.disabled &&
                    this.value !== '' &&
                    (this.isFocus || this.hovering)
            },
            showPass(){
                return  this.showPassword &&
                    !this.disabled
            },
        },
        methods:{
            handleCompositionStart(){
                // 输入编辑器开始中文输入时，会触发这个事件
                this.isComposition = true;
            },
            handleCompositionUpdate(evt){
                const text = evt.target.value;
                const lastCharacter = text[text.length - 1] || '';
                const reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi;
                this.isComposition = !reg.test(lastCharacter);
            },
            handleCompositionEnd(evt){
                if(this.isComposition){
                    this.isComposition = false;
                    this.handleInput(evt);
                }
            },
            handleInput(evt){
                // 如果用户没有触发输入 handleCompositionStart 事件，则不触发 handleInput 事件
                if(this.isComposition) return;
                this.$emit('input',evt.target.value);
            },
            handleFocus(evt){
                this.isFocus = true;
                this.$emit('focus',evt)
            },
            handleBlur(evt){
                this.isFocus = false;
                this.$emit('blur',evt)
            },
            handleChange(evt){
                this.$emit('change',evt.target.value);
            },

            handleClear(){
                this.$emit('input', '');
                this.$emit('change', '');
                this.$emit('clear');
            },

            handlePswChange(){
                this.passwordVisible = !this.passwordVisible;
            },

            handleClick(afterIcon){
                if(afterIcon.indexOf('search') > -1){
                    this.handleSearch();
                }else {
                    return false;
                }
            },

            handleSearch(){
                this.$emit('search',this.value);
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "index";
</style>
