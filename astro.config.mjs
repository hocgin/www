import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // GitHub Pages 站点地址（owner.github.io）
  // site: "https://hocgin.github.io",
  // 仓库名为 www，站点部署在子路径 /www/ 下，必须配置 base 否则静态资源 404
  // base: "/www/",
  vite: {
    plugins: [tailwindcss()],
  },
});
