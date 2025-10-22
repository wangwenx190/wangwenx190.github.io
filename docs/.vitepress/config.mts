import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: ".",
  rewrites: {
    'en_US/:rest*': ':rest*' // make the English content as the root page
  },
  title: "Reyalp",
  description: "Reyalp",
  head: [['link', { rel: 'icon', href: '/reyalp.svg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/reyalp.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
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
