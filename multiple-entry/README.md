# multiple-entry

> vue + vue-router + sass + mockjs  多页面项目

#mockjs
> mocks数据入口: mockjs/index.js
> 每个页面入口文件必须增加环境判断：
``` bash
if (process.env.NODE_ENV === 'mock') {
   console.log('mock环境已开启')
   require('../../../mockjs')
}
```
#rem计算
>默认将屏幕宽度10等分，1等分为1rem，以375px为基准计算$ppr，详见base.scss

## Build Setup

``` bash
# install dependencies
npm install

# serve mockjs with hot reload at localhost:8080/modules/index.html
npm run mock

# serve with hot reload at localhost:8080/modules/index.html
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
