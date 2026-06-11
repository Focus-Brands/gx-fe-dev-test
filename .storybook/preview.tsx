import type { Preview } from '@storybook/react';
import '../src/styles/index.css';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    controls: { expanded: true },
    backgrounds: { disable: true },
  },
  decorators: [
    (Story) => (
      <div className="storybook-shell">
        <Story />
      </div>
    ),
  ],
};

export default preview;
