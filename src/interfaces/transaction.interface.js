export default {
    /**
     * 开始事务
     * @param db 数据库对象
     * @param options 选项
     */
    start(db, options) {
    },

    /**
     * 执行事务
     * @param table 表名称
     * @param action 事务操作，一般为数据库的增删查改
     * @param params 操作参数
     * @returns promise 执行结果
     */
    execute(table, action, params) {
        return Promise();
    },

    /**
     * 提交事务
     * @param params 操作参数
     * @returns promise 提交结果
     */
    commit(params) {
        return Promise();
    }
}