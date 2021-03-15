<script type="text/jsx">
    import menuMixin from './menuMixin';
    import Emitter from "../../../unit/dispatch";
    const poperMixins = {
        props:{
            transformOrigin: {
                type: [Boolean, String],
                default: false
            },
        }
    }
    export default {
        name: "ly-submenu",
        mixins: [menuMixin,Emitter,poperMixins],
        props:{
            index: {
                type: String,
                required: true
            },
            disabled: Boolean
        },
        computed:{
            isMenuPopup() {
                return this.rootMenu.isMenuPopup;
            },
        },
        render(h){
            const {
                active,
                opened,
                paddingStyle,
                titleStyle,
                backgroundColor,
                rootMenu,
                currentPlacement,
                menuTransitionName,
                mode,
                disabled,
                $slot
            } = this;

            const popupMenu = (
                <transition name={ menuTransitionName }>
                    <div
                        ref="menu"
                        v-show={ opened }
                        class={ [`ly-menu--${mode}`] }>
                        <ul
                            role="menu"
                            class={ ['ly-menu ly-menu--popup',`ly-menu-popup-${currentPlacement}`] }>
                            {this.$slots.default}
                        </ul>
                    </div>
                </transition>
            )

            const inlineMenu = (
                <ly-collaspe-transition>
                    <ul
                        role="menu"
                        class="ly-menu ly-menu--inline"
                        v-show={opened}
                        style={{ backgroundColor: rootMenu.backgroundColor || ''}}>
                        {this.$slots.default}
                    </ul>
                </ly-collaspe-transition>
            )

            return (
                <li
                    class={{
                        'ly-menu-item': true,
                        'is-active': active,
                        'is-opened': opened,
                        'is-disabled': disabled
                    }}
                    role="menuitem">
                    <div
                        ref="submenu-title"
                        onClick={this.handleClick}
                        style={[paddingStyle,titleStyle,{backgroundColor}]}
                        class="ly-submenu--title">
                        {this.$slots.title}
                        <i class={[
                            'iconfont icon--down' ,
                            'ly-submenu__icon-arrow',
                            opened ? 'ly-transform--down' : '',
                            {
                                'ly-transform--up': opened
                            }
                        ]}></i>
                    </div>
                    { this.isMenuPopup ? popupMenu : inlineMenu }
                </li>
            )
        },

        data(){
            return{
                items: {},
                submenu: {}
            }
        },
        methods:{
            handleClick(){
                const { rootMenu, disabled } = this;
                if (
                    (rootMenu.mode === 'horizontal') ||
                    (rootMenu.collapse && rootMenu.mode === 'vertical') ||
                    disabled
                ) {
                    return;
                }
                this.dispatch('ly-menu', 'submenu-click', this);
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "main";
</style>
