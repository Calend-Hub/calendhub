import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://calendhub.com',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    react(),
    markdoc(),
  ],
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  compressHTML: true,
  build: {
    inlineStylesheets: 'always', // Inline all stylesheets to prevent render blocking
  },
  server: {
    port: parseInt(process.env.PORT || '4321'),
    host: '0.0.0.0'
  },
  vite: {
    optimizeDeps: {
      include: [
        'lodash.debounce',
        'direction',
        '@emotion/weak-memoize'
      ],
    },
    ssr: {
      noExternal: [
        'direction',
        '@emotion/weak-memoize',
        'lodash'
      ],
    },
  },
  image: {
    domains: ['localhost'],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
});