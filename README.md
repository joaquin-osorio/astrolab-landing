# KeyLab Mk3 Landing Page

This repository contains the official marketing website for the Arturia **KeyLab Mk3** MIDI controllers, developed specifically for **Arturia Argentina**. It is built with the latest version of [Next.js](https://nextjs.org), **TypeScript**, and **Tailwind CSS**.

The site is composed of reusable React components and includes dynamic sections for product specifications and an image gallery. The design uses custom Supply fonts and a responsive layout to ensure a seamless experience on both desktop and mobile browsers.  
It also integrates **Vercel Analytics** to monitor performance and user interaction.

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the development server**

   ```bash
   npm run dev
   ```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

3. **Lint the project**

   ```bash
   npm run lint
   ```

 4. **Create a production build**
  
     ```bash
    npm run build
    npm start
     ```

## Project Structure

- **`src/app`** – Root layout and page entry built with the Next.js App Router.
- **`src/components`** – Reusable components such as the Hero banner, YouTube embeds, specification tables and product gallery.
- **`src/data`** – TypeScript files containing product specification data.
- **`public/assets`** – Images and fonts used throughout the site.

## Technology Stack

- **Next.js 15** with React 19
- **TypeScript** for type safety
- **Tailwind CSS 4** for styling
- **Vercel Analytics** for performance and user tracking
- Custom local fonts loaded via `@font-face`

## Deployment

The site can be deployed to any platform capable of running a Next.js application, such as Vercel. After running `npm run build`, start the production server with `npm start` or follow the hosting provider’s instructions.
