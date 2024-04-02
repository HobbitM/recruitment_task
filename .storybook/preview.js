/** @type { import('@storybook/react').Preview } */
import { MemoryRouter } from "react-router-dom";

const withReactRouterProvider = (Story) => (
  <MemoryRouter>
    <Story />
  </MemoryRouter>
);

export const decorators = [withReactRouterProvider];

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
};
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
