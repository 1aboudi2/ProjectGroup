# Project Atelier d'Interculturalité

A lightweight React + Vite site that showcases a project with editable content stored entirely in the browser. Use the included admin tools to tailor the copy without deploying a backend or database.

## Tech Stack
- React 18 with TypeScript
- Vite 7
- React Router
- Tailwind CSS

## Getting Started
1. Install dependencies  
   `npm install`
2. Start the dev server  
   `npm run dev`
3. Build for production  
   `npm run build`

## Editing the Content
1. Browse to `/admin` (use the “Admin” link in the top bar).
2. Update the project name, section copy, and the three expandable detail paragraphs.
3. Click **Save changes** to persist everything to `localStorage`. Refreshing the page keeps your edits.
4. Use **Reset to defaults** if you want to restore the original placeholder content.

All pages subscribe to the same content context, so updates appear instantly on the Home and Details views.

## Project Structure
- `src/context/ContentContext.tsx` – Loads, stores, and shares content state via React context.
- `src/components/` – Reusable UI pieces (`TopBar`, `CollageHero`, `Accordion`, `AdminForm`).
- `src/pages/` – Route-driven pages for Home, Details, and Admin.

Enjoy tailoring your project story!

