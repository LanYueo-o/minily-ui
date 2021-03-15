<template>
    <div id="app">
        <div align="left">基础按钮</div>
        <div class="top">
            <ly-button type="info" size="small" @click="handleSubmit">普通按钮</ly-button>
            <ly-button type="primary" size="small">普通按钮</ly-button>
            <ly-button type="warn" size="small">警告按钮</ly-button>
            <ly-button type="danger" size="medium">危险按钮</ly-button>
            <ly-button type="success" size="medium" @click="handleSubmit">成功按钮</ly-button>
        </div>

        <div align="left">基础按钮--不同大小 mini，small，medium，large</div>
        <div class="top">
            <ly-button type="info" size="mini" :loading="true">普通按钮</ly-button>
            <ly-button type="primary" size="small" :loading="true">普通按钮</ly-button>
            <ly-button type="warn" size="small" :loading="true">警告按钮</ly-button>
            <ly-button type="danger" size="medium" :loading="true">危险按钮</ly-button>
            <ly-button type="success" size="medium" :loading="true" @click="handleSubmit">成功按钮</ly-button>
        </div>

        <div align="left">基础按钮--禁用状态</div>
        <div class="top">
            <ly-button type="info" size="mini" :disabled="true">普通按钮</ly-button>
            <ly-button type="primary" size="small" disabled>普通按钮</ly-button>
            <ly-button type="warn" size="small" :disabled="true">警告按钮</ly-button>
            <ly-button type="danger" size="medium" :disabled="true">危险按钮</ly-button>
            <ly-button type="success" size="medium" :disabled="true" @click="handleSubmit">成功按钮</ly-button>
        </div>

        <div align="left">基础按钮--圆角按钮</div>
        <div class="top">
            <ly-button type="info" size="mini" round>普通按钮</ly-button>
            <ly-button type="primary" size="small" round>普通按钮</ly-button>
            <ly-button type="warn" size="small" round>警告按钮</ly-button>
            <ly-button type="danger" size="medium" round>危险按钮</ly-button>
            <ly-button type="success" size="medium" round @click="handleSubmit">成功按钮</ly-button>
        </div>

        <div align="left">基础按钮--文字按钮</div>
        <div class="top">
            <ly-button type="text">文字按钮</ly-button>
            <ly-button type="text" disabled>文字按钮</ly-button>
            <ly-button type="text">文字按钮</ly-button>
            <ly-button type="text" disabled>文字按钮</ly-button>
            <ly-button type="text">文字按钮</ly-button>
        </div>

        <div align="left">input输入框--基本用法</div>
        <div class="top">
            <ly-input v-model="text" :maxlength="5" @input="handleInput" placeholder="请输入内容" width="350"></ly-input>
            <ly-input v-model="text" :minlength="3" @input="handleInput" placeholder="请输入内容" disabled></ly-input>
        </div>
        <div class="top">
            <ly-input v-model="text" @input="handleInput" placeholder="请输入内容" clearable></ly-input>
            <ly-input v-model="text" @input="handleInput" placeholder="请输入内容" show-password width="350"></ly-input>
        </div>
        <div align="left">input输入框-大小--mini, small, medium, large</div>
        <div class="top">
            <ly-input v-model="text" @input="handleInput" placeholder="请输入内容" size="mini"></ly-input>
            <ly-input v-model="text" @input="handleInput" placeholder="请输入内容" size="small"></ly-input>
        </div>
        <div class="top">
            <ly-input v-model="text" @input="handleInput" placeholder="请输入内容" size="mini"></ly-input>
            <ly-input v-model="text" @input="handleInput" placeholder="请输入内容" size="small"></ly-input>
        </div>
        <div align="left">input输入框--属性使用icon</div>
        <div class="top">
            <ly-input v-model="text" @search="handleSearch" placeholder="请输入内容" size="mini" after-icon="icon--search"></ly-input>
            <ly-input v-model="text" placeholder="请输入内容" size="mini" after-icon="icon--date"></ly-input>
        </div>
        <div class="top">
            <ly-input v-model="text" @search="handleSearch" placeholder="请输入内容" size="mini" before-icon="icon--search"></ly-input>
            <ly-input v-model="text" placeholder="请输入内容" size="mini" before-icon="icon--date"></ly-input>
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
            <ly-radio v-model="radio" label="2" @change="handleChange" disabled>单选框</ly-radio>
        </div>

        <div align="left">基础组件--复选框</div>
        <div class="top">
            <ly-check-box v-model="checked" @change="handleCheckBox">复选框</ly-check-box>
            <ly-check-box v-model="checked1" @change="handleCheckBox">复选框</ly-check-box>
        </div>
        <div class="top">
            <ly-check-box v-model="checked1" disabled @change="handleCheckBox">复选框</ly-check-box>
            <ly-check-box v-model="checked" disabled @change="handleCheckBox">复选框</ly-check-box>
        </div>

        <div align="left">基础组件--switch开关</div>
        <div class="top">
            <ly-switch
                v-model="switchValue"
                active-color="#5095fb"
                untive-color="#dcdfe6"
                @change="switchChange"
            ></ly-switch>
        </div>
        <div class="top">
            <ly-switch
                v-model="switchValue"
                active-color="red"
                active-text="开启"
                untive-color="#dcdfe6"
                untive-text="关闭"
                disabled
                @change="switchChange"
            ></ly-switch>
        </div>
        <div class="top">
            <ly-switch
                v-model="switchValue"
                active-color="green"
                active-text="每周三"
                untive-color="#dcdfe6"
                untive-text="每周六"
                @change="switchChange"
            ></ly-switch>
        </div>
        <div class="top">
            <ly-switch
                v-model="switchValue"
                active-color="#5095fb"
                untive-color="#dcdfe6"
                active-text="按年付费"
                untive-text="按月付费"
                disabled
                @change="switchChange"
            ></ly-switch>
        </div>


        <div align="left">基础组件--时间选择器</div>
        <div class="top">
            <ly-time-picker
                v-model="timeValue"
                :picker-options="{
                    start: '06:00',
                    step: '10',
                    end: '09:00'
                }"
                placeholder="请选择时间"
                clearable
            >
            </ly-time-picker>
            <ly-time-picker
                v-model="timeValue"
                :picker-options="{
                    start: '06:00',
                    step: '20',
                    end: '11:00'
                }"
                placeholder="请选择时间"
            >
            </ly-time-picker>
        </div>
        <div class="top">
            <ly-time-picker
                v-model="timeValue"
                :picker-options="{
                    start: '06:00',
                    step: '30',
                    end: '12:00'
                }"
                placeholder="请选择时间"
            >
            </ly-time-picker>
            <ly-time-picker
                v-model="timeValue"
                disabled
                :picker-options="{
                    start: '06:00',
                    step: '30',
                    end: '11:00'
                }"
                placeholder="请选择时间"
            >
            </ly-time-picker>
        </div>


        <div align="left">基础组件--气泡确认框</div>
        <div class="top">
            <ly-pop-confirm
                confirmText="好的"
                confirmType="text"
                cancelText="不用了"
                cancelType="primary"
                title="你确定要进行不可恢复的删除操作吗？"
            >
                <ly-button size="mini" type="danger">删除</ly-button>
            </ly-pop-confirm>

            <ly-pop-confirm
                confirmText="取消"
                confirmType="danger"
                cancelText="删除"
                cancelType="primary"
                title="你确定删除操作吗？"
                @onConfirm="handleConfirm"
                @onCancel="handleCancel"
            >
                <ly-button size="mini" type="success">确认打开</ly-button>
            </ly-pop-confirm>
        </div>


        <div align="left">基础组件--Popover 弹出框</div>
        <div class="top">
            <ly-pop-over
                title="提示"
                content="这里是主要的提示内容,用来展示你的提示内容,用来展示你的提示内容,用来展示你的提示内容,用来展示你的提示内容"
                trigger="click"
                placement="top"
            >
                <ly-button>click激活</ly-button>
            </ly-pop-over>

            <ly-pop-over
                title="提示"
                content="这里是主要的提示内容"
                trigger="hover"
                placement="bottom"
            >
                <ly-button type="success">hover激活</ly-button>
            </ly-pop-over>

            <ly-pop-over
                title="提示"
                content="这里是主要的提示内容"
                trigger="click"
                placement="bottom"
            >
                <ly-button type="danger">click激活</ly-button>
            </ly-pop-over>

            <ly-pop-over
                title="提示"
                content="这里是主要的提示内容,用来展示你的提示内容"
                trigger="hover"
                placement="top"
            >
                <ly-button type="info">hover激活</ly-button>
            </ly-pop-over>
        </div>

        <div align="left">基础组件--dialog 对话框</div>
        <div class="top">
            <ly-button type="success" size="small" @click="dialogVisible = true">打开dialog</ly-button>
            <ly-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="300px"
                :close="handleClose"
            >
                <span>提示的具体信息内容</span>
                <span slot="footer">
                    <ly-button type="info" size="small" @click="dialogVisible = false">取消</ly-button>
                    <ly-button type="danger" size="small" @click="dialogVisible = false">确定</ly-button>
                </span>
            </ly-dialog>

            <ly-button type="warn" size="small" @click="dialogVisible1 = true">打开dialog</ly-button>
            <ly-dialog
                title="提示"
                :visible.sync="dialogVisible1"
                width="800px"
            >
                <div v-for="(item,index) in tableList" :key='index'>
                    <table border="0" class="ly-table">
                        <tr>
                            <th>参数</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>可选值</th>
                            <th>默认值</th>
                        </tr>
                        <tr v-for="(child,index) in item.childList" :key='index'>
                            <td>{{ child.query }}</td>
                            <td>{{ child.info }}</td>
                            <td>{{ child.type }}</td>
                            <td>{{ child.choose }}</td>
                            <td>{{ child.default }}</td>
                        </tr>
                    </table>
                </div>
                <span slot="footer">
                    <ly-button type="info" size="small" @click="dialogVisible1 = false">取消</ly-button>
                    <ly-button type="danger" size="small" @click="dialogVisible1 = false">确定</ly-button>
                </span>
            </ly-dialog>
        </div>


        <div align="left">基础组件--MessageBox 弹出框</div>
        <div class="top">
            <ly-button type="success" size="mini" @click="openMessgaeBox">打开 MessageBox</ly-button>
            <ly-button type="danger" size="mini" @click="openMessgaeBox1">打开 $alert</ly-button>
        </div>
        <div class="top">
            <ly-button type="info" size="mini" @click="openMessgaeBox2">打开 $confirm</ly-button>
            <ly-button type="primary" size="mini" @click="openMessgaeBox3">打开 $prompt</ly-button>
        </div>


        <div align="left">基础组件--LyNavMenu 导航菜单</div>
        <div class="top">
            <ly-menu
                background-color="#545c64"
                text-color="#fff"
            >
                <ly-menu-item-group>
                    <template slot="title">
                        <span>导航1</span>
                    </template>
                    <ly-menu-item>
                        <span>选项1</span>
                    </ly-menu-item>
                    <ly-menu-item>
                        <span>选项2</span>
                    </ly-menu-item>
                    <ly-menu-item>
                        <span>选项3</span>
                    </ly-menu-item>
                    <ly-menu-item-group>
                        <template slot="title">
                            <span>选项4</span>
                        </template>
                        <ly-menu-item>
                            <span>选项4-1</span>
                        </ly-menu-item>
                        <ly-menu-item>
                            <span>选项4-2</span>
                        </ly-menu-item>
                        <ly-menu-item>
                            <span>选项4-3</span>
                        </ly-menu-item>
                    </ly-menu-item-group>
                </ly-menu-item-group>
                <ly-menu-item>
                    <span>导航2</span>
                </ly-menu-item>
                <ly-menu-item>
                    <span>导航3</span>
                </ly-menu-item>
                <ly-menu-item>
                    <span>导航4</span>
                </ly-menu-item>
                <ly-menu-item-group>
                    <template slot="title">
                        <span>导航5</span>
                    </template>
                    <ly-menu-item>
                        <span>选项1</span>
                    </ly-menu-item>
                    <ly-menu-item>
                        <span>选项2</span>
                    </ly-menu-item>
                    <ly-menu-item>
                        <span>选项3</span>
                    </ly-menu-item>
                </ly-menu-item-group>
            </ly-menu>

            <ly-menu
                background-color="#5095fb"
                text-color="#fff"
            >
                <ly-menu-item-group v-for="(item,index) in menuList" :key="index">
                    <template slot="title">
                        <span>导航1</span>
                    </template>
                    <ly-menu-item>
                        <span>选项1</span>
                    </ly-menu-item>
                    <ly-menu-item-group>
                        <template slot="title">
                            <span>选项4</span>
                        </template>
                        <ly-menu-item>
                            <span>选项4-1</span>
                        </ly-menu-item>
                        <ly-menu-item>
                            <span>选项4-2</span>
                        </ly-menu-item>
                    </ly-menu-item-group>
                </ly-menu-item-group>
                <ly-menu-item-group>
                    <template slot="title">
                        <span>导航2</span>
                    </template>
                </ly-menu-item-group>
            </ly-menu>
        </div>

    </div>
</template>

<script>
    // import LyButton from '../src/minily-ui/package/button/menu.vue'
    // import LyInput from '../src/minily-ui/package/input/menu.vue'
    // import LySelect from '../src/minily-ui/package/select/select.vue'
    // import LyOption from '../src/minily-ui/package/select/option.vue'
    // import LyRadio from '../src/minily-ui/package/radio/menu.vue'
    // import LyCheckBox from '../src/minily-ui/package/checkbox/menu.vue'
    // import LySwitch from '../src/minily-ui/package/switch/menu.vue'
    // import LyTimePicker from '../src/minily-ui/package/timepicker/menu.vue'
    // import LyPopConfirm from '../src/minily-ui/package/popconfirm/menu.vue'
    // import LyPopOver from '../src/minily-ui/package/popover/menu.vue'
    // import LyDialog from '../src/minily-ui/package/dialog/menu.vue'
    import MessageBox from '../src/minily-ui/package/messagebox/index.js'
    import LyMenu from './minily-ui/package/menu/menu.vue'
    import LySubmenu from './minily-ui/package/menu/submenu.vue'
    import LyMenuItem from './minily-ui/package/menu/menu-item.vue'
    import LyMenuItemGroup from './minily-ui/package/menu/menu-item-group.vue'
    export default {
        name: 'app',
        components:{
            // LyButton,
            // LyInput,
            // LySelect,
            // LyOption,
            // LyRadio,
            // LyCheckBox,
            // LySwitch,
            // LyTimePicker,
            // LyPopConfirm,
            // LyPopOver,
            // LyDialog,
            LyMenu,
            LySubmenu,
            LyMenuItem,
            LyMenuItemGroup
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
                checked: true,
                checked1: false,

                switchValue: true,
                timeValue: '',
                dialogVisible: false,
                dialogVisible1: false,

                tableList:[
                    {
                        name: 'LyInput Attributes 输入框',
                        childList: [
                            { query: 'type', info: '类型', type: 'string', choose: '原生支持的type值', default: 'text' },
                            { query: 'v-model', info: '绑定值', type: 'string / number', choose: '--', default: '--' },
                            { query: 'placeholder', info: '输入框占位文本', type: 'string', choose: '--', default: '--' },
                            { query: 'maxlength', info: '最大输入长度', type: 'number', choose: '--', default: '--' },
                            { query: 'minlength', info: '最小输入长度', type: 'number', choose: '--', default: '--' },
                            { query: 'with', info: '输入框长度', type: 'string', choose: '任意长度', default: '弹性自适应' },
                            { query: 'disabled', info: '禁用', type: 'boolean', choose: '--', default: 'false' },
                            { query: 'clearable', info: '是否可清空	', type: 'boolean', choose: '--', default: 'false' },
                            { query: 'show-password', info: '是否显示切换密码图标	', type: 'boolean', choose: '--', default: 'false' },
                            { query: 'size', info: '输入框尺寸', type: 'string', choose: 'mini / small / medium', default: 'false' },
                            { query: 'before-icon', info: '输入框头部追加 icon', type: 'string', choose: '详细见 icon 图标', default: '--' },
                            { query: 'after-icon', info: '输入框末尾追加 icon', type: 'string', choose: '详细见 icon 图标', default: '--' },
                        ]
                    },

                    {
                        name: 'LyBotton Attributes 按钮',
                        childList: [
                            { query: 'type', info: '类型', type: 'string', choose: 'text / info / primary / warn / danger / success', default: 'info' },
                            { query: 'size', info: '尺寸', type: 'string', choose: 'mini / small / medium', default: '--' },
                            { query: 'disabled', info: '是否禁用状态', type: 'boolean', choose: '--', default: 'false' },
                            { query: 'loading', info: '是否加载中状态', type: 'boolean', choose: '--', default: 'false' },
                            { query: 'round', info: '是否圆角按钮', type: 'boolean', choose: '--', default: 'false' },
                        ]
                    },
                ],

                menuList:[
                    { name: '' }
                ]
            }
        },
        methods:{
            handleSubmit(){
                console.info('点击事件传递ok')
            },
            handleInput(value){
                // console.info(value)
            },
            handleSearch(value){
                alert(value)
            },
            handleChange(value){
                // console.info(value)
            },

            handleCheckBox(checked){
                console.info(checked)
            },

            switchChange(checked){
                console.info(checked)
            },

            handleConfirm(){
                console.info('confirm')
            },
            handleCancel(){
                console.info('cancel')
            },

            handleClose(data){
                this.dialogVisible = data;
            },

            openMessgaeBox(){
                MessageBox.alert('模拟系统级的 alert 弹窗，可以简单的提示信息', '提示信息', {
                    confirmButtonText: '确定',
                    success:()=>{
                        console.info('确定')
                    }
                })
            },
            openMessgaeBox1(){
                this.$alert('这是一段内容', '标题名称', {
                    confirmButtonText: '确定',
                    success:()=>{
                        console.info('确定')
                    }
                });
            },
            openMessgaeBox2(){
                this.$confirm('这是一段内容', '标题名称', {
                    confirmButtonText: '确定',
                    concelButtonText: '取消',
                    cancel:()=>{
                        console.info('取消')
                    },
                    success:()=>{
                        console.info('确定')
                    }
                });
            },
            openMessgaeBox3(){
                this.$prompt('这是一段内容', '标题名称', {
                    confirmButtonText: '确定',
                    concelButtonText: '取消',
                    showInput: true,
                    cancel:()=>{
                        console.info('取消')
                    },
                    success:(value)=>{
                        console.info(value)
                    }
                });
            },

            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose2(key, keyPath) {
                console.log(key, keyPath);
            }
        },
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        padding: 20px 20px 200px 20px;
        position: relative;
        margin-left: 30%;
        .top{
            margin: 20px 0;
            display: flex;
            justify-content: flex-start;
        }
    }
    /*表格样式*/
    table {
        width: 60%;
        min-width: 768px;
        background: #ccc;
        margin: 10px auto 60px auto;
        border-collapse: collapse;
    }
    th{
        height: 35px;
        line-height: 35px;
        text-align: center;
        border: 1px solid #ccc;
        font-size: 14px;
        font-weight: 500;
    }
    td{
        height: 30px;
        line-height: 30px;
        text-align: center;
        border: 1px solid #ccc;
        font-size: 14px;
    }
    th {
        background: #eee;
    }
    tr {
        background: #fff;
    }
    tr:hover {
        background: #f5f5f5;
    }
    td a {
        color: #06f;
        text-decoration: none;
    }
    td a:hover {
        color: #06f;
        text-decoration: underline;
    }

</style>
