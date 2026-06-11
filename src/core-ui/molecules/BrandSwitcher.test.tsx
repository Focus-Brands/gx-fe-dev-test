import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { BrandSwitcher } from './BrandSwitcher';

const options = [
  { label: "Auntie Anne's", value: 'auntie-annes' },
  { label: 'Jamba', value: 'jamba' },
];

describe('BrandSwitcher', () => {
  it('exposes the selected option and reports changes', () => {
    const onChange = vi.fn();

    render(
      <BrandSwitcher
        label="Brand preview"
        onChange={onChange}
        options={options}
        value="auntie-annes"
      />,
    );

    expect(
      screen.getByRole('button', { name: "Auntie Anne's" }),
    ).toHaveAttribute('aria-pressed', 'true');

    screen.getByRole('button', { name: 'Jamba' }).click();

    expect(onChange).toHaveBeenCalledWith('jamba');
  });
});
