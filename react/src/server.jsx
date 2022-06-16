import App from './App'
import { serve } from "./glue/react";

const render = (resource) => serve(App, resource);

export { render };
