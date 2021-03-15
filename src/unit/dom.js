/**
 * @Auther: lanyue
 * @UpdateDate: 2020/07/03/09:31
 */
// \s：空格
// \uFEFF：字节次序标记字符（Byte Order Mark），也就是BOM,它是es5新增的空白符
const trim = function (string) {
    return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
}

export function hasClass(el, cls) {
    if(!el || !cls) return false;
    if(cls.indexOf(' ' !== -1)) throw new Error('类名不应该包含空格！');
    if(el.classList){
        return el.classList.contains(cls);
    }else {
        return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }
}

export function addClass(el, cls) {
    if(!el) return false;
    let curClass = el.className;
    let classes = (cls || '').split(' ');

    for(let i = 0, j = classes.length; i < j; i++){
        let clsName = classes[i];
        if(!clsName) continue;

        if(el.classList){
            el.classList.add(clsName);
        }else if(!hasClass(el,clsName)){
            curClass += ' ' + clsName;
        }
    }
    if(!el.classList){
        el.className = curClass;
    }
}

export function removeClass(el, cls) {
    if(!el || !cls) return false;
    let classes = cls.split(' ');
    let curClass = ' ' + el.className + ' ';

    for(let i = 0, j = classes.length; i < j; i++){
        let clsName = classes[i];
        if(!clsName) continue;

        if(el.classList){
            el.classList.remove(clsName);
        }else if(hasClass(el,clsName)){
            curClass = curClass.replace(' ' + clsName + ' ',' ');
        }
    }
    if(!el.classList){
        el.className = trim(curClass);
    }
}
