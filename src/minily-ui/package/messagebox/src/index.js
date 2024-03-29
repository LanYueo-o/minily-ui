const defaults = {
    title: null,
    message: '',
    type: '',
};

import Vue from 'vue';
import msgboxVue from './index.vue';
import merge from '../../../../unit/merge';

const MessageBoxConstructor = Vue.extend(msgboxVue);

let currentMsg, instance;
let msgQueue = [];

const defaultCallback = action => {
    if (currentMsg) {
        let callback = currentMsg.callback;
        if (typeof callback === 'function') {
            if (instance.showInput) {
                callback(instance.inputValue, action);
            } else {
                callback(action);
            }
        }
        if (currentMsg.resolve) {
            if (action === 'confirm') {
                if (instance.showInput) {
                    currentMsg.resolve({ value: instance.inputValue, action });
                } else {
                    currentMsg.resolve(action);
                }
            } else if (currentMsg.reject && (action === 'cancel' || action === 'close')) {
                currentMsg.reject(action);
            }
        }
    }
};

const initInstance = () => {
    instance = new MessageBoxConstructor({
        el: document.createElement('div')
    });

    instance.callback = defaultCallback;
};

const showNextMsg = () => {
    if (!instance) {
        initInstance();
    }
    instance.action = '';

    if (!instance.visible) {
        if (msgQueue.length > 0) {
            currentMsg = msgQueue.shift();

            let options = currentMsg.options;
            for (let prop in options) {
                if (options.hasOwnProperty(prop)) {
                    instance[prop] = options[prop];
                }
            }
            if (options.callback === undefined) {
                instance.callback = defaultCallback;
            }

            let oldCb = instance.callback;
            instance.callback = (action, instance) => {
                oldCb(action, instance);
                showNextMsg();
            };
            document.body.appendChild(instance.$el);

            // 显示了弹窗
            Vue.nextTick(() => {
                instance.visible = true;
            });
        }
    }
};

const MessageBox = function(options, callback) {
    if (Vue.prototype.$isServer) return;
    if (typeof options === 'string') {
        options = {
            message: options
        };
        if (typeof arguments[1] === 'string') {
            options.title = arguments[1];
        }
    } else if (options.callback && !callback) {
        callback = options.callback;
    }

    if (typeof Promise !== 'undefined') {
        return new Promise((resolve, reject) => {
            msgQueue.push({
                options: merge({}, defaults, MessageBox.defaults, options),
                callback: callback,
                resolve: resolve,
                reject: reject
            });

            showNextMsg();
        });
    } else {
        msgQueue.push({
            options: merge({}, defaults, MessageBox.defaults, options),
            callback: callback
        });

        showNextMsg();
    }
};

MessageBox.setDefaults = defaults => {
    MessageBox.defaults = defaults;
};

MessageBox.alert = (message, title, options) => {
    if (typeof title === 'object') {
        options = title;
        title = '';
    } else if (title === undefined) {
        title = '';
    }
    return MessageBox(merge({
        title: title,
        message: message,
        options: options,
        $type: 'alert',
        showCancelButton: false,
        showInput: false
    }, options));
};

MessageBox.confirm = (message, title, options) => {
    if (typeof title === 'object') {
        options = title;
        title = '';
    } else if (title === undefined) {
        title = '';
    }
    return MessageBox(merge({
        title: title,
        message: message,
        options: options,
        $type: 'confirm',
        showCancelButton: true,
        showInput: false
    }, options));
};

MessageBox.prompt = (message, title, options) => {
    if (typeof title === 'object') {
        options = title;
        title = '';
    } else if (title === undefined) {
        title = '';
    }
    return MessageBox(merge({
        title: title,
        message: message,
        options: options,
        showCancelButton: true,
        showInput: true,
        $type: 'prompt'
    }, options));
};

MessageBox.closeDialog = () => {
    instance.visible = false;
    msgQueue = [];
    currentMsg = null;
};

export default MessageBox;
export { MessageBox };
