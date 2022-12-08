import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store/index.js';

import BaseForm from './components/base/BaseForm.vue';
import BaseButton from './components/base/BaseButton.vue';
import BaseSwitch from './components/base/input/BaseSwitch.vue';
import BaseOption from './components/base/input/BaseOption.vue';
import BaseSelect from './components/base/input/BaseSelect.vue';
import BaseText from './components/base/input/BaseText.vue';

const app = createApp(App);

app.component('base-form', BaseForm);
app.component('base-button', BaseButton);
app.component('base-switch', BaseSwitch);
app.component('base-option', BaseOption);
app.component('base-select', BaseSelect);
app.component('base-text', BaseText);
app.use(router);
app.use(store);

app.mount('#app');
