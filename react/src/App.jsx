import React from 'react'
import MatchResource from './pages/MatchResource';
import ArticlePage from './pages/ArticlePage';
import BasicPage from './pages/BasicPage';
import HomePage from './pages/HomePage';
import CollectionPage from './pages/CollectionPage';
import DefaultPage from './pages/DefaultPage';
import { ResourceProvider } from './ResourceContext';
function App({ resource, problems, loading, client }) {

  return (
    <React.StrictMode>
      <ResourceProvider resource={resource} problems={problems} client={client}>
        <MatchResource resource={resource}>
          <HomePage type="home" />
          <BasicPage type="page" />
          <ArticlePage type="article" />
          <CollectionPage type="collection" />
          <DefaultPage default />
        </MatchResource>
        {loading && <p>Loading...</p>}
      </ResourceProvider>
    </React.StrictMode>
  )
}

export default App
