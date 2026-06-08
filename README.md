# Povl Filip Sonne-Frederiksen - Portfolio & Blog

A modern, responsive portfolio and blog website showcasing work at the intersection of architecture, computational design, and software development.

## About

This website serves as the professional portfolio and technical blog of Povl Filip Sonne-Frederiksen, featuring:

- Research and projects in LiDAR point cloud processing and 3D reconstruction
- Building information modeling (BIM) and computational design
- Open-source software development
- Publications and academic work from Aarhus School of Architecture
- Professional experience in architectural software development

## Tech Stack

Built with modern web technologies for optimal performance and developer experience:

- **[Hugo](https://gohugo.io/)** (v0.151.0+) - Fast static site generator
- **[Hugoplate](https://github.com/zeon-studio/hugoplate)** - Modern Hugo starter template
- **[Tailwind CSS v4.0](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Nix](https://nixos.org/)** - Reproducible development environment

## Features

- Responsive design optimized for all devices
- Dark mode with system-aware theme switching
- Full-text search functionality
- Multi-author support
- SEO optimized with structured data
- Syntax highlighting for code blocks
- Image optimization and lazy loading
- Cookie consent management
- Google Analytics integration
- Progressive Web App (PWA) support

## Getting Started

### Prerequisites

**Option 1: Using Nix (Recommended)**
```bash
nix develop
```

**Option 2: Manual Setup**
- [Node.js](https://nodejs.org/) v22 or higher
- [Go](https://golang.org/) v1.24 or higher
- [Hugo Extended](https://gohugo.io/installation/) v0.151.0 or higher
- [Git LFS](https://git-lfs.github.com/) for large file support

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/sonne-frederiksen.com.git
cd sonne-frederiksen.com
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Initialize Hugo modules:
```bash
npm run project-setup
```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:1313/`

The development server includes:
- Live reload on file changes
- Draft content preview
- Fast rebuild times

## Building for Production

Generate the static site:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

The generated site will be in the `public/` directory.

## Deployment

This site is configured for deployment on multiple platforms:

### Netlify (Primary)
The site deploys automatically via Netlify. Configuration is in `netlify.toml`.

### Other Platforms
- **Vercel**: Configuration in `vercel.json`
- **GitLab Pages**: CI/CD pipeline in `.gitlab-ci.yml`
- **AWS Amplify**: Configuration in `amplify.yml`
- **GitHub Pages**: Manual deployment from `public/` directory

## Project Structure

```
.
├── config/              # Hugo configuration files
│   └── _default/
│       ├── hugo.toml       # Main configuration
│       ├── params.toml     # Site parameters
│       ├── menus.en.toml   # Navigation menus
│       ├── module.toml     # Hugo modules
│       └── languages.toml  # Language settings
├── content/             # Markdown content
│   ├── authors/            # Author profiles
│   ├── blog/               # Blog posts and projects
│   ├── pages/              # Static pages
│   └── contact/            # Contact page
├── layouts/             # Custom Hugo templates
│   ├── authors/            # Author layouts
│   ├── partials/           # Reusable components
│   └── projects.html       # Projects page layout
├── assets/              # Source assets
│   ├── css/                # Custom styles
│   ├── images/             # Images
│   └── plugins/            # JavaScript plugins
├── static/              # Static files (PDFs, etc.)
├── data/                # Data files
│   ├── theme.json          # Theme configuration
│   └── social.json         # Social media links
├── themes/              # Hugo themes
│   └── hugoplate/          # Hugoplate theme (submodule)
├── public/              # Generated site (gitignored)
├── package.json         # Node dependencies
├── netlify.toml         # Netlify config
└── flake.nix            # Nix development environment
```

## Content Management

### Adding a Blog Post

Create a new markdown file in `content/blog/`:

```bash
hugo new blog/your-post-title/index.md
```

### Blog Post Front Matter

```yaml
---
title: "Your Post Title"
date: 2026-01-15
draft: false
image: "images/featured.jpg"
authors: ["Povl Filip Sonne-Frederiksen"]
tags: ["tag1", "tag2"]
categories: ["Category"]
description: "Brief description for SEO"
---
```

### Author Profiles

Author profiles are in `content/authors/`. Each author has:
- `index.md` - Profile information and bio
- `avatar.png` - Profile image
- Project gallery (optional)

## Configuration

### Site Settings

Edit `config/_default/params.toml` to customize:
- Site metadata and SEO
- Google Analytics
- Cookie consent
- Social media links
- Contact information

### Theme Customization

Modify `data/theme.json` to customize:
- Colors (primary, secondary, body, border)
- Fonts (primary and secondary with fallbacks)
- Dark mode colors

### Navigation

Update `config/_default/menus.en.toml` to modify:
- Header navigation
- Footer links

## Hugo Modules

This site uses 20+ Hugo modules for extended functionality:
- Search with full-text indexing
- Image processing and optimization
- Video embedding
- Font Awesome icons
- SEO tools (structured data, sitemaps, robots.txt)
- UI components (accordion, tabs, modals, gallery)
- Cookie consent
- Social sharing
- Mermaid diagrams

Update all modules:
```bash
npm run update-modules
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run format` - Format code with Prettier
- `npm run update-theme` - Update Hugoplate theme
- `npm run update-modules` - Update all Hugo modules

## Performance

The site is optimized for performance:
- Static site generation for fast load times
- Image optimization and lazy loading
- Minified CSS and JavaScript
- CDN-ready for global distribution
- Lighthouse score: 95+ on all metrics

## License

Content and original code are proprietary. The Hugoplate theme and Hugo modules have their own licenses.

## Contact

Povl Filip Sonne-Frederiksen
- Website: [sonne-frederiksen.com](https://sonne-frederiksen.com)
- LinkedIn: [linkedin.com/in/povl-filip-sonne-frederiksen](https://www.linkedin.com/in/povl-filip-sonne-frederiksen/)
- GitHub: [github.com/pfmephisto](https://github.com/pfmephisto)

---

Built with [Hugo](https://gohugo.io/) and [Hugoplate](https://github.com/zeon-studio/hugoplate)
