import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://james-idiens.github.io",
  output: "static",

  integrations: [
    starlight({
      title: "LocalMaps",
      logo: {
        src: "./src/assets/localmaps-logo.png", // Path to your logo image
        alt: "Alternative text for logo", // Alternative text for accessibility
        replacesTitle: true, // Set to true if you want to hide the site title text and only show the logo
      },
      // social: {
      //   github: "https://github.com/withastro/starlight",
      // },
      sidebar: [
        {
          label: "Admin Guide",
          collapsed: true,
          items: [
            { label: "Getting Started", link: "admin-guide/introduction" },
          ],
        },
        {
          label: "User Guide",
          collapsed: true,
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Getting Started", link: "user-guide/introduction" },
            { label: "Gallery", link: "user-guide/gallery" },
          ],
        },
      ],
      customCss: ["./src/tailwind.css"],
      favicon: "/favicon.png",
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
