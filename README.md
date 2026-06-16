# Campaign Hero

## Objective
You are joining a project that already includes a reusable campaign hero component library and established 
design system primitives. Your task is to make the hero experience brand-aware and data-driven by connecting 
branded campaign data from the mock-contentful source to the existing hero contract. Brand switching should 
automatically update content, media, actions, optional metadata, and visual theming (colors, borders, radius, 
and elevation tokens). All transformation and mapping logic should live in core-utils 
(primarily mapCampaignHeroProps.ts), while core-ui components remain generic, reusable, and free of brand-specific 
conditionals. Brand data and token decisions should be handled outside of UI primitives. Your implementation should be 
testable through both src/App.tsx and Storybook stories, and should demonstrate strong separation of concerns, clean 
TypeScript contracts, scalable architecture for future brands and content models, responsive design, and accessibility 
best practices.

## Requirements

- Transform the branded campaign data into the existing hero prop contract.
- Update campaign copy, artwork, actions, and optional content when the selected
  brand changes.
- Apply the selected brand's colors, borders, radii, and elevation.
- Demonstrate the completed experience in both the app and Storybook.
- Keep the layout responsive and accessible.
- Node version 20 or higher.

## Boundaries

- data transformation inside `core-utils`;
- branded data and theme decisions outside `core-ui`;
- shared UI components remain reusable and free of brand-specific conditionals.

## Commands

```bash
nvm use
```

```bash
npm install
npm run dev
npm run storybook
npm run build
npm run build:storybook
```
