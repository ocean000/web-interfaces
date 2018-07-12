/**
 * Created by Ocean on 2017/9/4.
 */
let routerInterface = {
    /**
     * 跳转页面接口
     * @param url 路由地址
     * @param params 路由参数
     * @param context 上下文
     */
    goPage(url, params, context) {},

    /**
     * 回退页面接口
     * @param context 上下文
     * @param params 路由参数
     */
    goBack(params, context) {},

    /**
     * 获取路由参数接口
     * @param context 上下文
     * @returns 路由参数对象
     */
    getParams(context) {
        return {};
    }
};

export default routerInterface;

