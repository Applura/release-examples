import { isRef, shallowRef, unref, watchEffect } from 'vue';
import HomePage from '../../pages/HomePage.vue';
import ArticlePage from '../../pages/ArticlePage.vue';
import BasicPage from '../../pages/BasicPage.vue';
import CollectionPage from '../../pages/CollectionPage.vue';
import DefaultPage from '../../pages/DefaultPage.vue';

const pageMap = (type) => {
  const map = {
    'home': HomePage,
    'page': ArticlePage,
    'article': BasicPage,
    'collection': CollectionPage
  }
  return (type in map) ? map[type] : DefaultPage;
}
export default function usePage(resource) {
  const pageType = shallowRef(DefaultPage);
  function mapTypeToPage() {
    console.log('type', resource.value.type)
    pageType.value = pageMap(resource.value.type);
  }
  if (isRef(resource)) {
    console.log('is ref');
    watchEffect(mapTypeToPage);
  } else {
    mapTypeToPage();
  }

  return { pageType };
}
