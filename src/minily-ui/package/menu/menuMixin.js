/**
 * @Auther: lanyue
 * @UpdateDate: 2020/07/03/10:55
 */
export default {
    inject: ['rootMenu'],
    computed:{
        indexPath(){
            const path = [this.index];
            let parent = this.$parent;

            while (parent.$options.name !== 'ly-menu'){
                if(parent.index){
                    path.unshift(parent.index);
                }
                parent = parent.$parent
            }
            return path;
        },

        parentMenu(){
            let parent = this.$parent;
            while (parent && ['ly-menu','ly-submenu'].indexOf(parent.$options.name) === -1){
                parent = parent.$parent;
            }
            return parent;
        },

        paddingStyle(){
            if(this.rootMenu.mode === 'vertical') return {};

            let padding = 20;
            let parent = this.$parent;
            if(this.rootMenu.collapse){
                padding = 20;
            }else {
                console.info(parent.$options)
                while (parent && parent.$options.name !== 'ly-menu'){
                    if(parent.$options.name === 'ly-menu-item-group'){
                        padding += 25;
                    }
                    parent = parent.$parent;
                }
            }
            return { paddingLeft: padding + 'px' };
        }
    }
}
