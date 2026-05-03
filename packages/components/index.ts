import type { App } from 'vue';
import * as components from './components';

export const install = function (app: App) {
  Object.entries(components).forEach(([key, value]) => {
    app.component(`G${key}`, value);
  });
};

export default install