import App from './App'
import { handle } from './glue';

const render = (resource) => handle(App, resource);

export { render };
