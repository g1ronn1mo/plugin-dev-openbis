import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    '../../libs/shared-ui/nuxt.config.ts',
  ], //changed
  workspaceDir: '../../',
  srcDir: 'src',
  buildDir: '../../dist/apps/documentary/.nuxt',
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
    output: {
      dir: '../../dist/apps/documentary/.output',
    },
  },
  modules: [
    '@nuxt/content'
  ],
  
});
