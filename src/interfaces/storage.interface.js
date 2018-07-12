/**
 * Created by Ocean on 2017/9/4.
 */
let storageInterface = {
    /**
     * 获取信息接口
     * @param key 信息的键
     * @param context 上下文
     * @returns {Object} 可返回任意类型
     */
    getData(key, context) {
        return new Object();
    },

    /**
     * 设置信息接口
     * @param key 信息的键
     * @param value 信息的值
     * @param context 上下文
     */
    setData(key, value, context) {},

    /**
     * 删除信息接口
     * @param key 信息的键
     * @param context 上下文
     * @returns {Object} 返回被删除的对象
     */
    delData(key, context) {
        return new Object();
    }
};

export default storageInterface;
