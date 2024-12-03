import { defineConfig } from 'vitepress'
import * as fs from 'fs';



const baseURL =
  process.env.ENVIRONMENT=== 'production'
    ? 'https://packagedsl.com'
    : 'http://localhost:3000'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PackageDSL",
  description: "Simplify the management of your Package.swift file.",
  cleanUrls : true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'CLI', link: '/cli' },
      { text: 'PackageDSLKit', link: `${baseURL}/swift-docc/documentation/packagedslkit/` }
    ],
    sidebar: [
      { 
        text: "CLI",
        items: [
        { text: 'Introduction', link: '/cli/' },   
        { text: 'Getting Started', link: '/cli/getting-started' },   
        {
          text: 'Subcommands',
          items: [       
            { text: 'init', link: '/cli/subcommands/init' },
            { text: 'Products', link: '/cli/subcommands/products' },
            { text: 'Targets', link: '/cli/subcommands/targets' },
            { text: 'Tests', link: '/cli/subcommands/tests' },
            { text: 'Dependencies', link: '/cli/subcommands/dependencies' },
            { text: 'Settings', link: '/cli/subcommands/settings' },
            { text: 'Platforms', link: '/cli/subcommands/platforms' }
          ]
        }
      ]
    },
    { text: 'PackageDSLKit', link: `${baseURL}/swift-docc/documentation/packagedslkit/` }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
