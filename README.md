# 🌑 Next.js 15 SSR Dark Mode Starter

A modern starter built with **Next.js 15**, **React 19**, **Material UI v7**, and **Tailwind CSS v4**—fully configured for TypeScript, true SSR dark mode (no FOUC!), blazing-fast theme switching, and robust theme persistence using HTTP cookies.

---

## ✨ Features

- ⚡️ **Next.js 15** with App Router & Turbopack
- ⚛️ **React 19**
- 🎨 **Material UI v7** (colorSchemes, real CSS variables, SSR-aware)
- 💨 **Tailwind CSS v4** (JIT, extendable)
- 🧠 **TypeScript** support (strict, ready for production)
- 🧹 **ESLint & Prettier** preconfigured for clean code
- 🌙 **Record-setting Dark Mode with Real SSR**
  - Uses **HTTP cookies** for SSR theme persistence (not just localStorage!)
  - No flash of incorrect theme (zero FOUC) — the correct mode is rendered from the very first byte, even on reload or direct visit
  - The `<html data-mui-color-scheme="...">` attribute ensures global CSS and all MUI variables are in tight sync SSR ↔️ CSR
- 🧩 **MUI & Tailwind Integration**
  - All custom CSS and Tailwind utilities use MUI-generated CSS variables (`var(--mui-palette-background-default)`, etc.)
  - No legacy `.dark` class toggling—full scalability/compatibility using the modern `data-mui-color-scheme` attribute

## 🚀 Installation

```

npm install
npm run dev

```

---

## ⚡️ How Real SSR Theme Sync Works

**This starter reads the user's theme from an HTTP cookie (`themeSaved`) on the server,** so every HTML page is generated in the correct color mode, instantly—even on the first visit, page reload, or deep link.

> **No FOUC. No hydration mismatch. Always the right theme from the server, thanks to HTTP cookie sync.**

#### 💡 Example: SSR Root Layout (TypeScript)

- **Theme preference** is set (and updated by toggling) in both localStorage (for instant client-side hydration) and HTTP cookie (for SSR).
- With every browser reload, Next.js SSR reads the cookie so `<html data-mui-color-scheme="...">` is always correct before React or JS runs.

---

### 🧑‍💻 Example: Theme-Aware CSS Components

All backgrounds and colors in your custom components/layouts use the same tokens as Material UI:

```

body {
background: var(--mui-palette-background-default);
color: var(--mui-palette-text-primary);
}
.demo-theme-bg {
background: var(--mui-palette-background-paper);
}
.icon-themed {
color: var(--mui-palette-text-primary);
}

```

### 🌈 Theme Persistence

- **SSR:** Reads theme from `themeSaved` HTTP cookie to set color mode on `<html>`
- **CSR:** User toggling updates both localStorage (for client hydration) and the cookie (for future SSR renders)

### 🦾 Modern & Future-Proof

- Uses only official/recommended SSR methods of Next.js and MUI v7+
- No legacy `.dark` class toggling or fragile client-side hacks—theme sync happens on the server for every page

---

## 📄 License

MIT

---

**Enjoy a perfect dark/light experience with no flashes, no mismatches, and full server ↔️ client sync—out-of-the-box!**

```


```
