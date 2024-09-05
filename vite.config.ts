import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { patchCssModules } from 'vite-css-modules'

type ViteConfigInput = {
  mode: string,
  command: string
}

export default (args: ViteConfigInput) => {
  const generateScopedName = args.mode === "production"
  ? "[hash:base64:5]" 
  : "[local]_[hash:base64:2]" 

  return defineConfig({
  plugins: [react(), patchCssModules()],
  css: {
    modules: {
      localsConvention: "camelCase",
      generateScopedName,
    }
  },
  build: {
    // Recommended minimum is `es2022` so we can take advantage of new ESM features
    target: 'esnext'
  }
})}; 
