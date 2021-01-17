import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-emotion-theme';
import theme from './../src/theme'
import { INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import themeDecorator from './themeDecorator';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: {
       ...INITIAL_VIEWPORTS,
    },
  },
}

addDecorator(themeDecorator);

addDecorator(withThemesProvider([theme]));
