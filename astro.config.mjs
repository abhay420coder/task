import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";
const SERVER_PORT = 3000;
// the url to access your blog during local development
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}/`;
// the url to access  your blog after deploying it somewhere (eg. Netlify)
const LIVE_URL = "https://abhay420coder.github.io";
// this is the nasttro command your npm runs
const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build")
let BASE_URL = LOCALHOST_URL;
// when you are building your site in local or cli , you could just set your url manually
if(isBuild){
	BASE_URL=LIVE_URL
}
// https://astro.build/config
export default defineConfig({
	server:{port:SERVER_PORT},
  	site: BASE_URL,
  	integrations: [mdx(), sitemap(), tailwind()]
});