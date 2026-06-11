# Senior Front-End Engineer Assessment

Turn the provided static campaign hero into a dynamic, branded experience.

The page already contains a reusable campaign hero and a visible, controlled
brand switcher. The switcher intentionally does not update the hero content or
apply themes in the starter state.

## Required work

1. Implement the mock Contentful mapper in `core-utils`.
2. Connect the selected brand to the matching campaign JSON.
3. Render the mapped campaign through `CampaignHero`.
4. Convert the matching design-token JSON into semantic CSS custom properties.
5. Apply the semantic tokens at a wrapper boundary.
6. Make the app and Storybook demonstrate all three branded campaign heroes.
7. Test the mapper and the content and theme changes triggered by the switcher.

## Architecture expectations

- `core-ui` remains business-agnostic.
- Contentful-specific field access remains in `core-utils`.
- Brand selection and token application remain outside `CampaignHero`.
- Shared styles consume semantic variables rather than brand selectors.
- No brand-specific branches are added to reusable UI components.

## Evaluation

We will review component design, data mapping, token architecture, TypeScript,
accessibility, responsive behavior, Storybook usage, testing, and overall
production readiness.

## Verification

```bash
npm run assessment:check
```
