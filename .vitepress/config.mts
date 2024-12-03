import { defineConfig } from 'vitepress'
import * as fs from 'fs';
import doccData from '../docc.data';

const modules = doccData.load()

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PackageDSL",
  description: "Simplify the management of your Package.swift file.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'CLI', link: '/cli' },
      { text: 'Swift DocC', link: '/docc'}
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
    { 
        text: "Swift DocC",
        items: [
        { text: 'Introduction', link: '/docc/' },    
        {
          text: 'Modules',
          items: modules
        }
      ]
    }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
