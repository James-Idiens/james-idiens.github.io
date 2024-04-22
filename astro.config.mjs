import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({

  output: "static",

  integrations: [
    starlight({
      title: "LocalMaps",
      components: {
        // Override the default `SocialIcons` component.
        SocialIcons: './src/components/DownloadButton.astro',
      },

      logo: {
        src: "./src/assets/localmaps-logo.png", // Path to your logo image
        alt: "Alternative text for logo", // Alternative text for accessibility
        replacesTitle: true, // Set to true if you want to hide the site title text and only show the logo
      },
      sidebar: [
        {
          label: "Admin Guide",
          collapsed: true,
          autogenerate: { directory: "admin-guide" },
        },
        {
          label: "User Guide",
          collapsed: true,
          autogenerate: { directory: "user-guide" },
        },
      ],
      customCss: ["./src/tailwind.css"],
      favicon: "/favicon.png",
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
