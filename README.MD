# 🍞 Baker 7 – Minimalist Jekyll Theme

A responsive, elegant, and mobile-friendly bakery website theme built using Jekyll. Designed with a vibrant **yellow and dark grey** palette to showcase artisanal baked goods.

---

## 📁 Project Structure

```
baker7-theme/
├── _includes/
│   ├── header.html
│   └── footer.html
├── _layouts/
│   └── default.html
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
├── index.html
├── _config.yml
├── Gemfile
└── README.md
```

---

## 🚀 Getting Started

### 1. Prerequisites

Ensure you have Ruby and Bundler installed:

```bash
ruby -v
bundler -v
```

### 2. Install Dependencies

```bash
bundle install
```

### 3. Serve Locally on Port 8000

```bash
bundle exec jekyll serve --host 0.0.0.0 --port 8000
```

Visit: `http://localhost:8000` or `http://<your-ip>:8000` from other devices on your LAN.

---

## 🧩 Customization Guide

### Modify Sections
Edit `index.html` for:
- Hero Banner
- About Section
- Product Cards
- Contact Form

### Update Styles
Modify `assets/css/style.css` to change:
- Colors, Fonts
- Layouts & Breakpoints
- Button/Link styles

### Mobile Navigation
Toggle via JavaScript (`assets/js/script.js`) using the hamburger menu. Logic:
- Adds `.active` class to show/hide nav links.

---

## 🔧 Adding Pages
To add new pages:
```md
---
layout: default
title: About
---

<h1>About Our Bakery</h1>
<p>We love what we bake.</p>
```
Save as `about.html` in root directory.

Add link to `header.html` if needed.

---

## ⚙️ Configuration
Defined in `_config.yml`:
```yaml
title: Baker 7
baseurl: ""
url: ""
```

To serve your Jekyll site on `0.0.0.0:8000`, use the following command in your project directory:

```bash
bundle exec jekyll serve --host 0.0.0.0 --port 8000
```

### 🔍 Explanation:

* `--host 0.0.0.0`: Binds the server to all network interfaces (useful for accessing it from other devices on your LAN or over Docker).
* `--port 8000`: Runs the server on port `8000` instead of the default `4000`.

### Optional Flags:

* `--livereload`: Automatically reloads the browser on changes.
* `--watch`: Watches for file changes (enabled by default).

### Example with all flags:

```bash
bundle exec jekyll serve --host 0.0.0.0 --port 8000 --livereload --watch
```

---

## 💡 Future Enhancements
- [ ] Add product page with detailed listings
- [ ] Add Jekyll plugins: SEO, Sitemap, Feed
- [ ] Deploy to GitHub Pages

---

## 🧾 License
MIT License. Free to use and modify.

---

## 🙌 Credits
Designed by [You]. Developed with ❤️ using Jekyll.


Great question!

Using **SVGs** can absolutely improve performance — **but only under specific conditions**. Let's break it down so you can make the best choice for your bakery site.

---

## ✅ When SVGs Are Faster and Better:

| Use Case                             | SVG is Great? | Why?                                            |
| ------------------------------------ | ------------- | ----------------------------------------------- |
| Icons, logos, line art               | ✅ Yes         | Vector, small file size, crisp on all screens   |
| Decorative UI flourishes             | ✅ Yes         | Scales beautifully, no pixelation               |
| Illustrations without raster texture | ✅ Yes         | Loads faster, CSS-stylable                      |
| Photos (like baked goods)            | ❌ No          | SVG isn't suited for complex, photo-real images |

---

## ❌ When Not to Use SVG:

If you're showing **real images** like croissants, cookies, or bread loaves — SVG **won’t help**, because:

* Those are bitmap/raster images (not vector)
* Converting them to SVG either:

  * Loses quality (traced vector)
  * Increases file size (embedded base64 images in SVG)

---

## 🧁 Best Strategy for Bakery Product Images (Non-SVG)

1. ✅ **Use WebP** format (much smaller and faster than JPEG/PNG)

   * Convert all your product images to `.webp`
   * 30–80% smaller than JPG with no noticeable quality loss

2. ✅ Use responsive images with `srcset`

   ```html
   <img
     src="/assets/images/cookie.webp"
     srcset="/assets/images/cookie@2x.webp 2x"
     alt="Choco Cookie"
     width="300"
     height="200"
     loading="lazy"
   >
   ```

3. ✅ Add `loading="lazy"` to delay loading until visible on screen

4. ✅ Optimize image dimensions (no massive 2000px-wide images on mobile)

5. ✅ Compress using tools like:

   * [Squoosh](https://squoosh.app)
   * [TinyPNG](https://tinypng.com)
   * `imagemin` CLI (for automation)

---

## ⚡ TL;DR Recommendation

| You want to show…          | Use…                             |
| -------------------------- | -------------------------------- |
| Logos, icons, backgrounds  | SVG                              |
| Product photos (real food) | WebP + lazy load + proper sizing |

---

Would you like help converting your current product images to WebP and updating your HTML accordingly?
