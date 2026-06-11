# Senior Front-End Engineer Assessment

## Objective

Use Storybook, `core-ui`, and `core-utils` to demonstrate how you would connect
mock Contentful data and design tokens to a reusable campaign hero.

The default Vite app is only a neutral reference state. It must remain usable
without importing from `src/mock-contentful` or `src/core-utils`.

## Required work

1. Implement `mapCampaignHeroProps` in
   `src/core-utils/mapCampaignHeroProps.ts`.
2. Map every supported mock Contentful campaign to the
   `CampaignHeroProps` contract. Keep Contentful-specific field access out of
   `core-ui`.
3. Create a reusable, controlled theme switcher component in `core-ui`. It must
   be agnostic to the supplied brand names and token values.
4. Add a Storybook integration story that:
   - renders the mapped mock campaign data;
   - allows switching between Auntie Anne's, Jamba, and Moe's;
   - applies the matching values from `mockDesignTokens`;
   - changes the hero through semantic design tokens, not brand checks inside
     React components.
5. Add focused tests for the mapper and theme switcher.

## Design-token expectations

- Expose a small semantic token contract through CSS custom properties.
- Apply the selected token set at a wrapper boundary.
- Consume semantic variables in shared UI styles.
- Do not create selectors or component branches for individual brands.
- Ensure the selected brand updates both campaign content and presentation.

The shape of the semantic CSS variables is your design decision. The raw token
data is provided in `src/mock-contentful/designTokens.ts`.

## Evaluation

We will review:

- separation between external data, mapping logic, and presentational UI;
- atomic, reusable component design;
- TypeScript correctness and handling of optional or malformed content;
- Storybook controls and clarity of the branded demonstration;
- responsive behavior and accessibility;
- test quality and maintainability;
- production readiness without unnecessary framework or state complexity.

## Constraints

- Keep files under 1000 lines.
- Prefer flexbox for layout.
- Do not add routing or a global state library.
- Do not hardcode brand conditionals in `CampaignHero` or its child components.
- Do not replace the mock data with already-normalized fixtures.
- Keep the neutral default app independent from the assessment integration.

## Verification

```bash
npm run lint
npm run typecheck
npm run test
npm run test:browser
npm run build
npm run build:storybook
```
