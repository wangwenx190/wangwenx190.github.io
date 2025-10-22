import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: ".",
  rewrites: {
    'en_US/:rest*': ':rest*' // make the English content as the root page
  },
  title: "Reyalp",
  description: "Reyalp - the multimedia player",
  head: [['link', { rel: 'icon', href: '/reyalp.svg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/reyalp.svg',
    nav: [
      { text: 'HOME', link: '/' },
      { text: 'DOWNLOAD', link: '/download.md' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  locales: {
    root: {
      label: 'English',
      'lang': 'en_US'
    },
    'zh_CN': {
      label: '简体中文',
      'lang': 'zh_CN'
    }
  }
})
