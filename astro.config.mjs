import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    //TODO:
	//site: "https://rublevsky.pages.dev/",
	output: "static",
	prefetch: {
		defaultStrategy: "viewport",
	},
	integrations: [sitemap(), robotsTxt()],
	// image: {
	// 	domains: ["assets.rublevsky.com"],
	// },
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				"@": "/src",
			},
		},
		// build: {
		//   // Enable aggressive chunking for better caching
		//   rollupOptions: {
		//     output: {
		//       manualChunks: undefined,
		//     },
		//   },
		//},
	},
});
