/**
 * @Auther: lanyue
 * @UpdateDate: 2020/06/11/10:49
 */
import LyButton from './index.vue';

LyButton.install = Vue => Vue.component(LyButton.name, LyButton);
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(LyButton);
}
export default LyButton;
