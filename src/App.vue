<template>
    <div id="app">
        <div align="left">基础按钮</div>
        <div class="top">
            <ly-button type="info" size="small" @click="handleSubmit">普通按钮</ly-button>
            <ly-button type="primary" size="small">普通按钮</ly-button>
            <ly-button type="warn" size="small">警告按钮</ly-button>
            <ly-button type="danger" size="small">危险按钮</ly-button>
            <ly-button type="success" size="small">成功按钮</ly-button>
        </div>

        <div align="left">基础按钮--不同大小 mini，small，medium，large</div>
        <div class="top">
            <ly-button type="info" size="mini">普通按钮</ly-button>
            <ly-button type="primary" size="small">普通按钮</ly-button>
            <ly-button type="warn" size="small">警告按钮</ly-button>
            <ly-button type="danger" size="medium">危险按钮</ly-button>
            <ly-button type="success" size="large" @click="handleSubmit">成功按钮</ly-button>
        </div>

        <div align="left">基础按钮--禁用状态</div>
        <div class="top">
            <ly-button type="info" size="mini" :disabled="true">普通按钮</ly-button>
            <ly-button type="primary" size="small" disabled>普通按钮</ly-button>
            <ly-button type="warn" size="small" :disabled="true">警告按钮</ly-button>
            <ly-button type="danger" size="medium" :disabled="true">危险按钮</ly-button>
            <ly-button type="success" size="large" :disabled="true" @click="handleSubmit">成功按钮</ly-button>
        </div>

        <div align="left">基础按钮--圆角按钮</div>
        <div class="top">
            <ly-button type="info" size="mini" round>普通按钮</ly-button>
            <ly-button type="primary" size="small" round>普通按钮</ly-button>
            <ly-button type="warn" size="small" round>警告按钮</ly-button>
            <ly-button type="danger" size="medium" round>危险按钮</ly-button>
            <ly-button type="success" size="large" round @click="handleSubmit">成功按钮</ly-button>
        </div>

        <div align="left">基础按钮--文字按钮</div>
        <div class="top">
            <ly-button type="text">文字按钮</ly-button>
            <ly-button type="text" disabled>文字按钮</ly-button>
            <ly-button type="text">文字按钮</ly-button>
            <ly-button type="text" disabled>文字按钮</ly-button>
        </div>

        <div align="left">input输入框--基本用法</div>
        <div class="top">
            <ly-input v-model="text" @input="handleInput" placeholder="请输入内容" width="350"></ly-input>
            <ly-input v-model="text" @input="handleInput" placeholder="请输入内容" disabled></ly-input>
        </div>
        <div class="top">
            <ly-input v-model="text" @input="handleInput" placeholder="请输入内容" clearable></ly-input>
            <ly-input v-model="text" @input="handleInput" placeholder="请输入内容" showPassword width="350"></ly-input>
        </div>
        <div align="left">input输入框-大小--mini, small, medium, large</div>
        <div class="top">
            <ly-input v-model="text" @input="handleInput" placeholder="请输入内容" size="mini"></ly-input>
            <ly-input v-model="text" @input="handleInput" placeholder="请输入内容" size="small"></ly-input>
        </div>
        <div class="top">
            <ly-input v-model="text" @input="handleInput" placeholder="请输入内容" size="medium"></ly-input>
            <ly-input v-model="text" @input="handleInput" placeholder="请输入内容" size="large"></ly-input>
        </div>
        <div align="left">input输入框--属性使用icon</div>
        <div class="top">
            <ly-input v-model="text" @search="handleSearch" placeholder="请输入内容" size="mini" beforeIcon="icon--search"></ly-input>
            <ly-input v-model="text" placeholder="请输入内容" size="mini" beforeIcon="icon--date"></ly-input>
        </div>


        <div align="left">基础组件--下拉框</div>
        <div class="top">
            <ly-select v-model="value" placeholder="请选择" width="200">
                <ly-option
                    v-for="(item,index) in options"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                >
                </ly-option>
            </ly-select>

            <ly-select v-model="value" placeholder="请选择" width="200" size="medium">
                <ly-option
                    v-for="(item,index) in options"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                >
                </ly-option>
            </ly-select>
        </div>
        <div class="top">
            <ly-select v-model="value" placeholder="请选择" width="200" disabled size="small">
                <ly-option
                    v-for="(item,index) in options"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                >
                </ly-option>
            </ly-select>

            <ly-select v-model="value" placeholder="请选择" width="200" size="mini">
                <ly-option
                    v-for="(item,index) in options1"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                >
                </ly-option>
            </ly-select>
        </div>


        <div align="left">基础组件--单选框</div>
        <div class="top">
            <ly-radio v-model="radio" label="1" @change="handleChange" disabled>单选框</ly-radio>
            <ly-radio v-model="radio" label="2" @change="handleChange">单选框</ly-radio>
        </div>
        <div class="top">
            <ly-radio v-model="radio" label="3" @change="handleChange">单选框</ly-radio>
            <ly-radio v-model="radio" label="4" @change="handleChange">单选框</ly-radio>
        </div>
    </div>
</template>

<script>
    import lyButton from './minily-ui/package/button'
    import lyInput from './minily-ui/package/input'
    import lySelect from './minily-ui/package/select/select'
    import lyOption from './minily-ui/package/select/option'
    import LyRadio from './minily-ui/package/radio/index'
    export default {
        name: 'app',
        components:{
            lyButton,
            lyInput,
            lySelect,
            lyOption,
            LyRadio
        },
        data(){
            return{
                text: '',

                value: '',
                options: [{
                    value: '0',
                    label: '选项1'
                }, {
                    value: '1',
                    label: '选项2'
                }, {
                    value: '2',
                    label: '选项3'
                },{
                    value: '0',
                    label: '选项1'
                }, {
                    value: '1',
                    label: '选项2'
                }, {
                    value: '2',
                    label: '选项3'
                },{
                    value: '0',
                    label: '选项1'
                }, {
                    value: '1',
                    label: '选项2'
                }, {
                    value: '2',
                    label: '选项3'
                },{
                    value: '0',
                    label: '选项1'
                }, {
                    value: '1',
                    label: '选项2'
                }, {
                    value: '2',
                    label: '选项3'
                }],
                options1: [],
                radio: 2,
            }
        },
        methods:{
            handleSubmit(){
                console.info('点击事件传递ok')
            },
            handleInput(value){
                console.info(value)
            },
            handleSearch(value){
                alert(value)
            },
            handleChange(value){
                // console.info(value)
                // this.radio = this.value;
            }
        },
        mounted() {

        }
    }
</script>

<style lang="scss">
    html,body{
        margin: 0;
        padding: 0;
        border: 0;
        width: 100%;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        padding: 20px 20px 200px 20px;
        position: relative;
        left: 30%;
        .top{
            margin: 20px 0;
            display: flex;
            justify-content: flex-start;
        }
    }
</style>
