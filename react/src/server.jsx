import ReactDOMServer from 'react-dom/server'
import App from './App'

const render = (data) =>
  ReactDOMServer.renderToReadableStream(
    <App resource={data} />
  );

export { render };
