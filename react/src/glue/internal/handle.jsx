import ReactDOMServer from 'react-dom/server';
import { ResourceProvider } from './contexts/ResourceContext';

export default function handle(Component, resource) {
  return ReactDOMServer.renderToString(
    <ResourceProvider resource={resource} problem={undefined} client={undefined}>
      <Component />
    </ResourceProvider>
  );
}
