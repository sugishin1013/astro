import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";
import webmanifest from "astro-webmanifest";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-neon-pi.vercel.app",
  experimental: {
    integrations: true,
  },
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    compress({
      css: true,
      html: false,
      js: true,
      img: false,
      svg: false,
    }),
    robotsTxt({
      sitemapBaseFileName: "sitemap-index",
      policy: [
        {
          userAgent: "Googlebot",
          allow: "/",
          crawlDelay: 2,
        },
      ],
    }),
    webmanifest({
      name: "sugishin1013'Blog",
      icon: "./public/avatar.png",
      lang: "ja",
      short_name: "sugishin1013",
      description: "sugishin1013のブログ",
      theme_color: "#ef4444",
      background_color: "#ef4444",
      display: "standalone",
    }),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  output: "server",
  adapter: vercel(),
});
