import { Message } from 'element-ui';
export default {
    //消息提示框
    promptBox: function(message, type) {
        Message({
            showClose: true,
            message: message,
            type: type,
            offset: 80
        });
    }
};