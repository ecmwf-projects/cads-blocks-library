import { resolve } from 'node:path'

import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import * as EsLint from 'vite-plugin-linter'
import typescript from '@rollup/plugin-typescript'

import * as packageJson from './package.json'

const { EsLinter, linterPlugin } = EsLint

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
  // 
  define: { // https://github.com/vitejs/vite/issues/1973
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  },
}))
