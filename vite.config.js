import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslint from 'vite-plugin-eslint';  

const customConsoleLog = () => {
  // Retorna um plugin Vite para customizar a exibição das URLs no console.
  // Melhor visualização das portas que estão sendo usadas (ex: 3001:3000).
  return {
    name: 'custom-console-log',
    configureServer(server) {
      // Sobrescreve o consolelog padrão do Vite de URLs 
      server.printUrls = () => {
        const { logger } = server.config;
        const localUrl = server.resolvedUrls?.local[0] ?? null
        const networkUrl = server.resolvedUrls?.network[0] ?? null;

        // Printando manualmente
        logger.info(`\n  ➜  Local (Porta externa, Host): http://localhost:3001/`);
        if (localUrl) {
          logger.info(`  ➜  Local (Porta iterna, Docker): ${localUrl}`);
        }
        if (networkUrl) {
          logger.info(`  ➜  Network: ${networkUrl}`);
        }
      };
    },
  };
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [  
    react(),
    customConsoleLog(),
    eslint({
      cache: false,
      lintOnStart: true,
      include: ['./src/**/*.js', './src/**/*.jsx'],
      exclude: [/node_modules/], // Para performace
      failOnWarning: false, // Não faz o build falhar em caso de avisos
      failOnError: false, // Não faz o build falhar em caso de erros (em modo de desenvolvimento)
    }),
  ],
  server: {
    port: 3000,
    host: true,
    strictPort: true,
  },
});
