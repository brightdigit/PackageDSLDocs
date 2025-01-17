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
            { text: 'Library', link: '/cli/subcommands/libraries' },
            { text: 'Machine', link: '/cli/subcommands/machines' },
            { text: 'Images', link: '/cli/subcommands/images' },
            { text: 'Screenshots', link: '/cli/subcommands/screenshots' },
            { text: 'Snapshots', link: '/cli/subcommands/snapshots' }
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
