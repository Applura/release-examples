<script setup>
import { inject, computed } from 'vue';
import { resourceKey, problemKey, loadingKey, followKey } from "./glue/keys";
import usePage from "./glue/composable/usePage";

const resource = inject(resourceKey);
const problem = inject(problemKey);
const loading = inject(loadingKey);
const follow = inject(followKey);

const type = computed(() => resource?.value?.type)
const { pageType } = usePage(type);
</script>

<template>
  <h1 v-if="loading">Loading...</h1>
  <component :is="pageType" v-if="resource" />
</template>
