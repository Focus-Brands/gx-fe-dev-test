export type BrandSwitcherOption = {
  label: string;
  value: string;
};

export type BrandSwitcherProps = {
  label: string;
  options: BrandSwitcherOption[];
  value: string;
  onChange: (value: string) => void;
};

export function BrandSwitcher({
  label,
  options,
  value,
  onChange,
}: BrandSwitcherProps) {
  return (
    <fieldset className="brand-switcher">
      <legend className="brand-switcher__label">{label}</legend>
      <div className="brand-switcher__options">
        {options.map((option) => (
          <button
            aria-pressed={option.value === value}
            className="brand-switcher__option"
            key={option.value}
            onClick={() => onChange(option.value)}
            type="button"
          >
            {option.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}
