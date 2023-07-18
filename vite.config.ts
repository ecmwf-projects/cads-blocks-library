import { resolve } from 'node:path';

import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts'
import EsLint from 'vite-plugin-linter'

import * as packageJson from './package.json';

const { EsLinter, linterPlugin } = EsLint


// https://vitejs.dev/config/
export default defineConfig(configEnv => ({
  plugins: [react(),
  dts({
    include: ['src/**/*']
  }),
  linterPlugin({
    include: ['./src}/**/*.{ts,tsx}'],
    linters: [new EsLinter({ configEnv })],
  }),],
  build: {
    lib: {
      entry: resolve('src', 'index.ts'),
      name: '@ecmwf-projects/cads-blocks-library',
      formats: ['es', 'umd'],
      fileName: (format) => `cads-blocks-library.${format}.js`,
    },
    rollupOptions: {
      treeshake: true,
      external: Object.keys(packageJson.peerDependencies),
      output: {
        globals: (name) => name
      }
    },
  },
}));
