import { defineConfig } from 'vite';
import { pluginHotRestart } from './vite.base';

// https://vitejs.dev/config
export default defineConfig({
  plugins: [
    pluginHotRestart('restart')
  ],
  server: {
    host: '0.0.0.0'
  }
});
