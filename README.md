# web-interfaces

> 前端公共核心规范，规范通过接口定义。

## Installation

npm install web-interfaces

## Usage
* 已定义规范的模块：
 * IRouter：路由接口，定义操作路由的相关规范。

 * IStorage：数据存储接口，定义如何存储公用数据的规范。

 * IHttp：服务器请求接口，定义如何请求服务器的规范。

 * IBroadcast: 消息广播接口，可以使用在观察者模式，代码解耦。

* 按照规范实现自定义的逻辑：
 * 导入用于实现接口的方法*implement*，

    ```
    import { implement } from 'web-interfaces';
    ```

 * 实现接口，注意实现接口时，实现接口的方法需与接口所定义的方法名，方法参数名和返回的类型保持一致，已*IHttp*接口为例：

    ```
    // IHttp中关于的“get”的定义
    get(url, data, context) {
        return Promise
    }

    // 导入接口文件
    import { IHttp, implement } from 'web-interfaces';

    // 实现接口
    let httpImpl = implement(IHttp);

    // 自定义“get”的逻辑，注意：名字和参数需与接口保持一致
    httpImpl.get = (url, data, context) => {

        // 注意：必须返回Promise类型，因为接口定义的返回类型为“Promise”
        return new Promise((resolve, reject) => {

            // 自定义的逻辑
            ......
            ......
        });
    }
    ```

## API

> core
> -----------------------------------------------------
> 提供核心通用方法

* __implement(inf): object__

    <p>实现接口</p>

    * 参数
        <p><i>inf [object]: 接口对象</i></p>

    * 返回
        <p><i>实现对象</i></p>

    * 示例

    ```
    import { IHttp, core } from 'web-interfaces';
    let httpImpl = core.implement(IHttp);
    ```

* __getContext(): object__

    <p>获取上下文</p>

    * 返回
        <p><i>上下文实例</i></p>

    * 示例

    ```
    import { core } from 'web-interfaces';
    let context = core.getContext();
    ```

* __setContext(context)__

    <p>设置上下文</p>

    * 参数
        <p><i>context [object]：上下文实例</i></p>

    * 示例

    ```
    import { core } from 'web-interfaces';
    core.setContext(context);
    ```

> implement
> -----------------------------------------------------
> 实现接口，和core.implement一致

