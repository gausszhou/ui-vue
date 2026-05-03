import DefaultTheme from 'vitepress/theme';
import GUI from '@gausszhou/ui-vue-components';
import '@gausszhou/ui-vue-theme-chalk';

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    app.use(GUI);
  }
};