<script setup>
import { inject, computed } from 'vue';
import { resourceKey, problemKey, loadingKey, followKey } from "./glue/keys";
import HomePage from './pages/HomePage.vue';
import ArticlePage from './pages/ArticlePage.vue';
import BasicPage from './pages/BasicPage.vue';
import CollectionPage from './pages/CollectionPage.vue';
import DefaultPage from './pages/DefaultPage.vue';
const pageMap = (type) => {
  const map = {
    'home': HomePage,
    'page': ArticlePage,
    'article': BasicPage,
    'collection': CollectionPage
  }
  return (type in map) ? map[type] : DefaultPage;
}
const resource = inject(resourceKey);
const problem = inject(problemKey);
const loading = inject(loadingKey);
const follow = inject(followKey);
const type = computed(() => pageMap(resource?.value?.type))
</script>

<template>
  <h1 v-if="loading">Loading...</h1>
  <component :is="type" />
</template>
