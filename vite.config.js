import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.html'],
  server: {
    historyApiFallback: true, // This will ensure all routes go to index.html
  },
  base: '/mac',
})
