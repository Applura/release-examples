import { createApp } from 'vue'
import resourcePlugin from './resourcePlugin';

export default async function mount(app, id) {
  createApp(app).use(resourcePlugin).mount(id);
}
