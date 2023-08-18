import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
interface Config {
  plugins: any[];
  resolve: {
    alias: Record<string, string>;
  };
}

const config: Config = {
  build: {
    outDir: 'build'
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag === "main-component"
        }
      },
      script:{
        refSugar: true
      }
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
}

export default config;
