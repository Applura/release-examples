import App from './App'
import { serve } from './glue';

const render = (resource) => serve(App, resource);

export { render };
