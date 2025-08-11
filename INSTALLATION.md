# Project Installation Guide

## Prerequisites
- Node.js (version 16 or higher)
- npm (comes with Node.js) or yarn

## Setup Instructions

### 1. Install Node.js
If Node.js is not already installed on your system, download and install it from:
https://nodejs.org/en/download/

Verify installation:
```bash
node --version
npm --version
```

### 2. Navigate to Project Directory
```bash
cd schoolwebsite
```

### 3. Install Dependencies
Install all project dependencies (this will install both dependencies and devDependencies from package.json):
```bash
npm install
```

### 4. Run Development Server
Start the development server with hot reloading:
```bash
npm run dev
```

The application will be available at http://localhost:5173 (or similar, check terminal output for exact URL)

### 5. Build for Production
When you're ready to deploy:
```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### 6. Preview Production Build
To preview the production build locally:
```bash
npm run preview
```

## Project Structure Overview
- `src/` - Contains all source code
- `public/` - Static assets
- `index.html` - Main HTML file
- `vite.config.js` - Vite configuration
- `tailwind.config.js` - TailwindCSS configuration
- `postcss.config.js` - PostCSS configuration

## Key Dependencies
- React & React DOM
- React Router DOM (for navigation)
- TailwindCSS (for styling)
- Swiper (for carousel components)
- React Icons & Heroicons (for icons)
- React PDF (for PDF viewing)
- React Helmet (for document head management)
- EmailJS (for email functionality)

## Development Dependencies
- Vite (build tool)
- ESLint (code linting)
- PostCSS & Autoprefixer (CSS processing)
