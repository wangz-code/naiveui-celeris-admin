<div align='center'>
    <h1>naiveui-celeris-admin</h1>
    <div>
        <img src='https://www.naiveui.com/assets/naivelogo-BdDVTUmz.svg' alt='celeris-web' width='200'  height='200'/>
    </div>
</div>

## 简介

naiveui-celeris-admin 是抽取 celeris 样式 

## 特点 {...celeris } 源仓库https://github.com/kirklin/celeris-web

改动
-   仅保留前端
-   unplugin-auto-import 自动导入 api
-   unplugin-vue-components 自动导入 components
-   vite-plugin-mock 拦截请求模拟测试数据
-   icon 使用 xicons, src/components/Iconx 组件亦支持本地 svg 字符串导入
-   移除所有@celeris/xxx 依赖包
-   为什么不用mockjs 因为打包后gitpage不支持

### 开发

```bash
# pnpm 版本 9.0.1
pnpm install
pnpm run dev
```

### 构建

```bash
pnpm run build
```
