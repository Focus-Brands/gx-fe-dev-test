# Campaign Hero Front-End Assessment

Build a Storybook demonstration that turns mock Contentful campaign entries and
brand design tokens into reusable, themed campaign heroes.

The starter app is intentionally simple. It renders a neutral `CampaignHero`
with direct props and has no runtime connection to the mock Contentful data or
the brand token sets.

## Start here

```bash
npm install
npm run dev
npm run storybook
```

Read [`ASSESSMENT.md`](./ASSESSMENT.md) before making changes.

## Provided architecture

- `src/core-ui`: business-agnostic atoms, molecules, and the campaign hero
- `src/core-utils`: the boundary for mapping external data to UI props
- `src/mock-contentful`: raw campaign entries and raw brand token sets
- `src/core-ui/**/*.stories.tsx`: the neutral Storybook component catalogue

`CampaignHero` is already a responsive presentational component. Do not teach
it about Contentful fields, brand names, or Storybook globals.

## Baseline verification

The starter should pass:

```bash
npm run assessment:check
```

Candidate work should add focused tests for the mapper and theme switcher while
keeping the existing checks green.
