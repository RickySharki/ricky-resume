# Resume Template v2.0

- 主要通过环境变量差异化打包替换个人logo以及简历内容，通过env.development进行差异化配置
- 在 `/utils/config.ts` 中可以获取到所有的差异化环境变量，在模板中或者ts文件中可以引入`/utils/config.ts`来获取差异化变量进行展示打包

test

## 项目中vite.config中的plugins统一使用_vitePlugins文件维护

目前使用的plugins

- auto-imports
- auto-components
- mock
- wind

## 项目基于vite的glob做了路由自动引入

```
pages/
├── index.vue
├── meta.ts //meta.ts代表router的meta
```

// 如果有二级目录请保持与一级目录的结构一致

## 项目中在main.ts注册的插件或事物请提供一个setup方法进行注册，方便后期维护

请仿照在`router/index.ts`中的`setupRouter`方法

## 项目中使用typescript构建

请将所有的类型按模块在`model`中创建
