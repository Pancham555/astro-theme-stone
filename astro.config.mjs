import { defineConfig, passthroughImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel';
// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind(), compress(), keystatic(), react(), 
    icon({   include: ["iconamoon","mdi"],}),
  ],
 image: {
    service: passthroughImageService(),
  },
  adapter: vercel(),
});