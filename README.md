<div align='center'>
    <h1>naiveui-celeris-admin</h1>
    <div>
        <img src='https://tuchuang.org.cn/imgs/2024/05/13/fa325caf001c4f37.png' alt='celeris-web' width='200'  height='200'/>
    </div>
</div>

## 简介

naiveui-celeris-admin 是抽取 celeris 样式 && 一丢丢改动 拿来吧你! [吗喽伸手]

## 特点 {...celeris } 源仓库https://github.com/kirklin/celeris-web

改动
-   仅保留前端
-   unplugin-auto-import 自动导入 api
-   unplugin-vue-components 自动导入 components
-   vite-plugin-mock 拦截请求模拟测试数据
-   icon 使用 xicons, src/components/Iconx 组件亦支持本地 svg 字符串导入
-   移除部分@celeris/xxx 依赖包

<img style="border:1px #f6f6f6 solid" src='https://tuchuang.org.cn/imgs/2024/05/22/5754117ead8bbe92.png' alt='celeris-web' width='100%'/>

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
