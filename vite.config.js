import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			util: path.resolve(__dirname, "node_modules/util/") // Polyfill for `util`
		}
	},
	build: {
		rollupOptions: {
			external: ["node-util"]
		}
	}
});
