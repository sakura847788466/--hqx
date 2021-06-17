/**
 * 验证正则
 * @param {string}
 * @returns {Boolean}
 */

//userName 和 PassWord   
export function validUserName(str) {
    const reg = /^[\da-zA-Z]+$/i //只允许字母和数字
    return reg.test(str)
}