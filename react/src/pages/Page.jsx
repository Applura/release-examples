import ArticlePage from './ArticlePage';
import HomePage from './HomePage';
import DefaultPage from './DefaultPage';

const pageTypes = {
  'home': HomePage,
  'article': ArticlePage,
}

const Page = ({ type }) => {
  const PageType = pageTypes.hasOwnProperty(type) ? pageTypes[type] : DefaultPage;
  return <PageType />
}

export default Page;
