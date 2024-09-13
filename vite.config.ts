import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'; // using the SWC plugin for faster compilation

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        open: true, // opens the app in the browser when the server starts
    },
});
