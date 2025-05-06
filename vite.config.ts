import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd())

    const port = Number(env.VITE_PORT) || 5173

    return {
        base: '/new_portfolio/',
        plugins: [vue()],

        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src')
            }
        },

        css: {
            preprocessorOptions: {
                scss: {
                    includePaths: [path.resolve(__dirname, 'src/assets/styles')],
                }
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
                    assetFileNames: assetInfo => {
                        if (/\.(woff2?|ttf|otf|eot)$/.test(assetInfo.name ?? '')) {
                            return 'fonts/[name].[hash][extname]'
                        }
                        if (/\.(png|jpe?g|gif|svg|webp)$/.test(assetInfo.name ?? '')) {
                            return 'images/[name].[hash][extname]'
                        }
                        return 'assets/[name].[hash][extname]'
                    },
                }
            }
        }
    }
})
