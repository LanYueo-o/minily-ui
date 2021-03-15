/**
 * @Auther: lanyue
 * @UpdateDate: 2020/06/11/10:51
 */
import LyButton from './button/index.js'
import LyInput from './input/index.js'
import LySelect from './select/index.js'
import LyOption from './option/index.js'
import LyRadio from './radio/index.js'
import LyCheckBox from './checkbox/index.js'
import LySwitch from './switch/index.js'
import LyTimePicker from './timepicker/index.js'
import LyPopConfirm from './popconfirm/index.js'
import LyPopOver from './popover/index.js'
import LyDialog from './dialog/index.js'
import LyMessageBox from './messagebox/index.js'
import LyMenu from './menu/index.js'
import LySubmenu from './submenu/index.js'
import LyMenuItem from './menuitem/index.js'
import LyMenuItemGroup from './menuitemgroup/index.js'

const components = [
    LyButton,
    LyInput,
    LySelect,
    LyOption,
    LyRadio,
    LyCheckBox,
    LySwitch,
    LyTimePicker,
    LyPopConfirm,
    LyPopOver,
    LyDialog,
    LyMenu,
    LySubmenu,
    LyMenuItem,
    LyMenuItemGroup
]
const install = function(Vue,opts={}){
    components.forEach((elem,i)=>{
        Vue.component(elem.name, elem);
    });
    Vue.prototype.$alert = LyMessageBox.alert;
    Vue.prototype.$confirm = LyMessageBox.confirm;
    Vue.prototype.$prompt = LyMessageBox.prompt;

}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
// export default {
//     LyButton,
//     LyInput,
//     LySelect,
//     LyOption,
//     LyRadio,
//     LyCheckBox,
//     LySwitch,
//     LyTimePicker,
//     LyPopConfirm,
//     LyPopOver,
//     LyDialog,
//     LyMessageBox
// }

export default install;
