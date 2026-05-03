import DefaultTheme from 'vitepress/theme';
import UIComponents from '@gausszhou/ui-vue-components';
import '@gausszhou/ui-vue-theme-chalk';
import '@gausszhou/ui-vue-icons';

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    app.use(UIComponents);
  }
};