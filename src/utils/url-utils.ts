// 导入必要的 i18n 工具
import i18nKey from '@i18n/i18nKey'
import { i18n } from '@i18n/translation'

// 比较两个路径是否相等（忽略大小写和首尾斜杠）
export function pathsEqual(path1: string, path2: string) {
  const normalizedPath1 = path1.replace(/^\/|\/$/g, '').toLowerCase()
  const normalizedPath2 = path2.replace(/^\/|\/$/g, '').toLowerCase()
  return normalizedPath1 === normalizedPath2
}

// 合并 URL 路径片段，处理多余的斜杠
function joinUrl(...parts: string[]): string {
  const joined = parts.join('/')
  return joined.replace(/\/+/g, '/')
}

// 根据文章 slug 生成文章 URL
export function getPostUrlBySlug(slug: string): string {
  return url(`/posts/${slug}/`)
}

// 根据分类名生成分类页面 URL（使用复数形式 categories）
export function getCategoryUrl(category: string): string {
  if (category === i18n(i18nKey.uncategorized))
    return url('/categories/uncategorized/')
  return url(`/categories/${category}/`)
}

// 根据标签名生成标签页面 URL（使用复数形式 tags）
export function getTagUrl(tag: string): string {
  return url(`/tags/${tag}/`)
}

// 获取路径的目录部分
export function getDir(path: string): string {
  const lastSlashIndex = path.lastIndexOf('/')
  if (lastSlashIndex < 0) {
    return '/'
  }
  return path.substring(0, lastSlashIndex + 1)
}

// 生成完整的 URL，包含基础路径
export function url(path: string) {
  return joinUrl('', import.meta.env.BASE_URL, path)
}