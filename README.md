# LocalMaps Documentation Website

This is the repo for the LocalMaps documentation static site. It is built on Astro + Starlight with Tailwind CSS.

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
|   |   ├── some-localmaps-image.png
│   ├── content/
│   │   ├── docs/
|   |   |   ├── admin-guide/
|   |   |   |   ├── a-documentation-file.md
|   |   |   ├── user-guide/
|   |   |   |   ├── another-documentation-file.md
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 📄 How to create a documentation page

**A documentation example template to copy is provided at `src/content/docs/example-template.md`. You can copy this template and modify it to create your own documentation pages.**

1. Create a new `.md` file either the `src/content/docs/admin-guide/` or `src/content/docs/user-guide/` directory depending on which guide you are writing for. The file name will be the URL path for the page. If it is multiple words, use kebab-case like `my-documentation-page.md`.

2. Add frontmatter to the top of the file. This is metadata about the page, like the title and description. Here is an example:

```markdown
---
title: Draw/Measure
description: How to use the draw/measure widget
sidebar:
  order: 5
---
```
The `title` is the title of the page, and what will be displayed in the sidebar. The `description` is metadata picked up by search engines, so just put a short description of the page here.

The `sidebar` object is optional, as by default the pages get sorted into alphabetical order, but if you want to control the order of the pages in the sidebar, you can add an `order` key. The lower the number, the higher up the page will be in the sidebar e.g. `order: 1` will be at the top.

3. Write your documentation in Markdown. For help with Markdown, check out the [Markdown Guide](https://www.markdownguide.org/), or the Starlight [Markdown Guide](https://starlight.astro.build/guides/authoring-content/).

The general structure of a documentation page is:

```markdown
# Title goes here
Introduction goes here
## Subheading
Content goes here
### Sub-subheading if needed
Content goes here
```
The heading are used to generate the table of contents in the sidebar under 'On this page'.

4. If needed, add images to the `src/assets/` directory and reference them in your Markdown file. For example, if you have an image called `my-image.png` in the `src/assets/` directory, you can reference it in your Markdown file like this:

```markdown
![Alt text](../../../assets/my-image.png)
```
Alt text is a short description of the image for screen readers.

If you want to link to an image from the web, you can use a URL instead of a relative path like this:

```markdown
![Alt text](https://example.com/my-image.png)
```

5. Commit your changes and push. If you are editing the documentation on Azure DevOps, once you commit your changes to the `main` branch, the site will automatically update.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), or read [the Astro documentation](https://docs.astro.build)
