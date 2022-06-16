import React, {useContext} from 'react'
import MatchResource from './pages/MatchResource';
import ArticlePage from './pages/ArticlePage';
import BasicPage from './pages/BasicPage';
import HomePage from './pages/HomePage';
import CollectionPage from './pages/CollectionPage';
import DefaultPage from './pages/DefaultPage';
import {ResourceContext} from "./glue/ResourceContext";

function App() {
  const { resource, loading } = useContext(ResourceContext);
  return (
    <React.StrictMode>
      <MatchResource resource={resource}>
        <HomePage type="home" />
        <BasicPage type="page" />
        <ArticlePage type="article" />
        <CollectionPage type="collection" />
        <DefaultPage default />
      </MatchResource>
      {loading && <p>Loading...</p>}
    </React.StrictMode>
  )
}

export default App
