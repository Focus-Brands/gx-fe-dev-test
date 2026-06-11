# Campaign Hero

## Goal

Make the static campaign hero dynamic using the provided branded JSON and
design tokens.

The starter page includes:

- a responsive, static `CampaignHero`;
- a visible brand switcher for Auntie Anne's, Jamba, and Moe's;
- mock branded campaign JSON;
- mock design-token JSON;
- reusable `core-ui` components and a `core-utils` mapping boundary;
- Storybook stories for the provided UI components.

The brand switcher intentionally changes only its selected state. It does not
change the hero content or visual theme.

## Goals

1. Transform the branded campaign data into the hero's existing prop contract.
2. Update the hero content when the selected brand changes.
3. Use the provided design tokens to give each brand a distinct visual theme.
4. Demonstrate the completed experience in both the app and Storybook.

## Expected result

Selecting Auntie Anne's, Jamba, or Moe's should update:

- campaign copy;
- campaign artwork;
- calls to action and optional content;
- colors, borders, radii, and elevation from the matching design tokens.

Keep:

- data transformation inside `core-utils`;
- branded data and theme decisions outside `core-ui`;
- shared UI components reusable and free of brand-specific conditionals;
- the layout responsive and accessible.

## Project structure

- `src/core-ui`: reusable atoms, molecules, and the static campaign hero
- `src/core-utils`: branded JSON to UI prop mapping
- `src/mock-contentful/campaigns.ts`: branded campaign JSON
- `src/mock-contentful/designTokens.ts`: branded design-token JSON
- `src/App.tsx`: starter page and visible brand switcher

## Run the project

```bash
npm install
npm run dev
npm run storybook
```

## Production builds

Use `npm run build` and `npm run build:storybook` to verify both surfaces.
