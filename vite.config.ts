import { resolve } from 'node:path'

import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import { EsLinter, linterPlugin, } from "vite-plugin-linter";
import typescript from '@rollup/plugin-typescript'

import * as packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    react(),
    linterPlugin({
      include: ['./src}/**/*.{ts,tsx}'],
      linters: [new EsLinter({ configEnv })],
    }),
  ],
  build: {
    lib: {
      entry: resolve('src', 'index.ts'),
      name: '@ecmwf-projects/cads-blocks-library',
      formats: ['es', 'umd'],
      fileName: (format) => `cads-blocks-library.${format}.js`,
    },
    rollupOptions: {
      treeshake: false,
      external: Object.keys(packageJson.peerDependencies),
      output: {
        globals: (name) => name,
      },
      plugins: [
        typescript({
          sourceMap: false,
          declaration: true,
          outDir: 'dist',
        }),
      ],
    },
  },
}))
