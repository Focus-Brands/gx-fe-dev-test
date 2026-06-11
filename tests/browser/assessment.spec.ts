import { expect, test } from '@playwright/test';

test('renders the neutral starter campaign without runtime errors', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  page.on('pageerror', (error) => errors.push(error.message));

  await page.goto('/');

  await expect(
    page.getByRole('heading', {
      level: 1,
      name: 'Make the next campaign impossible to miss.',
    }),
  ).toBeVisible();
  await expect(
    page.getByRole('img', { name: 'Abstract campaign artwork' }),
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Explore the campaign' }),
  ).toHaveAttribute('href', '#campaign');
  expect(errors).toEqual([]);
});

test('has no horizontal overflow on desktop or mobile', async ({ page }) => {
  for (const viewport of [
    { width: 1280, height: 800 },
    { width: 390, height: 844 },
  ]) {
    await page.setViewportSize(viewport);
    await page.goto('/');

    const dimensions = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }));

    expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth);
  }
});
