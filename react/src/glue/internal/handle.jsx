import ReactDOMServer from 'react-dom/server';
import { ResourceProvider } from './contexts/ResourceProviderSSR';

export default function handle(Component, resource) {
  return ReactDOMServer.renderToString(
    <ResourceProvider resource={resource}>
      <Component />
    </ResourceProvider>
  );
}
