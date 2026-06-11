# Campaign Hero

## Objective

Make the static campaign hero dynamic using the provided branded JSON and
design tokens. The provided brand switcher intentionally changes only its
selected state.

## Requirements

- Transform the branded campaign data into the existing hero prop contract.
- Update campaign copy, artwork, actions, and optional content when the selected
  brand changes.
- Apply the selected brand's colors, borders, radii, and elevation.
- Demonstrate the completed experience in both the app and Storybook.
- Keep the layout responsive and accessible.

## Boundaries

- data transformation inside `core-utils`;
- branded data and theme decisions outside `core-ui`;
- shared UI components remain reusable and free of brand-specific conditionals.

## Commands

```bash
npm install
npm run dev
npm run storybook
npm run build
npm run build:storybook
```
