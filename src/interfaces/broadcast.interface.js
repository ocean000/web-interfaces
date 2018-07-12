/**
 * Created by Ocean on 2017/9/18.
 */
let broadcastInterface = {
    /**
     * 广播信息
     * @param name 信息名称
     * @param params 信息参数
     * @param context 上下文
     */
    broadcast(name, params, context) {
    },

    /**
     * 监听信息
     * @param name 信息名称
     * @param func 监听方法
     * @param context 上下文
     */
    listen(name, func, context){
    }
};

export default broadcastInterface;
