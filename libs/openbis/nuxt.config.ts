import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  workspaceDir: '../../',
  srcDir: 'src',
  buildDir: '../../dist/libs/openbis/.nuxt',
  devtools: { enabled: true },
  devServer: {
    host: 'localhost',
    port: 4200,
  },
  typescript: {
    typeCheck: true,
    tsConfig: {
      extends: './tsconfig.app.json',
    },
  },
  imports: {
    autoImport: false,
  },

  css: ['~/assets/css/styles.css'],

  vite: {
    plugins: [nxViteTsPaths()],
  },
  nitro: { 
    devProxy: {
      '/openbis': {
        target: 'http://localhost:8080/openbis',
        changeOrigin: true,
        prependPath: true,
      },
  },
    output: {
      dir: '../../dist/libs/openbis/.output',
    },
  },
  app: {
    head: {
      title: 'OpenBiz+',
      script: [`http://localhost:8080/openbis/resources/api/v3/openbis.esm.js`]}
  },
  alias: {
    "@components": "../components/src/components",
  },

});
