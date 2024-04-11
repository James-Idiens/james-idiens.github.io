import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "LocalMaps",
      logo: {
        src: "./src/assets/localmaps-logo.png", // Path to your logo image
        alt: "Alternative text for logo", // Alternative text for accessibility
        replacesTitle: true, // Set to true if you want to hide the site title text and only show the logo
      },
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Admin Guide",
          collapsed: true,
          // the autogenerate option will automatically generate a sidebar based on the files in the directory
          autogenerate: { directory: "Admin-Guide" },
        },
        {
          label: "User Guide",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Getting Started", link: "user-guide/user-guide" },
            { label: "Gallery", link: "user-guide/gallery" },
          ],
        },
      ],
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
