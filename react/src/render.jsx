import App from './App'
import handle from './glue/internal/handle';

const render = (resource) => handle(App, resource);

export { render };
