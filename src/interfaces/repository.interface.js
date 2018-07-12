export default {
    /**
     * 初始化数据库
     * @param dbId 数据库标识
     * @param options 选项
     * @return promise对象
     */
    initDb(dbId, options) {
        return Promise();
    },

    /**
     * 删除数据库
     * @param dbId 数据库标识
     * @returns promise对象
     */
    deleteDb(dbId) {
        return Promise();
    },

    /**
     * 打开数据库
     * @param dbId 数据库标识
     * @returns promise对象
     */
    open(dbId) {
        return Promise();
    },

    /**
     * 关闭数据库
     * @param dbId 数据库标识
     * @returns promise对象
     */
    close(dbId) {
        return Promise();
    },

    /**
     * 创建数据表
     * @param table 表名称
     * @param columns 字段对象
     * @param primaryKeys 主键数组
     * @param dbId 数据库标识
     * @returns promise对象
     */
    createTb(table, columns, primaryKeys, dbId) {
        return Promise();
    },

    /**
     * 删除数据表
     * @param table 表名称
     * @param dbId 数据库标识
     * @returns promise对象
     */
    deleteTb(table, dbId) {
        return Promise();
    },

    /**
     * 查询记录
     * @param columns 查询的字段
     * @param conditions 查询条件
     * @param order 排序
     * @param start 开始位置
     * @param size 获取的数量
     * @param table 表名称
     * @param dbId 数据库标识
     * @returns promise对象
     */
    select(columns, conditions, order, start, size, table, dbId) {
        return Promise();
    },

    /**
     * 计算记录数目
     * @param conditions 查询条件
     * @param table 表名称
     * @param dbId 数据库标识
     * @returns promise对象
     */
    count(conditions, table, dbId) {
        return Promise();
    },

    /**
     * 插入记录
     * @param columns 字段
     * @param values 字段值，顺序与columns对应
     * @param table 表名称
     * @param dbId 数据库标识
     * @returns promise对象
     */
    insert(columns, values, table, dbId) {
        return Promise();
    },

    /**
     * 更新记录
     * @param columns 字段
     * @param values 字段值，顺序与columns对应
     * @param conditions 条件
     * @param table 表名称
     * @param dbId 数据库标识
     * @returns promise对象
     */
    update(columns, values, conditions, table, dbId) {
        return Promise();
    },

    /**
     * 删除记录
     * @param conditions 条件
     * @param table 表名称
     * @param dbId 数据库标识
     * @returns promise对象
     */
    delete(conditions, table, dbId) {
        return Promise();
    }
}