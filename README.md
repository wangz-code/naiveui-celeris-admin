<div align='center'>
    <h1>Naive Admin</h1>
    <div>
        <img src='https://raw.githubusercontent.com/WangSunio/img/main/images/celeris.png' alt='Naive Admin' width='200'  height='200'/>
    </div>
</div>

## 简介

## ![index.png](https://raw.githubusercontent.com/WangSunio/img/main/images/index.png)

## ![detail.png](https://raw.githubusercontent.com/WangSunio/img/main/images/detail.png)

![report.png](https://raw.githubusercontent.com/WangSunio/img/main/images/report.png)

![report.png](https://raw.githubusercontent.com/WangSunio/img/main/images/cols.png)

## 源仓库 [celeris](https://github.com/kirklin/celeris-web)

改动

- 保留 celeris css,并将@celeris 依赖替换为本地, 修改布局, tabs 等
- 自动导入 api & components
- nitro 拦截请求模拟测试数据
- 封装 table异步组件, 支持列拖拽排序 ,缓存配置 ,固定列

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
