import ArticlePage from './ArticlePage';
import BasicPage from './BasicPage';
import HomePage from './HomePage';
import CollectionPage from './CollectionPage';
import DefaultPage from './DefaultPage';

const pageTypes = {
  'home': HomePage,
  'page': BasicPage,
  'article': ArticlePage,
  'collection': CollectionPage,
}

const Page = ({ type }) => {
  const PageType = pageTypes.hasOwnProperty(type) ? pageTypes[type] : DefaultPage;
  return <PageType />
}

export default Page;
