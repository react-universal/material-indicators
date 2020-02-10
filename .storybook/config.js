import {addParameters, configure, addDecorator} from '@storybook/react';
const context = require.context('../storybook/stories', true, /.(js|mdx)$/);

configure(context, module);
