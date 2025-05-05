import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  const port = Number(env.VITE_PORT) || 5173

  return {
    plugins: [vue()],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },

    server: {
      port,
      open: true,
      strictPort: true
    },

    build: {
      outDir: 'dist',
      assetsDir: '',
      sourcemap: false,
      rollupOptions: {
        output: {
          entryFileNames: 'js/[name].[hash].js',
          chunkFileNames: 'js/[name].[hash].js',
          assetFileNames: (assetInfo) => {
            const ext = assetInfo.name?.split('.').pop()?.toLowerCase()

            if (!ext) return 'assets/[name].[hash][extname]'

            if (/\.(woff2?|ttf|otf|eot)$/.test(ext)) {
              return 'fonts/[name].[hash][extname]'
            }

            if (/\.(png|jpe?g|gif|svg|webp|avif)$/.test(ext)) {
              return 'images/[name].[hash][extname]'
            }

            if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)$/.test(ext)) {
              return 'media/[name].[hash][extname]'
            }

            return 'assets/[name].[hash][extname]'
          }
        }
      }
    }
  }
})
