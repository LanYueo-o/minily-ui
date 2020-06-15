/**
 * @Auther: lanyue
 * @UpdateDate: 2020/06/11/10:51
 */
import LyButton from './button/index.js'
import LyInput from './input/index.js'
import LySelect from './select/index.js'
const components=[
    LyButton,
    LyInput,
    LySelect
]

const install=function(Vue,opts={}){
    components.forEach((elem,i)=>{
        Vue.component(elem.name, elem);
    })
}
export default install
