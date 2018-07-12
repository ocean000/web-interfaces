/**
 * Created by Ocean on 2017/9/4.
 */
let httpInterface = {
    /**
     * get请求
     * @param url 请求地址
     * @param data 请求参数
     * @param context 上下文
     * @returns {Promise} 返回Promise对象
     */
    get(url, data, context) {
        return Promise
    },

    /**
     * post请求
     * @param url 请求地址
     * @param type 请求的参数方式，如：formData, raw, x-www-form-urlencoded, json
     * @param data 请求参数
     * @param context 上下文
     * @returns {Promise} 返回Promise对象
     */
    post(url, type, data, context) {
        return Promise;
    },

    /**
     * post请求, 参数方式为x-www-form-urlencoded
     * @param url 请求地址
     * @param data 请求参数
     * @param context 上下文
     * @returns {Promise} 返回Promise对象
     */
    postFormUrlEncoded(url, data, context) {
        return Promise;
    },

    /**
     * post请求, 参数方式为json
     * @param url 请求地址
     * @param data 请求参数
     * @param context 上下文
     * @returns {Promise} 返回Promise对象
     */
    postJson(url, data, context) {
        return Promise;
    },

    /**
     * post请求, 参数方式为json形式的raw
     * @param url 请求地址
     * @param data 请求参数
     * @param context 上下文
     * @returns {Promise} 返回Promise对象
     */
    postRawJson(url, data, context) {
        return Promise;
    },

    /**
     * post请求, 参数方式为FormData
     * @param url 请求地址
     * @param data 请求参数
     * @param context 上下文
     * @returns {Promise} 返回Promise对象
     */
    postFormData(url, data, context) {
        return Promise;
    },

    /**
     * 以jsonp方式请求
     * @param url 请求地址
     * @param data 请求参数
     * @param context 上下文
     * @returns {Promise} 返回Promise对象
     */
    jsonp(url, data, context) {
        return Promise;
    }
};

export default httpInterface;
