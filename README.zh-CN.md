# 🍥Fuwari

基于 [Astro](https://astro.build) 开发的静态博客模板。

[**🖥️在线预览（Vercel）**](https://fuwari.vercel.app)&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;
[**📦旧 Hexo 版本**](https://github.com/saicaca/hexo-theme-vivia)

> README 版本：`2024-09-10`

![Preview Image](https://raw.githubusercontent.com/saicaca/resource/main/fuwari/home.png)

## ✨ 功能特性

- [x] 基于 Astro 和 Tailwind CSS 开发
- [x] 流畅的动画和页面过渡
- [x] 亮色 / 暗色模式
- [x] 自定义主题色和横幅图片
- [x] 响应式设计
- [ ] 评论
- [x] 搜索
- [ ] 文内目录
- [x] Google Analytics 4 集成

## 🚀 使用方法

1. 使用此模板[生成新仓库](https://github.com/saicaca/fuwari/generate)或 Fork 此仓库
2. 进行本地开发，Clone 新的仓库，执行 `pnpm install` 和 `pnpm add sharp` 以安装依赖  
   - 若未安装 [pnpm](https://pnpm.io)，执行 `npm install -g pnpm`
3. 通过配置文件 `src/config.ts` 自定义博客
4. 执行 `pnpm new-post <filename>` 创建新文章，并在 `src/content/posts/` 目录中编辑
5. 参考[官方指南](https://docs.astro.build/zh-cn/guides/deploy/)将博客部署至 Vercel, Netlify, GitHub Pages 等；部署前需编辑 `astro.config.mjs` 中的站点设置。

## ⚙️ 文章 Frontmatter

```yaml
---
title: My First Blog Post
published: 2023-09-09
description: This is the first post of my new Astro blog.
image: ./cover.jpg
tags: [Foo, Bar]
category: Front-end
draft: false
lang: jp      # 仅当文章语言与 `config.ts` 中的网站语言不同时需要设置
---
```

## 🧞 指令

下列指令均需要在项目根目录执行：

| Command                           | Action                            |
|:----------------------------------|:----------------------------------|
| `pnpm install` 并 `pnpm add sharp` | 安装依赖                              |
| `pnpm dev`                        | 在 `localhost:4321` 启动本地开发服务器      |
| `pnpm build`                      | 构建网站至 `./dist/`                   |
| `pnpm preview`                    | 本地预览已构建的网站                        |
| `pnpm new-post <filename>`        | 创建新文章                             |
| `pnpm astro ...`                  | 执行 `astro add`, `astro check` 等指令 |
| `pnpm astro --help`               | 显示 Astro CLI 帮助                   |

## 🚀 Google Analytics 4

> 添加日期：2023-11-28

Fuwari 支持 Google Analytics 4 集成，默认处于禁用状态。启用 GA4 跟踪的步骤：

1. 从 Google Analytics 账号获取 GA4 测量 ID（格式：G-XXXXXXXXXX）
2. 打开 `src/config.ts`
3. 找到 `analytics` 部分并更新配置：
```typescript
analytics: {
  ga4: {
    enable: true,                    // 设置为 true 以启用 GA4
    measurementId: 'G-XXXXXXXXXX',   // 替换为您的 GA4 测量 ID
  }
}
```

GA4 跟踪代码仅在 `enable` 设置为 `true` 且提供有效的 `measurementId` 时才会包含在构建输出中。这确保了在不使用 GA4 时的最佳性能。

GA4 集成的主要特点：
- 🔒 默认禁用以保护隐私和性能
- 🔄 通过配置文件轻松开启/关闭
- 🚀 禁用时对构建体积零影响
- 📊 支持所有标准 GA4 跟踪功能
- 🛠 基于配置的设置，无需修改代码
