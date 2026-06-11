# Campaign Hero Front-End Assessment

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
change the hero content or apply a brand theme. Wiring that behavior is the
candidate exercise.

## Candidate goals

1. Implement `mapCampaignHeroProps` in
   `src/core-utils/mapCampaignHeroProps.ts`.
2. Use the selected brand to load the matching campaign from
   `src/mock-contentful/campaigns.ts`.
3. Map the branded JSON to the business-agnostic `CampaignHeroProps` contract.
4. Update the hero content when the brand switcher selection changes.
5. Map the matching values from
   `src/mock-contentful/designTokens.ts` to semantic CSS custom properties.
6. Apply those semantic tokens so the selected brand changes the hero theme.
7. Demonstrate the completed dynamic experience in the app and Storybook.
8. Add focused tests for the content mapping and brand-switching behavior.

## Expected result

Selecting Auntie Anne's, Jamba, or Moe's should update:

- campaign copy;
- campaign artwork;
- calls to action and optional content;
- colors, borders, radii, and elevation from the matching design tokens.

The solution should keep:

- Contentful field knowledge inside `core-utils`;
- brand JSON and token selection outside `core-ui`;
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

## Verification

The starter baseline passes:

```bash
npm run assessment:check
```

Keep the baseline checks green and add tests for the completed dynamic behavior.
