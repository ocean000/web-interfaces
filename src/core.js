/**
 * Created by Ocean on 2017/9/18.
 */

let context = null;

let core =  {
    // 实现接口
    implement(inf) {
        return inf;
    },

    /**
     * 获取上下文
     * @returns {*}
     */
    getContext() {
        return context;
    },

    /**
     * 设置上下文
     * @param value
     */
    setContext(value) {
        context = value;
    },
};

let implement = core.implement;
export {
    implement
}

export default core;