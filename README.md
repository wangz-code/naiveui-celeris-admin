<div align='center'>
    <h1>naiveui-celeris-admin</h1>
    <div>
        <img src='https://tuchuang.org.cn/imgs/2024/05/13/fa325caf001c4f37.png' alt='celeris-web' width='200'  height='200'/>
    </div>
</div>

## 简介
naiveui-celeris-admin 是抽取celeris样式 & 一丢丢改动 拿来就用

## 特点 {...celeris } https://github.com/kirklin/celeris-web
改动
- unplugin-auto-import 自动导入api
- unplugin-vue-components 自动导入components
- icon 使用xicons, src/components/Iconx 组件亦支持本地svg导入
- 移除部分@celeris/xx 依赖包

<img style="border:1px #f6f6f6 solid" src='https://tuchuang.org.cn/imgs/2024/05/13/362a4abb70a38086.png' alt='celeris-web' width='100%'/>

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
